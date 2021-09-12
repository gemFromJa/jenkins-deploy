FROM node:alpine

# create app directory
WORKDIR /usr/src/app

# copy the package.json to server
COPY package*.json ./

# get the deps
RUN npm install

# move over all code to container
COPY . .

# expose port apps running on
EXPOSE 3050

# run the app
#RUN npm start
CMD ["npm", "start" ]
