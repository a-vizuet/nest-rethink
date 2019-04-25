FROM node:8

WORKDIR /app

COPY . /app

RUN yarn install
RUN rm -rf app/dist/
RUN yarn build

EXPOSE 80

CMD ["yarn", "start:prod"]