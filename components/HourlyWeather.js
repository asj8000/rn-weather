import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import convertUtcToKst from '../utils/convertUtcToKst';

// [{"clouds": {"all": 1}, "dt": 1700600400, "dt_txt": "2023-11-21 21:00:00", "main": {"feels_like": 2.4, "grnd_level": 1016, "humidity": 82, "pressure": 1020, "sea_level": 1020, "temp": 2.4, "temp_kf": -4.35, "temp_max": 6.75,
//  "temp_min": 2.4}, "pop": 0, "sys": {"pod": "n"}, "visibility": 10000, "weather": [[Object]], "wind": {"deg": 103, "gust": 1.25, "speed": 1.25}}, {"clouds": {"all": 0}, "dt": 1700611200, "dt_txt": "2023-11-22 00:00:00", "main": {"
// feels_like": 5.21, "grnd_level": 1016, "humidity": 64, "pressure": 1020, "sea_level": 1020, "temp": 5.21, "temp_kf": -2.49, "temp_max": 7.7, "temp_min": 5.21}, "pop": 0, "sys": {"pod": "d"}, "visibility": 10000, "weather": [[Objec
// t]], "wind": {"deg": 101, "gust": 1.73, "speed": 1.11}}, {"clouds": {"all": 3}, "dt": 1700622000, "dt_txt": "2023-11-22 03:00:00", "main": {"feels_like": 10.02, "grnd_level": 1014, "humidity": 44, "pressure": 1018, "sea_level": 10
// 18, "temp": 11.65, "temp_kf": 0, "temp_max": 11.65, "temp_min": 11.65}, "pop": 0, "sys": {"pod": "d"}, "visibility": 10000, "weather": [[Object]], "wind": {"deg": 172, "gust": 3.88, "speed": 1.97}}, {"clouds": {"all": 36}, "dt": 1700632800, "dt_txt": "2023-11-22 06:00:00", "main": {"feels_like": 11.78, "grnd_level": 1012, "humidity": 54, "pressure": 1016, "sea_level": 1016, "temp": 13.01, "temp_kf": 0, "temp_max": 13.01, "temp_min": 13.01}, "pop": 0, "sys"
// : {"pod": "d"}, "visibility": 10000, "weather": [[Object]], "wind": {"deg": 191, "gust": 4.29, "speed": 2.63}}, {"clouds": {"all": 90}, "dt": 1700643600, "dt_txt": "2023-11-22 09:00:00", "main": {"feels_like": 11.35, "grnd_level":
//  1011, "humidity": 65, "pressure": 1015, "sea_level": 1015, "temp": 12.36, "temp_kf": 0, "temp_max": 12.36, "temp_min": 12.36}, "pop": 0, "sys": {"pod": "n"}, "visibility": 10000, "weather": [[Object]], "wind": {"deg": 151, "gust"
// : 4.74, "speed": 2.55}}, {"clouds": {"all": 95}, "dt": 1700654400, "dt_txt": "2023-11-22 12:00:00", "main": {"feels_like": 10.84, "grnd_level": 1010, "humidity": 69, "pressure": 1014, "sea_level": 1014, "temp": 11.8, "temp_kf": 0,
//  "temp_max": 11.8, "temp_min": 11.8}, "pop": 0, "sys": {"pod": "n"}, "visibility": 10000, "weather": [[Object]], "wind": {"deg": 159, "gust": 5.32, "speed": 2.23}}, {"clouds": {"all": 100}, "dt": 1700665200, "dt_txt": "2023-11-22
// 15:00:00", "main": {"feels_like": 12.06, "grnd_level": 1009, "humidity": 85, "pressure": 1013, "sea_level": 1013, "temp": 12.53, "temp_kf": 0, "temp_max": 12.53, "temp_min": 12.53}, "pop": 0.35, "rain": {"3h": 0.13}, "sys": {"pod"
// : "n"}, "visibility": 10000, "weather": [[Object]], "wind": {"deg": 190, "gust": 11.32, "speed": 3.71}}, {"clouds": {"all": 100}, "dt": 1700676000, "dt_txt": "2023-11-22 18:00:00", "main": {"feels_like": 12.37, "grnd_level": 1008,
//  "humidity": 93, "pressure": 1012, "sea_level": 1012, "temp": 12.62, "temp_kf": 0, "temp_max": 12.62, "temp_min": 12.62}, "pop": 0.39, "rain": {"3h": 0.64}, "sys": {"pod": "n"}, "visibility": 10000, "weather": [[Object]], "wind":
// {"deg": 240, "gust": 9.47, "speed": 3.67}}, {"clouds": {"all": 100}, "dt": 1700686800, "dt_txt": "2023-11-22 21:00:00", "main": {"feels_like": 10.52, "grnd_level": 1009, "humidity": 84, "pressure": 1013, "sea_level": 1013, "temp":
//  11.16, "temp_kf": 0, "temp_max": 11.16, "temp_min": 11.16}, "pop": 0.38, "rain": {"3h": 0.32}, "sys": {"pod": "n"}, "visibility": 10000, "weather": [[Object]], "wind": {"deg": 268, "gust": 5.51, "speed": 2.51}}, {"clouds": {"all"
// : 66}, "dt": 1700697600, "dt_txt": "2023-11-23 00:00:00", "main": {"feels_like": 10.5, "grnd_level": 1009, "humidity": 77, "pressure": 1013, "sea_level": 1013, "temp": 11.3, "temp_kf": 0, "temp_max": 11.3, "temp_min": 11.3}, "pop"
// : 0.04, "sys": {"pod": "d"}, "visibility": 10000, "weather": [[Object]], "wind": {"deg": 248, "gust": 4.69, "speed": 1.98}}, {"clouds": {"all": 35}, "dt": 1700708400, "dt_txt": "2023-11-23 03:00:00", "main": {"feels_like": 12.46,
// "grnd_level": 1008, "humidity": 42, "pressure": 1012, "sea_level": 1012, "temp": 13.92, "temp_kf": 0, "temp_max": 13.92, "temp_min": 13.92}, "pop": 0, "sys": {"pod": "d"}, "visibility": 10000, "weather": [[Object]], "wind": {"deg"
// : 259, "gust": 8.04, "speed": 5.01}}, {"clouds": {"all": 18}, "dt": 1700719200, "dt_txt": "2023-11-23 06:00:00", "main": {"feels_like": 12.46, "grnd_level": 1007, "humidity": 54, "pressure": 1011, "sea_level": 1011, "temp": 13.63,
//  "temp_kf": 0, "temp_max": 13.63, "temp_min": 13.63}, "pop": 0, "sys": {"pod": "d"}, "visibility": 10000, "weather": [[Object]], "wind": {"deg": 253, "gust": 13.28, "speed": 7.15}}, {"clouds": {"all": 38}, "dt": 1700730000, "dt_tx
// t": "2023-11-23 09:00:00", "main": {"feels_like": 4.51, "grnd_level": 1010, "humidity": 56, "pressure": 1014, "sea_level": 1014, "temp": 8.18, "temp_kf": 0, "temp_max": 8.18, "temp_min": 8.18}, "pop": 0.54, "rain": {"3h": 0.47}, "
// sys": {"pod": "n"}, "visibility": 10000, "weather": [[Object]], "wind": {"deg": 309, "gust": 12.76, "speed": 7.28}}, {"clouds": {"all": 29}, "dt": 1700740800, "dt_txt": "2023-11-23 12:00:00", "main": {"feels_like": -0.69, "grnd_le
// vel": 1015, "humidity": 52, "pressure": 1019, "sea_level": 1019, "temp": 4.29, "temp_kf": 0, "temp_max": 4.29, "temp_min": 4.29}, "pop": 0.09, "sys": {"pod": "n"}, "visibility": 10000, "weather": [[Object]], "wind": {"deg": 302, "
// gust": 14.47, "speed": 7.83}}, {"clouds": {"all": 56}, "dt": 1700751600, "dt_txt": "2023-11-23 15:00:00", "main": {"feels_like": -4.08, "grnd_level": 1017, "humidity": 54, "pressure": 1021, "sea_level": 1021, "temp": 1.67, "temp_k
// f": 0, "temp_max": 1.67, "temp_min": 1.67}, "pop": 0, "sys": {"pod": "n"}, "visibility": 10000, "weather": [[Object]], "wind": {"deg": 311, "gust": 13.13, "speed": 7.81}}, {"clouds": {"all": 64}, "dt": 1700762400, "dt_txt": "2023-
// 11-23 18:00:00", "main": {"feels_like": -5.66, "grnd_level": 1019, "humidity": 51, "pressure": 1023, "sea_level": 1023, "temp": 0.24, "temp_kf": 0, "temp_max": 0.24, "temp_min": 0.24}, "pop": 0, "sys": {"pod": "n"}, "visibility":
// 10000, "weather": [[Object]], "wind": {"deg": 309, "gust": 13.18, "speed": 7.13}}, {"clouds": {"all": 55}, "dt": 1700773200, "dt_txt": "2023-11-23 21:00:00", "main": {"feels_like": -6.74, "grnd_level": 1021, "humidity": 51, "press
// ure": 1025, "sea_level": 1025, "temp": -0.77, "temp_kf": 0, "temp_max": -0.77, "temp_min": -0.77}, "pop": 0, "sys": {"pod": "n"}, "visibility": 10000, "weather": [[Object]], "wind": {"deg": 315, "gust": 12.35, "speed": 6.64}}, {"c
// louds": {"all": 50}, "dt": 1700784000, "dt_txt": "2023-11-24 00:00:00", "main": {"feels_like": -7.49, "grnd_level": 1024, "humidity": 45, "pressure": 1028, "sea_level": 1028, "temp": -1.28, "temp_kf": 0, "temp_max": -1.28, "temp_m
// in": -1.28}, "pop": 0, "sys": {"pod": "d"}, "visibility": 10000, "weather": [[Object]], "wind": {"deg": 310, "gust": 11.64, "speed": 6.85}}, {"clouds": {"all": 14}, "dt": 1700794800, "dt_txt": "2023-11-24 03:00:00", "main": {"feel
// s_like": -5.32, "grnd_level": 1025, "humidity": 34, "pressure": 1029, "sea_level": 1029, "temp": 0.38, "temp_kf": 0, "temp_max": 0.38, "temp_min": 0.38}, "pop": 0, "sys": {"pod": "d"}, "visibility": 10000, "weather": [[Object]], "
// wind": {"deg": 308, "gust": 10.21, "speed": 6.75}}, {"clouds": {"all": 13}, "dt": 1700805600, "dt_txt": "2023-11-24 06:00:00", "main": {"feels_like": -4.52, "grnd_level": 1024, "humidity": 31, "pressure": 1029, "sea_level": 1029,
// "temp": 1.06, "temp_kf": 0, "temp_max": 1.06, "temp_min": 1.06}, "pop": 0, "sys": {"pod": "d"}, "visibility": 10000, "weather": [[Object]], "wind": {"deg": 309, "gust": 10.28, "speed": 6.93}}, {"clouds": {"all": 8}, "dt": 17008164
// 00, "dt_txt": "2023-11-24 09:00:00", "main": {"feels_like": -6.42, "grnd_level": 1027, "humidity": 37, "pressure": 1031, "sea_level": 1031, "temp": -0.67, "temp_kf": 0, "temp_max": -0.67, "temp_min": -0.67}, "pop": 0, "sys": {"pod
// ": "n"}, "visibility": 10000, "weather": [[Object]], "wind": {"deg": 319, "gust": 10.39, "speed": 6.23}}, {"clouds": {"all": 5}, "dt": 1700827200, "dt_txt": "2023-11-24 12:00:00", "main": {"feels_like": -7.74, "grnd_level": 1029,
// "humidity": 40, "pressure": 1033, "sea_level": 1033, "temp": -1.93, "temp_kf": 0, "temp_max": -1.93, "temp_min": -1.93}, "pop": 0, "sys": {"pod": "n"}, "visibility": 10000, "weather": [[Object]], "wind": {"deg": 319, "gust": 9.95,
//  "speed": 5.7}}, {"clouds": {"all": 0}, "dt": 1700838000, "dt_txt": "2023-11-24 15:00:00", "main": {"feels_like": -7.85, "grnd_level": 1029, "humidity": 31, "pressure": 1033, "sea_level": 1033, "temp": -2.23, "temp_kf": 0, "temp_m
// ax": -2.23, "temp_min": -2.23}, "pop": 0, "sys": {"pod": "n"}, "visibility": 10000, "weather": [[Object]], "wind": {"deg": 318, "gust": 8.53, "speed": 5.24}}, {"clouds": {"all": 0}, "dt": 1700848800, "dt_txt": "2023-11-24 18:00:00
// ", "main": {"feels_like": -7.53, "grnd_level": 1030, "humidity": 28, "pressure": 1034, "sea_level": 1034, "temp": -2.46, "temp_kf": 0, "temp_max": -2.46, "temp_min": -2.46}, "pop": 0, "sys": {"pod": "n"}, "visibility": 10000, "wea
// ther": [[Object]], "wind": {"deg": 325, "gust": 7.09, "speed": 4.31}}, {"clouds": {"all": 0}, "dt": 1700859600, "dt_txt": "2023-11-24 21:00:00", "main": {"feels_like": -7.04, "grnd_level": 1030, "humidity": 26, "pressure": 1034, "
// sea_level": 1034, "temp": -2.59, "temp_kf": 0, "temp_max": -2.59, "temp_min": -2.59}, "pop": 0, "sys": {"pod": "n"}, "visibility": 10000, "weather": [[Object]], "wind": {"deg": 320, "gust": 5.58, "speed": 3.47}}, {"clouds": {"all"
// : 0}, "dt": 1700870400, "dt_txt": "2023-11-25 00:00:00", "main": {"feels_like": -5.35, "grnd_level": 1031, "humidity": 23, "pressure": 1035, "sea_level": 1035, "temp": -2.04, "temp_kf": 0, "temp_max": -2.04, "temp_min": -2.04}, "p
// op": 0, "sys": {"pod": "d"}, "visibility": 10000, "weather": [[Object]], "wind": {"deg": 330, "gust": 3.96, "speed": 2.42}}, {"clouds": {"all": 0}, "dt": 1700881200, "dt_txt": "2023-11-25 03:00:00", "main": {"feels_like": -1.3, "g
// rnd_level": 1030, "humidity": 15, "pressure": 1034, "sea_level": 1034, "temp": 0.23, "temp_kf": 0, "temp_max": 0.23, "temp_min": 0.23}, "pop": 0, "sys": {"pod": "d"}, "visibility": 10000, "weather": [[Object]], "wind": {"deg": 335
// , "gust": 1.93, "speed": 1.38}}, {"clouds": {"all": 0}, "dt": 1700892000, "dt_txt": "2023-11-25 06:00:00", "main": {"feels_like": 0.38, "grnd_level": 1028, "humidity": 13, "pressure": 1032, "sea_level": 1032, "temp": 1.9, "temp_kf
// ": 0, "temp_max": 1.9, "temp_min": 1.9}, "pop": 0, "sys": {"pod": "d"}, "visibility": 10000, "weather": [[Object]], "wind": {"deg": 327, "gust": 1.73, "speed": 1.52}}, {"clouds": {"all": 0}, "dt": 1700902800, "dt_txt": "2023-11-25
//  09:00:00", "main": {"feels_like": 0.28, "grnd_level": 1027, "humidity": 14, "pressure": 1031, "sea_level": 1031, "temp": 1.59, "temp_kf": 0, "temp_max": 1.59, "temp_min": 1.59}, "pop": 0, "sys": {"pod": "n"}, "visibility": 10000,
//  "weather": [[Object]], "wind": {"deg": 341, "gust": 1.58, "speed": 1.36}}, {"clouds": {"all": 17}, "dt": 1700913600, "dt_txt": "2023-11-25 12:00:00", "main": {"feels_like": 1.35, "grnd_level": 1027, "humidity": 15, "pressure": 10
// 32, "sea_level": 1032, "temp": 1.35, "temp_kf": 0, "temp_max": 1.35, "temp_min": 1.35}, "pop": 0, "sys": {"pod": "n"}, "visibility": 10000, "weather": [[Object]], "wind": {"deg": 347, "gust": 1.31, "speed": 1.07}}, {"clouds": {"al
// l": 72}, "dt": 1700924400, "dt_txt": "2023-11-25 15:00:00", "main": {"feels_like": 1.44, "grnd_level": 1027, "humidity": 16, "pressure": 1031, "sea_level": 1031, "temp": 1.44, "temp_kf": 0, "temp_max": 1.44, "temp_min": 1.44}, "po
// p": 0, "sys": {"pod": "n"}, "visibility": 10000, "weather": [[Object]], "wind": {"deg": 353, "gust": 1.48, "speed": 1.16}}, {"clouds": {"all": 86}, "dt": 1700935200, "dt_txt": "2023-11-25 18:00:00", "main": {"feels_like": -0.51, "
// grnd_level": 1027, "humidity": 18, "pressure": 1031, "sea_level": 1031, "temp": 1.37, "temp_kf": 0, "temp_max": 1.37, "temp_min": 1.37}, "pop": 0, "sys": {"pod": "n"}, "visibility": 10000, "weather": [[Object]], "wind": {"deg": 34
// 1, "gust": 2.96, "speed": 1.72}}, {"clouds": {"all": 70}, "dt": 1700946000, "dt_txt": "2023-11-25 21:00:00", "main": {"feels_like": 1.1, "grnd_level": 1026, "humidity": 27, "pressure": 1030, "sea_level": 1030, "temp": 1.1, "temp_k
// f": 0, "temp_max": 1.1, "temp_min": 1.1}, "pop": 0, "sys": {"pod": "n"}, "visibility": 10000, "weather": [[Object]], "wind": {"deg": 339, "gust": 2.09, "speed": 0.79}}, {"clouds": {"all": 52}, "dt": 1700956800, "dt_txt": "2023-11-
// 26 00:00:00", "main": {"feels_like": 1.74, "grnd_level": 1026, "humidity": 38, "pressure": 1030, "sea_level": 1030, "temp": 1.74, "temp_kf": 0, "temp_max": 1.74, "temp_min": 1.74}, "pop": 0, "sys": {"pod": "d"}, "visibility": 1000
// 0, "weather": [[Object]], "wind": {"deg": 97, "gust": 1.01, "speed": 0.74}}, {"clouds": {"all": 14}, "dt": 1700967600, "dt_txt": "2023-11-26 03:00:00", "main": {"feels_like": 4.84, "grnd_level": 1024, "humidity": 37, "pressure": 1
// 028, "sea_level": 1028, "temp": 4.84, "temp_kf": 0, "temp_max": 4.84, "temp_min": 4.84}, "pop": 0, "sys": {"pod": "d"}, "visibility": 10000, "weather": [[Object]], "wind": {"deg": 338, "gust": 0.81, "speed": 0.55}}, {"clouds": {"a
// ll": 14}, "dt": 1700978400, "dt_txt": "2023-11-26 06:00:00", "main": {"feels_like": 6.46, "grnd_level": 1021, "humidity": 40, "pressure": 1025, "sea_level": 1025, "temp": 6.46, "temp_kf": 0, "temp_max": 6.46, "temp_min": 6.46}, "p
// op": 0, "sys": {"pod": "d"}, "visibility": 10000, "weather": [[Object]], "wind": {"deg": 313, "gust": 0.79, "speed": 0.51}}, {"clouds": {"all": 66}, "dt": 1700989200, "dt_txt": "2023-11-26 09:00:00", "main": {"feels_like": 6.21, "
// 1, "gust": 2.96, "speed": 1.72}}, {"clouds": {"all": 70}, "dt": 1700946000, "dt_txt": "2023-11-25 21:00:00", "main": {"feels_like": 1.1, "grnd_level": 1026, "humidity": 27, "pressure": 1030, "sea_level": 1030, "temp": 1.1, "temp_kf": 0, "temp_max": 1.1, "temp_min": 1.1}, "pop": 0, "sys": {"pod": "n"}, "visibility": 10000, "weather": [[Object]], "wind": {"deg": 339, "gust": 2.09, "speed": 0.79}}, {"clouds": {"all": 52}, "dt": 1700956800, "dt_txt": "2023-11-26 00:00:00", "main": {"feels_like": 1.74, "grnd_level": 1026, "humidity": 38, "pressure": 1030, "sea_level": 1030, "temp": 1.74, "temp_kf": 0, "temp_max": 1.74, "temp_min": 1.74}, "pop": 0, "sys": {"pod": "d"}, "visibility": 10000, "weather": [[Object]], "wind": {"deg": 97, "gust": 1.01, "speed": 0.74}}, {"clouds": {"all": 14}, "dt": 1700967600, "dt_txt": "2023-11-26 03:00:00", "main": {"feels_like": 4.84, "grnd_level": 1024, "humidity": 37, "pressure": 1028, "sea_level": 1028, "temp": 4.84, "temp_kf": 0, "temp_max": 4.84, "temp_min": 4.84}, "pop": 0, "sys": {"pod": "d"}, "visibility": 10000, "weather": [[Object]], "wind": {"deg": 338, "gust": 0.81, "speed": 0.55}}, {"clouds": {"all": 14}, "dt": 1700978400, "dt_txt": "2023-11-26 06:00:00", "main": {"feels_like": 6.46, "grnd_level": 1021, "humidity": 40, "pressure": 1025, "sea_level": 1025, "temp": 6.46, "temp_kf": 0, "temp_max": 6.46, "temp_min": 6.46}, "pop": 0, "sys": {"pod": "d"}, "visibility": 10000, "weather": [[Object]], "wind": {"deg": 313, "gust": 0.79, "speed": 0.51}}, {"clouds": {"all": 66}, "dt": 1700989200, "dt_txt": "2023-11-26 09:00:00", "main": {"feels_like": 6.21, "grnd_level": 1020, "humidity": 42, "pressure": 1024, "sea_level": 1024, "temp": 6.21, "temp_kf": 0, "temp_max": 6.21, "temp_min": 6.21}, "pop": 0, "sys": {"pod": "n"}, "visibility": 10000, "weather": [[Object]], "wind": {"deg": 175, "gust": 0.85, "speed": 0.39}}, {"clouds": {"all": 83}, "dt": 1701000000, "dt_txt": "2023-11-26 12:00:00", "main": {"feels_like": 6.04, "grnd_level": 1018, "humidity": 43, "pressure": 1022, "sea_level": 1022, "temp": 6.04, "temp_kf": 0, "temp_max": 6.04, "temp_min": 6.04}, "pop": 0, "sys": {"pod": "n"}, "visibility": 10000, "weather": [[Object]], "wind": {"deg": 63, "gust": 0.87, "speed": 0.61}}, {"clouds": {"all": 100}, "dt": 1701010800, "dt_txt": "2023-11-26 15:00:00", "main": {"feels_like": 5.71, "grnd_level": 1017, "humidity": 44, "pressure": 1021, "sea_level": 1021, "temp": 5.71, "temp_kf": 0, "temp_max": 5.71, "temp_min": 5.71}, "pop": 0, "sys": {"pod": "n"}, "visibility": 10000, "weather": [[Object]], "wind": {"deg": 113, "gust": 1.99, "speed": 1.22}}, {"clouds": {"all": 100}, "dt": 1701021600, "dt_txt": "2023-11-26 18:00:00", "main": {"feels_like": 4.62, "grnd_level": 1015, "humidity": 45, "pressure": 1019, "sea_level": 1019, "temp": 5.58, "temp_kf": 0, "temp_max": 5.58, "temp_min": 5.58}, "pop": 0, "sys": {"pod": "n"}, "visibility": 10000, "weather": [[Object]], "wind": {"deg": 106, "gust": 3.02, "speed": 1.49}}]
const HourlyWeather = ({ hourlyData }) => {
  // console.log("hourlyData");
  // console.log(hourlyData);

  if(!hourlyData) return (<View></View>);

  const getHour = (time) => {
    return convertUtcToKst(time);
    // return convertUtcToKst(time).split(" ")[1].split(":")[0];
  }

  return (
    <View style={styles.wrap}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        {hourlyData.length > 0 && hourlyData.map((hour, index) => (
          <View key={index} style={styles.hourContainer}>
            <Text style={styles.timeText}>{getHour(hour.dt_txt)}</Text>
            <Image source={{ uri: `http://openweathermap.org/img/wn/${hour?.weather[0]?.icon}@4x.png`, }} style={styles.weatherIcon} />
            <Text style={styles.temperatureText}>{hour?.main?.temp}°C</Text>
            <Text style={styles.humidityText}>{hour?.pop}%</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap:{
    backgroundColor: '#05055011',
    borderColor: '#05055033',
    borderWidth: 1,
    borderRadius: 15,
    paddingBottom: 10,
    paddingTop: 10,
    height: 175,
  },
  scrollView: {
    flexDirection: 'row',
  },
  hourContainer: {
    alignItems: 'center',
    marginHorizontal: 12,
  },
  timeText: {
    fontSize: 16,
  },
  weatherIcon: {
    width: 50,
    height: 50,
  },
  temperatureText: {
    fontSize: 16,
    marginBottom: 15,
  },
  humidityText: {
    fontSize: 16,
  },
});

export default HourlyWeather;
