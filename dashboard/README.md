# Feedbacker Dashboard

## Technologies

- Javascript
- Vue.js 3
- Tailwind CSS
- Jest
- Cypress

## Run Cypress without GUI

- terminal inside project folder: ./node_modules/cypress/bin/cypress run
- this command generate videos in : tests/e2e/videos

## Run with Docker

- build image: docker build -t feedbacker-dashboard .
- run container: docker run --name feeddash -p 80:80 feedbacker-dashboard

## Run with Node

- npm install
- npm run serve
