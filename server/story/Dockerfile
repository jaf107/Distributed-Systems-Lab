FROM node:latest
WORKDIR /storyService
COPY package*.json /storyService/
RUN npm install
COPY . /storyService/
CMD ["npm", "start"]