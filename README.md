# Color Palette Application

A modern and interactive color palette application built with React. This project showcases proficiency in the React ecosystem and component-based architecture, utilizing various third-party libraries to enhance user experience and functionality.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Architecture](#architecture)
- [Technologies](#technologies)

## Introduction

The Revitalize Color Palette application is designed to provide users with a robust tool for creating and manipulating color palettes. Built with React, it leverages modern design principles and interactive elements to deliver a seamless and engaging user experience.

## Features

- Dynamic and interactive color palette creation
- Advanced color manipulation using Chroma.js
- Smooth transitions with react-transition-group
- Interactive sliders with rc-slider
- Modern user interface design using Material-UI
- Efficient navigation with React Router
- Drag-and-drop functionality using React Sortable HOC

## Demo

![Home Page](/public/ss/homePage.png)
![Palette Page](/public/ss/paletteView.png)
![Create Palette](/public/ss/CreatePalette.png)
![New Palette](/public/ss/newPaletteWithRandom.png)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/revitalize-color-palette.git
   ```

2. Navigate to the project directory:
```bash
cd Colour-App
```

3. Install dependencies:

``` bash
npm install
```

4. Start the Development Server:
``` bash
npm start
```

## Usage
- Open your browser and navigate to http://localhost:3000.
- Create a new color palette or select an existing one.

## Architecture
The application is structured into multiple React components, each responsible for specific parts of the user interface and functionality. Key components include:

- Palette: Manages the color palette and displays colors.
- ColorBox: Represents individual colors within a palette.
- NewPaletteForm: Handles the creation of new palettes with various input controls.
- DraggableColorList: Provides drag-and-drop functionality for reordering colors.
- Navbar: Contains navigation links and actions.

## Technologies
- React: Core library for building the user interface.
- Material-UI: UI framework for implementing modern design elements and core components.
- Chroma.js: Library for advanced color manipulation.
- rc-slider: Component for creating interactive sliders.
- react-transition-group: Library for managing CSS transitions and animations.
- React Router: Library for handling navigation within the application.
- React Sortable HOC: Higher-order component for enabling drag-and-drop functionality.