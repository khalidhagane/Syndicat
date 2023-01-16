FROM node:16

WORKDIR /admin

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]
