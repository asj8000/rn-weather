import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const HourlyWeatherItem = ({ currentWeather }) => {
  if(!currentWeather) return (<View></View>);
  return (
    <View style={styles.item}>
      <View style={styles.box}><Text><p>풍속</p><p>{currentWeather?.wind?.deg}</p></Text></View>
      <View style={styles.box}><Text><p>풍속</p><p>{currentWeather?.wind?.gust}</p></Text></View>
      <View style={styles.box}><Text><p>풍속</p><p>{currentWeather?.wind?.speed}</p></Text></View>
      <View style={styles.box}><Text><p>풍속</p><p>{currentWeather?.wind?.deg}</p></Text></View>
      <View style={styles.box}>asdf</View>
      <View style={styles.box}>asdf</View>
      <View style={styles.box}>asdf</View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 5,
  },
});

export default HourlyWeatherItem;
