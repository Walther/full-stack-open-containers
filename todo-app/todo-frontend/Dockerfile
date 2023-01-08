FROM node:16

WORKDIR /usr/src/app
ENV REACT_APP_BACKEND_URL="http://localhost:3000"
EXPOSE 8000/tcp
COPY . .
RUN npm ci
RUN npm run build
RUN npm install -g serve
CMD ["serve", "build", "-p", "8000"]
