import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

const weatherData = [
  { date: '11월 18일', high: 20, low: 10 },
  { date: '11월 19일', high: 22, low: 12 },
  { date: '11월 20일', high: 21, low: 11 },
  { date: '11월 21일', high: 19, low: 9 },
  { date: '11월 22일', high: 18, low: 8 },
  { date: '11월 23일', high: 17, low: 7 },
  { date: '11월 24일', high: 16, low: 6 },
];

const myLocation = getCurrentPositionAsync( )

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.temperatureSection}>
          <Text style={styles.temperatureText}>23°C</Text>
          <Text>서울</Text>
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
