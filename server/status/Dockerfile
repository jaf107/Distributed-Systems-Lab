FROM node:latest
WORKDIR /statusService
COPY package*.json /statusService
RUN npm install
COPY . /statusService/
EXPOSE 4001
CMD ["npm", "start"]