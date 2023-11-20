import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
} from "react-native";

// const API_KEY = "-";
const API_KEY = "-";

export default function App() {
  const [location, setLocation] = useState(null);
  const [days, setDays] = useState([]);
  const [weatherData, setWeatherData] = useState([
    { date: "2023-11-01", high: 30, low: 20 },
    { date: "2023-11-02", high: 31, low: 21 },
    { date: "2023-11-03", high: 32, low: 22 },
    { date: "2023-11-04", high: 33, low: 23 },
    { date: "2023-11-05", high: 34, low: 24 },
    { date: "2023-11-06", high: 35, low: 25 },
    { date: "2023-11-07", high: 36, low: 26 },
    { date: "2023-11-08", high: 37, low: 27 },
    { date: "2023-11-09", high: 38, low: 28 },
    { date: "2023-11-10", high: 39, low: 29 },
  ]);

  const getLoaction = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({ accuracy: 5 });
      console.log(latitude, longitude);
      return { latitude, longitude };
    } catch (error) {
      Alert.alert("Can't find you.");
    }
  };

  const getWeather = async () => {
    console.log("getWeather");
    const coords = await getLoaction();
    const { latitude, longitude } = coords;
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );
    console.log(location);
    setLocation(location);

    // open weather api

    const url  = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&mode=json&units=metric&lang=kr`;
    console.log(url);
    const response = await fetch(
      url

    );

    const json = await response.json();
    console.log(json);
    setDays(json.daily);

  };

  useEffect(() => {
    getLoaction();
    getWeather();
  }, []);


  const regionString = location ? `${location[0].region} ${location[0].district}` : "Loading...";
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.temperatureSection}>
          <Text style={styles.temperatureText}>23°C</Text>
          <Text>{regionString}</Text>
          <Text>체감 25°C</Text>
        </View>
        <View style={styles.weatherIconSection}>
          <Text>☀️</Text>{/* 날씨 아이콘 대체 */}
        </View>
      </View>

      <View style={styles.graphSection}>
        {/* 그래프 영역 */}
        <Text>시간별 온도 그래프</Text>
      </View>

      <ScrollView style={styles.tableSection}>
        {weatherData.map((item, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.tableCell}>{item.date}</Text>
            <Text style={styles.tableCell}>{item.high}°C</Text>
            <Text style={styles.tableCell}>{item.low}°C</Text>
          </View>
        ))}
      </ScrollView>


      <View style={styles.infoBoxesSection}>
        {/* 정보 박스 */}
        <View style={styles.infoBox}><Text>미세먼지</Text></View>
        <View style={styles.infoBox}><Text>초미세먼지</Text></View>
        <View style={styles.infoBox}><Text>자외선 지수</Text></View>
        <View style={styles.infoBox}><Text>습도</Text></View>
        <View style={styles.infoBox}><Text>바람</Text></View>
        <View style={styles.infoBox}><Text>일몰 & 일출</Text></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    padding: 20,
    backgroundColor: 'white',
  },
  topSection: {
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
    // 아이콘 크기에 따라 조정
    width: 50,
    height: 50,
  },
  graphSection: {
    height: 200,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  tableSection: {
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


