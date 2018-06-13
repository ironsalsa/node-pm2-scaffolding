FROM quay.io/realeyes/debian-node-bento-ffmpeg:latest
#FROM quay.io/realeyes/debian-node-bento-ffmpeg

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install

CMD [ "/usr/local/bin/pm2-runtime","--no-autorestart","/usr/src/app/app.js" ]
