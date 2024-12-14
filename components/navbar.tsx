/* eslint-disable import/order */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
"use client"

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import { ThemeSwitch } from "./theme-switch";


export const QuickWeatherLogo = () => {
  return (
   <Image 
     alt="QuickWeather logo"
     className="cursor-pointer"
     height={50}
     src="/quick-weather.png"
     width={50}
   />
  );
};

export default function App() {
  return (
    <Navbar>
      <NavbarContent>
        <NavbarBrand>
          <QuickWeatherLogo />
          <p className="font-bold text-inherit">QUICK WEATHER</p>
        </NavbarBrand>
      </NavbarContent>

     
      <NavbarContent justify="end">
        <NavbarItem>
          <Button size="sm"  className="ml-2">
            <ThemeSwitch />
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
