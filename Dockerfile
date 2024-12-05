FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx prisma generate
RUN npm run build
EXPOSE 3000
CMD ["/bin/bash", "-c", "npx prisma generate; npx prisma migrate deploy; npx prisma db seed; npm run start:prod"]