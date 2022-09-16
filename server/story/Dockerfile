FROM node:latest
WORKDIR /storyService
COPY package*.json /storyService/
RUN npm install
COPY . /storyService/
EXPOSE 4002
CMD ["npm", "start"]