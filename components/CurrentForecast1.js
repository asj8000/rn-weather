

//{
//     "city": {
//         "coord": {
//             "lat": 37.5041,
//             "lon": 126.9115
//         },
//         "country": "KR",
//         "id": 1948005,
//         "name": "Kwangmyŏng",
//         "population": 357545,
//         "sunrise": 1700518656,
//         "sunset": 1700554727,
//         "timezone": 32400
//     },
//     "cnt": 40,
//     "cod": "200",
//     "message": 0,
//     "list": [
//         {
//            "clouds":{
//               "all":0
//            },
//            "dt":1700514000,
//            "dt_txt":"2023-11-20 21:00:00",
//            "main":{
//               "feels_like":3.07,
//               "grnd_level":1020,
//               "humidity":39,
//               "pressure":1024,
//               "sea_level":1024,
//               "temp":3.07,
//               "temp_kf":-2.46,
//               "temp_max":5.53,
//               "temp_min":3.07
//            },
//            "pop":0,
//            "sys":{
//               "pod":"n"
//            },
//            "visibility":10000,
//            "weather":[
//               {
//                  "description":"맑음",
//                  "icon":"01n",
//                  "id":800,
//                  "main":"Clear"
//               }
//            ],
//            "wind":{
//               "deg":92,
//               "gust":0.91,
//               "speed":0.94
//            }
//         },
//         ....
//
//     ]
import styled from "styled-components/native";
import {useEffect, useState} from "react";
import {View} from "react-native";

function WeatherIcon(props) {
  return null;
}

function TempView(props) {
  return null;
}

function WeatherDescription(props) {
  return null;
}

const CurrentForecast = ({ currentWeather }) => {
  console.log(currentWeather);

  const [currentWeatherData, setCurrentWeatherData] = useState(null);

  useEffect(() => {
    if (!currentWeather) return;
    setCurrentWeatherData(currentWeather.current);
  }, [currentWeather]);

  if (!currentWeatherData) return null;

  console.log(currentWeatherData);
  console.log(currentWeatherData?.weather?.icon);
  return (
    <Container>
      <Timezone>{currentWeather.timezone}</Timezone>
      <View>
        <Text>CurrentForecast</Text>
      </View>
      <View>
        <Text>CurrentForecast</Text>
      </View>
      <View>
        <Text>CurrentForecast</Text>
      </View>
      <View>
        <Text>CurrentForecast</Text>
      </View>
      <View>
        <Text>CurrentForecast</Text>
      </View>
      <View>
        <Text>CurrentForecast</Text>
      </View>
      <View>
        <Text>CurrentForecast</Text>
      </View>
      <View>
        <Text>CurrentForecast</Text>
      </View>
      <View>
        <Text>CurrentForecast</Text>
      </View>
      <View>
        <Text>CurrentForecast</Text>
      </View>
      <View>
        <Text>CurrentForecast</Text>
      </View>
      <View>
        <Text>CurrentForecast</Text>
      </View>
      <View>
        <Text>CurrentForecast</Text>
      </View>
      <MainInfoContainer>
        <CurrentTempView>
          {currentWeather.current && (
            <WeatherIcon
              source={{
                uri: `http://openweathermap.org/img/wn/${currentWeather.current.weather[0].icon}@2x.png`,
              }}
              resizeMode={"contain"}
            />
          )}
          <CurrentDegrees>
            {Math.round(currentWeather.current && currentWeather.current.temp)}
            °C
          </CurrentDegrees>
        </CurrentTempView>
        <Description>
          {currentWeather.current &&
            currentWeather.current.weather[0].description}
        </Description>
      </MainInfoContainer>
      <WeatherIcon
        source={{
          uri: `http://openweathermap.org/img/wn/${currentWeatherData?.weather.icon}.png`,
        }}
        resizeMode={"contain"} // cover or contain its upto you view look
      />
      <TempView>
        <View><Text>{Math.round(currentWeatherData?.main?.temp)}°C</Text></View>
        <View><Text>Feels {Math.round(currentWeatherData?.main?.feels_like)}°C</Text></View>
      </TempView>
      <WeatherDescription>
        {currentWeatherData?.weather?.description}
      </WeatherDescription>
    </Container>
  );
}

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
`;

const CurrentTempView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Timezone = styled.Text`
  color: white;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  font-size: 15px;
`;

const MainInfoContainer = styled.View`
  display: flex;
  align-items: center;
`;
const Description = styled.Text`
  color: white;
  font-size: 15px;
  text-transform: capitalize;
`;
export default CurrentForecast;