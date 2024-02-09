FROM node:20-alpine

WORKDIR /seo/frontend/

COPY package*.json /seo/frontend/
RUN npm install

COPY . /seo/frontend/

CMD ["npm", "run", "dev"]