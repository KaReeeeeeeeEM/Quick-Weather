/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable padding-line-between-statements */
/* eslint-disable no-console */
"use client";
import React from "react";
import { PlaceholdersAndVanishInput } from "@/components/ui/Input";
import Image from "next/image";
import { FaSpinner } from "react-icons/fa";

type Response = {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  desription: string;
  humidity: number;
  weather: [{ main: string; description: string; icon: string }];
  wind: { speed: number };
  sys: { sunrise: number; sunset: number; country: string };
  coord: { lat: number; lon: number };
};

export function VanishInput() {
  const [city, setCity] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<Response | null>(null);

  const placeholders = [
    "Enter your city name",
    "e.g., New York, London, Tokyo",
    "or",
    "Enter your country name",
    "e.g., United States, United Kingdom, Japan",
    "or",
    "Enter your region name",
    "e.g., San Francisco, Sydney, Kisumu",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    setCity(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (!city.trim()) {
      setError("Please enter a city, country or region name");
      return;
    }
    setError("");
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch weather data");
        setLoading(false);
      });
  };
  return (
    <div className="w-full flex flex-col justify-center items-center px-4">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
      {/* display the data from the api */}
      {data && !loading && (
        <div className="w-full flex flex-col md:flex-row items-center justify-between mt-8">
          {/* image of the city */}
          <div className="w-full md:w-1/2">
            {/* send a flag image of the city using country initials eg.GB,TZ, UK */}
            <Image
              alt="city flag"
              className="rounded-lg bg-cover object-cover h-full my-4 md:mb-0 shadow-xl"
              height={400}
              src={`https://flagcdn.com/w320/${data.sys.country.toLowerCase()}.png`}
              width={400}
            />
          </div>

          {/* weather details */}
          <div className="w-full md:w-1/2 flex flex-col items-start md:items-end justify-start md:justify-end p-2 md:p-3">
            <p className="py-1 px-2 rounded-md hover:cursor-pointer hover:bg-primary-100 hover:w-full text-left md:text-right mb-1 flex items-center">
              <span className="italic">
                <Image
                  alt="weather icon"
                  className="h-50 w-50"
                  height={50}
                  src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                  width={50}
                />
              </span>
            </p>
            <p className="py-1 px-2 rounded-md hover:cursor-pointer hover:bg-primary-100 hover:w-full text-left md:text-right mb-1">
              <span className="font-bold">City:</span>{" "}
              <span className="italic">{city}</span>
            </p>
            <p className="py-1 px-2 rounded-md hover:cursor-pointer hover:bg-primary-100 hover:w-full text-left md:text-right mb-1">
              <span className="font-bold">Temperature:</span>{" "}
              <span className="italic">{parseFloat((data.main.temp - 273.15).toString()).toFixed(1)}°C</span>
            </p>
            <p className="py-1 px-2 rounded-md hover:cursor-pointer hover:bg-primary-100 hover:w-full text-left md:text-right mb-1">
              <span className="font-bold">Humidity:</span>{" "}
              <span className="italic">{data.main.humidity}%</span>
            </p>
            <p className="py-1 px-2 rounded-md hover:cursor-pointer hover:bg-primary-100 hover:w-full text-left md:text-right mb-1">
              <span className="font-bold">Description:</span>{" "}
              <span className="italic">{data.weather[0].description}</span>
            </p>
            <p className="py-1 px-2 rounded-md hover:cursor-pointer hover:bg-primary-100 hover:w-full text-left md:text-right mb-1">
              <span className="font-bold">Wind Speed:</span>{" "}
              <span className="italic">{data.wind.speed} m/s</span>
            </p>
            <p className="py-1 px-2 rounded-md hover:cursor-pointer hover:bg-primary-100 hover:w-full text-left md:text-right mb-1">
              <span className="font-bold">Sunrise:</span>{" "}
              <span className="italic">{new Date(data.sys.sunrise * 1000).toLocaleString()}</span>
            </p>
            <p className="py-1 px-2 rounded-md hover:cursor-pointer hover:bg-primary-100 hover:w-full text-left md:text-right mb-1">
              <span className="font-bold">Sunset:</span>{" "}
              <span className="italic">{new Date(data.sys.sunset * 1000).toLocaleString() }</span>
            </p>
            <p className="py-1 px-2 rounded-md hover:cursor-pointer hover:bg-primary-100 hover:w-full text-left md:text-right mb-1">
              <span className="font-bold">Weather:</span>{" "}
              <span className="italic">{data.weather[0].main}</span>
            </p>
          </div>
        </div>
      )}

      {loading && (
        <div className="flex items-center justify-center w-full h-[10vh]">
          <FaSpinner className="text-3xl animate-spin" />
        </div>
      )}
    </div>
  );
}
