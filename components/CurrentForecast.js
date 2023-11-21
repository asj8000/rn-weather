import {Image, StyleSheet, Text, View} from "react-native";

const CurrentForecastComponent = ({ currentWeather, regionString }) => {
  if(!currentWeather) return (<View></View>);
  return (
    <View style={styles.wrap}>
      <View style={styles.topLeftSection}>
        <Text style={styles.CurrentTemp}>{currentWeather?.main?.temp}°</Text>
        <Text style={styles.CurrentWeatherDescription}>{currentWeather?.weather[0]?.description}</Text>
        <Text style={styles.CurrentRegion}>{regionString}</Text>
        <Text style={styles.CurrentTempDescription}>{currentWeather?.main?.temp_max}° / {currentWeather?.main?.temp_min}° 체감온도 {currentWeather?.main?.feels_like}°</Text>
      </View>
      <View style={styles.topRightSection}>
        <Image
          style={styles.weatherIconSection}
          source={{
            uri: `http://openweathermap.org/img/wn/${currentWeather?.weather[0]?.icon}@4x.png`,
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topLeftSection: {
    flex: 6,
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
    flex: 5,
  },
  weatherIconSection: {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    height: 140,
  },
});


export default CurrentForecastComponent;