FROM node:12.10.0-alpine
RUN mkdir /solvro_presentation
WORKDIR /solvro_presentation
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . /solvro_presentation
CMD ["yarn", "start"]