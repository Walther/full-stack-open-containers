FROM node:16 as base

WORKDIR /usr/src/app
COPY package.json package.json
COPY package-lock.json package-lock.json
ENV REACT_APP_BACKEND_URL="http://localhost:3000"

FROM base as test
RUN npm ci
COPY . .
RUN npm run build
RUN CI=true npm run test

FROM base as prod
RUN npm ci --production
COPY --from=test /usr/src/app/ /usr/src/app/
RUN npm run build

FROM nginx:1.20-alpine as serve
COPY --from=prod /usr/src/app/build /usr/share/nginx/html
EXPOSE 80/tcp
