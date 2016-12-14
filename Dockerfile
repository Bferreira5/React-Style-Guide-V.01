FROM 556334022518.dkr.ecr.us-east-1.amazonaws.com/docker-alpine-base:6.7

RUN apt-get update -y \
    && rm -fr /var/lib/apt/lists/* \
    && npm install -g yarn

WORKDIR /app

COPY package.json .
RUN yarn install

COPY . .
RUN yarn prod

CMD echo "don't run me, I just build artifacts"
