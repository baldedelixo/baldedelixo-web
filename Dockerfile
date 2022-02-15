FROM node:16-alpine
RUN apk add --no-cache libc6-compat

COPY . /app
WORKDIR /app

RUN yarn install --frozen-lockfile
RUN yarn build

ENV NODE_ENV=production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
ENTRYPOINT node server.js
