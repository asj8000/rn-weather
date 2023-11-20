import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import {OPEN_WEATHER_API_KEY} from "@env";

const API_KEY = OPEN_WEATHER_API_KEY;

export default function App() {
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

  const regionString = location ? `${location[0]?.region} ${location[0]?.district}` : "Loading...";
  return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.topSection}>
            <View style={styles.temperatureSection}>
              <Text style={styles.temperatureText}>{currentWeather?.main?.temp}°C</Text>
              <Text>{regionString}</Text>
              <Text>체감 {currentWeather?.main?.feels_like}</Text>
            </View>
            <View style={styles.weatherIconSection}>
              <Text>{currentWeather?.weather[0]?.icon}</Text>
            </View>
          </View>
          <View style={styles.graphSection}></View>
          <ScrollView style={styles.tableSection}>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>시간</Text>
              <Text style={styles.tableCell}>날씨</Text>
              <Text style={styles.tableCell}>강수확률</Text>
              <Text style={styles.tableCell}>강수량</Text>
              <Text style={styles.tableCell}>습도</Text>
              <Text style={styles.tableCell}>풍속</Text>
            </View>
            {weatherData && weatherData.map((item, index) => (
              <View style={styles.tableRow} key={index}>
                <Text style={styles.tableCell}>{new Date(item.dt * 1000).toLocaleTimeString()}</Text>
                <Text style={styles.tableCell}>{item.weather[0].description}</Text>
                <Text style={styles.tableCell}>{item.pop}%</Text>
                <Text style={styles.tableCell}>{item.rain ? item.rain["3h"] : 0}mm</Text>
                <Text style={styles.tableCell}>{item.main.humidity}%</Text>
                <Text style={styles.tableCell}>{item.wind.speed}m/s</Text>
              </View>
            ))}
          </ScrollView>
          <View style={styles.infoBoxesSection}>
            <View style={styles.infoBox}>
              <Text>일출</Text>
              <Text>06:00</Text>
            </View>
            <View style={styles.infoBox}>
              <Text>일출</Text>
              <Text>06:00</Text>
            </View>
            <View style={styles.infoBox}>
              <Text>일출</Text>
              <Text>06:00</Text>
            </View>
            <View style={styles.infoBox}>
              <Text>일출</Text>
              <Text>06:00</Text>
            </View>
          </View>
          <View style={styles.infoBoxesSection}>
            <View style={styles.infoBox}>
              <Text>일출</Text>
              <Text>06:00</Text>
            </View>
          </View>
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    padding: 20,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  temperatureSection: {
    justifyContent: 'center',
  },
  temperatureText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  weatherIconSection: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
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
