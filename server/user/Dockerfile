FROM node:latest
WORKDIR /userService
COPY package*.json /userService
RUN npm install
COPY . /userService/
CMD ["npm", "start"]