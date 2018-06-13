# node-pm2-scaffolding
A scaffolding app to test single commands in Docker/Node/PM2

# How to use
From root folder of project:
npm run test

This will build the app into the Docker container and run it with PM2, testing any spawn commands you have in App.js - handy for testing wonky spawns in various environments.

For example, trade out the base image to an Alpine one and watch the mp4hls command fail.
