FROM node
WORKDIR /mnt/c/Users/koles/Documents/Github/docker-practice-1

COPY package*.json ./ 
COPY index.js ./

RUN npm install

EXPOSE 3000

CMD [ "node", "index.js" ]