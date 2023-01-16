FROM node:14

WORKDIR /admin

COPY package.json ./admin

RUN npm install

COPY . .

CMD ["npm", "start"]
