FROM node:16-alpine
RUN apk add --no-cache libc6-compat

COPY . /app
WORKDIR /app

RUN yarn install --frozen-lockfile
RUN yarn build

ENV NODE_ENV=production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

USER nextjs
ENTRYPOINT yarn start
