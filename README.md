# WTWR (What to Wear?) React Weather App

A React-based weather application that provides clothing recommendations based on current weather conditions. The app fetches real-time weather data and displays appropriate clothing suggestions to help users dress for the weather.

## Overview

WTWR is a responsive web application that combines weather forecasting with practical clothing recommendations. Users can view current weather conditions with dynamic weather icons that change based on time of day and weather conditions. The app suggests clothing items categorized by temperature ranges (hot, warm, cold) and allows users to interact with clothing items through modal interfaces. Users can add new clothing items, view existing items, and delete items as needed.

## 🌟 Features

### Weather & Display

- **Real-time Weather Data**: Fetches current weather information using OpenWeatherMap API
- **Dynamic Weather Icons**: Displays different weather icons for day/night and various weather conditions
- **Temperature Unit Toggle**: Switch between Fahrenheit and Celsius with an interactive toggle switch
- **Location Display**: Shows current date and city location in the header
- **Responsive Design**: Works seamlessly across desktop and mobile devices

### Clothing Management

- **Clothing Recommendations**: Suggests appropriate clothing items based on temperature (hot, warm, cold)
- **Add New Items**: Users can add new clothing items with name, image URL, and weather category
- **Item Preview**: Click on clothing items to view detailed information in a modal
- **Delete Items**: Remove clothing items with confirmation modal for safety
- **Personal Wardrobe**: Manage your clothing collection in the Profile section

### User Interface

- **Interactive Modals**: Multiple modal types for adding items, previewing, and confirmations
- **Mobile Navigation**: Responsive mobile menu with hamburger icon
- **User Profile**: Dedicated profile page with sidebar showing user information
- **Single Page Application**: Client-side routing with React Router for seamless navigation
- **Form Validation**: Custom form handling with validation for adding new items

### Navigation & Routing

- **Home Page**: Main weather display with filtered clothing recommendations
- **Profile Page**: Personal clothing collection management
- **Mobile-Responsive Header**: Adaptive navigation for different screen sizes
- **Single Page Application**: Client-side routing with React Router for seamless navigation

## Technologies Used

### Frontend Framework & Libraries

- **React 18.3.1** - Component-based UI framework
- **React DOM 18.3.1** - DOM rendering for React
- **React Router DOM 6.30.1** - Client-side routing and navigation

### Build Tools & Development

- **Vite 5.4.10** - Fast build tool and development server
- **@vitejs/plugin-react 4.3.3** - Vite plugin for React support

### Code Quality & Linting

- **ESLint 9.13.0** - JavaScript/JSX linting
- **@eslint/js 9.13.0** - ESLint JavaScript configurations
- **eslint-plugin-react 7.37.2** - React-specific linting rules
- **eslint-plugin-react-hooks 5.0.0** - React Hooks linting rules
- **eslint-plugin-react-refresh 0.4.14** - React Fast Refresh linting
- **globals 15.11.0** - Global variables for ESLint

### External APIs

- **OpenWeatherMap API** - Real-time weather data
- **JSON Server** - Local API for clothing items management

### Languages & Standards

- **JavaScript (ES6+)** - Modern JavaScript with modules
- **CSS3** - Styling and responsive design with custom properties
- **HTML5** - Semantic markup

### Development Features

- **Hot Module Replacement (HMR)** - Fast development with instant updates
- **ES Modules** - Modern module system
- **TypeScript Support** - Type definitions for React components
- **Custom Hooks** - Reusable form logic with useForm hook
- **Context API** - Global state management for temperature units

### Deployment

- **gh-pages 6.3.0** - GitHub Pages deployment

## 🌍 Live Demo

[View the application](https://cdmstr-kev.github.io/se_project_react/)

## 📱 Features in Detail

### Temperature Toggle

Users can switch between Fahrenheit and Celsius using the interactive toggle switch in the header. The temperature display updates throughout the application.

### Clothing Management

- **Add Items**: Fill out a form with item name, image URL, and weather category (Hot/Warm/Cold)
- **View Items**: Click any clothing item to see it in a detailed preview modal
- **Delete Items**: Remove items with a confirmation dialog to prevent accidental deletions
- **Filter by Weather**: Items are automatically filtered based on current weather conditions

### Responsive Design

The application adapts to different screen sizes with:

- Mobile-friendly navigation menu
- Responsive grid layouts for clothing items
- Optimized modal displays for mobile devices
- Adaptive header for different screen sizes

### Screenshots

![alt text](<src/assets/images/Screenshot 2025-08-16 at 15.16.59.png>)
![alt text](<src/assets/images/Screenshot 2025-08-16 at 15.17.11.png>)
![alt text](<src/assets/images/Screenshot 2025-08-16 at 15.21.55.png>)

## Link to Backend API
https://github.com/cdmstr-kev/se_project_express
