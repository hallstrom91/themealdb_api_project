import React from "react";

const URL = "https://themealdb.com/api/json/v1/1/";

export const fetchData = async (endpoint, params = {}) => {
  try {
    const response = await fetch(`${URL}${endpoint}`, params);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
};
