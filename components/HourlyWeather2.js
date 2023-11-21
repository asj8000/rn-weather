import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
// import HourlyWeatherItem from "./HourlyWeatherItem";

const HourlyWeather2 = ({ hourlyData }) => {
  if(!hourlyData) return null;
  return (
    <View style={styles.container}>
      {/*<FlatList*/}
      {/*  data={hourlyData}*/}
      {/*  // renderItem={({ item }) => <HourlyWeatherItem data={item} />}*/}
      {/*  keyExtractor={(item) => item.dt.toString()}*/}
      {/*  horizontal*/}
      {/*  showsHorizontalScrollIndicator={false}*/}
      {/*/>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
  },
});

export default HourlyWeather2;
