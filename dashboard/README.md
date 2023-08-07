# Dashboard

## Run Cypress without GUI

- terminal inside project folder: ./node_modules/cypress/bin/cypress run
- this command generate videos in : tests/e2e/videos

## Build Docker image

- docker build -t feedbacker-dashboard .

## Run Docker container

- docker run --name feeddash -p 80:80 feedbacker-dashboard
