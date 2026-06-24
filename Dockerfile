FROM node:24.16.0-alpine


WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

COPY . .
CMD [ "npm", "run" , "dev" ]