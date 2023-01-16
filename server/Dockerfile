FROM node:16

WORKDIR /server

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . /server/

EXPOSE 8081

CMD ["npm","start"]    