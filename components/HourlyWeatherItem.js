import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const HourlyWeatherItem = ({ data }) => {
  // UTC 시간을 현지 시간으로 변환
  const date = new Date(data.dt * 1000);
  const hours = date.getHours();
  const localTime = `${hours}:00`;

  return (
    <View style={styles.item}>
      <Text style={styles.time}>{localTime}</Text>
      <Image
        style={styles.icon}
        source={{ uri: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png` }}
      />
      <Text style={styles.temp}>{`${Math.round(data.main.temp)}°C`}</Text>
      <Text style={styles.humidity}>{`${data.main.humidity}%`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  time: {
    fontSize: 16,
  },
  icon: {
    width: 50,
    height: 50,
  },
  temp: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  humidity: {
    fontSize: 16,
  },
});

export default HourlyWeatherItem;
