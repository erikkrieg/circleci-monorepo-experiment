FROM node:11-alpine
WORKDIR /app
COPY package.json yarn.lock ./
COPY packages/app-y/package.json packages/app-y/package.json
COPY packages/shared-utils packages/shared-utils
RUN yarn install --production --frozen-lockfile
COPY . .
EXPOSE 3000
CMD yarn workspace app-y start
