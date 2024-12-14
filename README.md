<<<<<<< HEAD
# Quick Weather Documentation

Welcome to **Quick Weather**, a weather forecasting application built using Next.js and Next UI. This documentation provides a comprehensive guide to understanding, running, and contributing to the project.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Folder Structure](#folder-structure)
- [Environment Variables](#environment-variables)
- [API Integration](#api-integration)
- [Contribution](#contribution)

---

## Introduction
**Quick Weather** is a modern weather application that provides users with real-time weather data for cities across the world. Built with Next.js and styled using Next UI, this app delivers a sleek and responsive user experience.

## Features
- Fetches real-time weather data using the OpenWeather API.
- Displays city-specific information like temperature, humidity, wind speed, sunrise, and sunset times.
- Dynamic rendering using server-side and client-side Next.js capabilities.
- Responsive design powered by Next UI.

## Technologies Used
- **Next.js**: Framework for building server-rendered React applications.
- **Next UI**: Component library for responsive and sleek UI elements.
- **OpenWeather API**: Weather data provider.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React**: Library for building the user interface.

---

## Getting Started

### Prerequisites
Before running the project, ensure you have the following installed on your system:
- **Node.js** (v14 or later)
- **npm** or **yarn**

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/KaReeeeeeeeEM/Quick-Weather.git
   ```
2. Navigate to the project directory:
   ```bash
   cd quick-weather
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

### Running the Application
1. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm run dev
   ```
2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Folder Structure
The project follows a standard Next.js folder structure:
```
quick-weather/
├── public/         # Static files
├── app/
├── components/     # Reusable React components
│   ├── ui/         # Styled component files
│   ├── demo/       # Usable component functions
├── data            # Data required for the project
├── lib             # utilities required for the project
├── .env.local      # Environment variables
├── next.config.js  # Next.js configuration
├── package.json    # Project dependencies
```

---

## Environment Variables
To run the application, configure the following environment variables in a `.env.local` file:
```env
NEXT_PUBLIC_OPENWEATHERSTREET_API_KEY=<your_openweather_api_key>
NEXT_PUBLIC_WEATHER_API_URL=https://api.openweathermap.org/data/2.5/
```
Replace `<your_openweather_api_key>` with your OpenWeather API key.

---

## API Integration
The application integrates with the **OpenWeather API** to fetch weather data. The main API endpoints used are:
- **Current Weather Data**: `/weather`

Example API call:
```javascript
const fetchWeather = async (city) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WEATHER_API_URL}weather?q=${city}&appid=${process.env.NEXT_PUBLIC_OPENWEATHERSTREET_API_KEY}&units=metric`
  );
  const data = await response.json();
  return data;
};
```

---

## Contribution
We welcome contributions to improve **Quick Weather**. To contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your fork:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request on the main repository.

---

Thank you for using **Quick Weather**! If you have any questions or feedback, feel free to create an issue in the repository.

=======
# Next.js & NextUI Template

This is a template for creating applications using Next.js 14 (app directory) and NextUI (v2).

[Try it on CodeSandbox](https://githubbox.com/nextui-org/next-app-template)

## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [NextUI v2](https://nextui.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)

## How to Use

### Use the template with create-next-app

To create a new project based on this template using `create-next-app`, run the following command:

```bash
npx create-next-app -e https://github.com/nextui-org/next-app-template
```

### Install dependencies

You can use one of them `npm`, `yarn`, `pnpm`, `bun`, Example using `npm`:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Setup pnpm (optional)

If you are using `pnpm`, you need to add the following code to your `.npmrc` file:

```bash
public-hoist-pattern[]=*@nextui-org/*
```

After modifying the `.npmrc` file, you need to run `pnpm install` again to ensure that the dependencies are installed correctly.

## License

Licensed under the [MIT license](https://github.com/nextui-org/next-app-template/blob/main/LICENSE).
>>>>>>> fc955e7 (Pushing project initially)
