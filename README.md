# Boston Brains Jukebox

Proof of concept (POC) that lets people listen to music based on their mood (brain sensor reading)

Made with ReactJS, Arduino, NodeJS

## Motivation

The Boston Brains Jukebox uses the concept of "media as a software" (Lev Manovich, 2012) to expand the sensorial scope of music. It aims to provide a complete and new experience to music listeners. They will not only listen to music but also feel and touch music.

A headband sensor is used to capture the user's mood, and touch sensors attached to objects give users the opportunity to choose music based on their touch. Local songs from Bostonians musicians are used in the project.

According to users mood, the interface changes its colors and, based on their touch, a song is suggested.

![Alt text](https://preview.ibb.co/g7GpqR/screenshot122017.png " ")
## Getting Started

**Important:** You need a brain sensor headband [Neurosky](http://neurosky.com/) and an Arduino connect to an [Adafruit 12 X Capactive Touch Shield MPR121](https://www.adafruit.com/product/2024)

First

`npm install` or  `yarn install`

Second

 `node server`

 and then

`yarn start` or `npm start`

Open the browser `localhost:9090`

**Important** - The brain sensor can take almost 30s to start to send data.

## Author

Tiago Costa

## License

This project is licensed under the MIT License
