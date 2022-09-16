FROM node:16.17.0
WORKDIR /client
COPY package*.json /client/
RUN npm i @material-ui/core --legacy-peer-deps
COPY . /client/
CMD ["npm", "start"]