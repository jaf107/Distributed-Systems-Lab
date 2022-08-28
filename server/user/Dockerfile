FROM node:latest
WORKDIR /userService
COPY package*.json /userService
RUN npm install
COPY . /userService/
EXPOSE 4000
CMD ["npm", "start"]