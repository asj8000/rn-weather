import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const HourlyWeatherItem = ({ currentWeather }) => {
  if(!currentWeather) return (<View></View>);
  return (
    <View style={styles.wrap}>
      <View style={styles.li}>
        <View style={styles.box}><Text style={styles.boxText}>강수확률</Text><Text>{currentWeather?.pop}</Text></View>
        <View style={{ marginRight: 10 }}/>
        <View style={styles.box}><Text style={styles.boxText}>습도</Text><Text>{currentWeather?.main?.humidity}</Text></View>
      </View>
      <View style={styles.li}>
        <View style={styles.box}><Text style={styles.boxText}>풍속</Text><Text>{currentWeather?.wind?.speed}</Text></View>
        <View style={{ marginRight: 10 }}/>
        <View style={styles.box}><Text style={styles.boxText}>날씨</Text><Text>{currentWeather?.main?.main}%</Text></View>
      </View>
      <View style={styles.li}>
        <View style={styles.box}><Text style={styles.boxText}>돌풍</Text><Text>{currentWeather?.wind?.gust}</Text></View>
        <View style={{ marginRight: 10 }}/>
        <View style={styles.box}><Text style={styles.boxText}>기압</Text><Text>{currentWeather?.main?.grnd_level}</Text></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  li: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  box: {
    width: 170,
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#05055011',
    borderColor: '#05055033',
    borderWidth: 1,
    borderRadius: 15,
  },
  boxText: {
    fontSize: 20,
  }

});

export default HourlyWeatherItem;
