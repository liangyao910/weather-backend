FROM node:12.18.1

WORKDIR /src

# Copy package file
COPY package.json .

# Copy .env file
COPY .env .

# install packages and install nodemon for global
RUN npm install && \
    npm install -g nodemon

# install Promise based HTTP client for the browser and node.js
#RUN npm install axios --save

COPY docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.sh"]