import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Alert,
  Image,
  Text, View,
} from "react-native";
import styled from "styled-components/native";
import {OPEN_WEATHER_API_KEY} from "@env";
import {LinearGradient} from "expo-linear-gradient";
import CurrentForecast from "./components/CurrentForecast";
import {useTailwind} from 'tailwind-rn';

const API_KEY = OPEN_WEATHER_API_KEY;

export default function App() {
  const tailwind = useTailwind();
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);

  const getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({ accuracy: 5 });
      return { latitude, longitude };
    } catch (error) {
      Alert.alert("Can't find you.");
    }
  };

  const getWeather = async () => {
    const coords = await getLocation();
    const { latitude, longitude } = coords;
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );
    setLocation(location);

    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&mode=json&units=metric&lang=kr`;
    console.log(url);
    const response = await fetch(url);
    const json = await response.json();
    setWeatherData(json.list);
    const currentWeather = weatherData ? weatherData[0] : null;
    setCurrentWeather(currentWeather);
  };

  useEffect(() => {
    getWeather();
  }, []);


  console.log("currentWeather");
  console.log(currentWeather);

  const regionString = location ? `${location[0]?.region} ${location[0]?.district}` : "Loading...";
  return (
    <Container>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#050550']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5}}
      >
        <View style={styles.container}>
          <View style={styles.topSection}>
            <View style={styles.topLeftSection}>
              <Text style={styles.CurrentTemp}>{currentWeather?.main?.temp}°</Text>
              <Text style={styles.CurrentWeatherDescription}>{currentWeather?.weather[0]?.description}</Text>
              <Text style={styles.CurrentRegion}>{regionString}</Text>
              <Text style={styles.CurrentTempDescription}>{currentWeather?.main?.temp_max}° / {currentWeather?.main?.temp_min}° 체감온도 {currentWeather?.main?.feels_like}°</Text>
            </View>
            <View style={styles.topRightSection}>
              <Text>{currentWeather?.weather[0]?.icon}</Text>
              {currentWeather?.weather[0]?.icon && (
                <Image
                  style={styles.weatherIconSection}

                  source={{
                    uri: `http://openweathermap.org/img/wn/${currentWeather?.weather[0]?.icon}@2x.png`,
                  }}
                  resizeMode={"contain"}
                />
              )}
            </View>
          </View>
          <View style={styles.temperatureSection}>
          </View>
        </View>
        {/*<View style={tailwind('pt-12 items-center')}>*/}
        {/*  <View style={styles.temperatureSection}>*/}
        {/*    <Text style={styles.temperatureText}>{currentWeather?.main?.temp}°C</Text>*/}
        {/*    <Text>{regionString}</Text>*/}
        {/*    <Text>체감 {currentWeather?.main?.feels_like}</Text>*/}
        {/*  </View>*/}
        {/*  <View style={styles.weatherIconSection}>*/}
        {/*    <Text>{currentWeather?.weather[0]?.icon}</Text>*/}
        {/*  </View>*/}
        {/*</View>*/}
        {/*<View><Text>{location}</Text></View>*/}
        {/*<View><Text>{}</Text></View>*/}
        {/*<CurrentForecast currentWeather={currentWeather} />*/}
      </LinearGradient>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: dodgerblue;
`;


const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    width : '100%',
    padding: 30,
  },
  gradient: {
    width: 300,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  topSection: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  topLeftSection: {
    flex: 1,
    width: '50%',
    paddingTop: 80,
  },
  CurrentTemp: {
    fontSize: 60,
    fontWeight: 'bold',
  },
  CurrentWeatherDescription: {
    fontSize: 20,
    marginTop: 15,
    marginBottom: 15,
  },
  CurrentRegion: {
    fontSize: 20,
  },
  CurrentTempDescription: {
    fontSize: 16,

  },
  topRightSection: {
    flex: 1,
    width: '50%',
    backgroundColor: 'pink',
  },
  weatherIconSection: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
  },
  temperatureSection: {
    flex:2,
    width: '100%',
    backgroundColor: 'gray',
    justifyContent: 'center',
  },
  temperatureText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  graphSection: {
    flex: 5,
    height: 200,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  tableSection: {
    flex: 5,
    height: 150,
    backgroundColor: 'gray',
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tableCell: {
    fontSize: 16,
  },
  infoBoxesSection: {
    flex: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  infoBox: {
    width: '48%',
    height: 100,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});
