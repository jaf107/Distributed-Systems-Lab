FROM node:latest
WORKDIR /statusService
COPY package*.json /statusService/
RUN npm install
COPY . /statusService/
CMD ["npm", "start"]