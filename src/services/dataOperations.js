import React from "react";
export function sortObjectKeys(inputObj) {
    const keyOrder = [
      "°F",
      "°F Feels like",
      "Visibility",
      "Min temperature today",
      "Max temperature today",
      "Precipitation",
      "Precipitation description",
      "Wind's speed",
      "Wind degree",
      "Air pressure",
      "Humidity",
      "Longitude",
      "Latitude",
      "TimeZone",
      "Sunrise time",
      "SunsetTime"
    ];
  
    const sortedObj = {};
    const otherKeys = [];
  
    for (const key in inputObj) {
      if (inputObj.hasOwnProperty(key)) {
        if (keyOrder.includes(key)) {
          sortedObj[key] = inputObj[key];
        } else {
          otherKeys.push(key);
        }
      }
    }
  
    otherKeys.forEach((key) => {
      sortedObj[key] = inputObj[key];
    });
  
    return sortedObj;
  }
export function transformObjectKeys(inputObj) {
    const keyMappings = {
      "visibility": "Visibility",
      "timezone": "TimeZone",
      "sunrise": "Sunrise time",
      "sunset": "SunsetTime",
      "speed": "Wind's speed",
      "deg": "Wind degree",
      "temp": "°F",
      "feels_like": "°F Feels like",
      "temp_min": "Min temperature today",
      "temp_max": "Max temperature today",
      "pressure": "Air pressure",
      "humidity": "Humidity",
      "main": "Precipitation",
      "description": "Precipitation description",
      "lon": "Longitude",
      "lat": "Latitude"
    };
  
    const transformedObj = {};
    for (const key in inputObj) {
      if (inputObj.hasOwnProperty(key)) {
        const newKey = keyMappings[key] || key;
        transformedObj[newKey] = inputObj[key];
      }
    }
  
    return transformedObj;
  }