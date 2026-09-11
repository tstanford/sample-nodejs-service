FROM node:18-alpine

WORKDIR /usr/src/app

RUN npm install express

COPY . .

EXPOSE 3000

ENTRYPOINT ["node"]
CMD ["app.js"]
