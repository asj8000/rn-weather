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
import {useTailwind} from 'tailwind-rn';
import CurrentForecastComponent from "./components/CurrentForecast";
import HourlyWeather from "./components/HourlyWeather";

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

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWeatherData(data.list);
      })
      .catch((error) => {
        console.warn(error);
      }
    );
  };

  useEffect(() => {
    setCurrentWeather(weatherData ? weatherData[0] : null);
  }, [weatherData]);

  useEffect(() => {
    getWeather();
  }, []);



  const regionString = location ? `${location[0]?.region} ${location[0]?.district}` : "Loading...";
  return (
    <Container>
      <ScrollView style={styles.scrollView}>
        <LinearGradient
          colors={['#0d5acc', '#3b5998', '#050550']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5}}
        >
          <View style={styles.container}>
            <View style={styles.topSection}>
              <CurrentForecastComponent currentWeather={currentWeather} regionString={regionString} />
            </View>
            <View style={styles.hourlyWeatherSection}>
              <HourlyWeather hourlyData={weatherData} />
            </View>
            <View style={styles.temperatureSection}>
              <View></View>
            </View>
            <View style={styles.temperatureSection}>
              <View></View>
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
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
    color: 'white',
  },
  gradient: {
    width: 300,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  topSection: {
    // flex: 1,
    height: 275,
    // backgroundColor: 'pink',
  },
  hourlyWeatherSection: {
    // flex: 1,
    height: 175,
    // backgroundColor: 'gray',
    marginTop: 40,
  },
  temperatureSection: {
    // flex: 1,
    height: 300,
    width: '100%',
    marginTop: 40,
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
