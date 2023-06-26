# 3d Model visualization

A 3d Model visualization project where the user can interact with the model view

## Setup

### Install dependencies

Once you've cloned the repository install the required dependencies:

```sh
yarn 
```

## Run

### Development server

To run the project in development mode run:

```sh
yarn start
```


## To Visit App:

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Project structure

The directory structure is the following:

```sh

├── public
├── src
│   ├── components
│   │   └──── box
|   |   └──── content
|   |   └──── layout
|   |   └──── navigation
|   |   └──── particles
|   |   |   └──── Particles.tsx
|   |   |   └──── particle
|   |   |   |   └──── Particle.tsx
│   ├── App.tsx

```

## General Information

Implement a SPA style web application using Angular or React showing two views:

- Left side for Navigation view (menu)
- Right side for Content view

### 3D plot

Implement a dynamic 3D plot in the Content view.

- See example: https://vimeo.com/829320936
- Optionally - implement orbital view controls as shown on video.
- 3D plot has to be dynamic though - moving. So orbital controls can be simulated with an alogorithm.
  - The number of shapes on the plot is required to be user definable via an UI element.

### Performance

Plot as many cube shapes as possible until resource exchaustion.

- Plot is required to handle at least 100K shapes.
- Good performance is if plot handles 1M+ shapes.
- Excellent performance if 10M+ shapes.


## Technologies Used

- JavaScript
- React
- Typescript
- Styled-Components
- Three.js 
- React-Three/Fiber
- React-Three/Drei
- Leva

## Try it out!

<a href="https://3d-modeling.vercel.app/" target="_blank">3d Model</a>

#### Thank you!

###
