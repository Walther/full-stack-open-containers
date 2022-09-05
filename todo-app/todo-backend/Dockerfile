FROM node:16

WORKDIR /usr/src/app

COPY --chown=node:node . .
RUN npm ci 

ENV DEBUG=playground:*

USER node
CMD npm start

# can be run with e.g.
# docker build -t express-server . && docker run -p 3000:3000 express-server
