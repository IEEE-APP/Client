export default {
  port: 4000,
  //? local  dbUri: "mongodb://localhost:27017",
  //dbUri: "mongodb://localhost:27017",
  //? usando servicios en docker
   dbUri: "mongodb://mondodb:27017",
  saltWorkFactor: 10,
  accessTokenTtl: '15m',
  refreshTokenTtl: '1y',
  publicKey: 'uqwekjasdkjaskduyqwekjjknasdukhnmnmnjkuhqweuqwjnejnasuhdanjsduhqwej',
  privateKey: "qweqwekjhqwekhjqwekhquiwyehkjasdhbkjaiusydahkjsdkhjasdiuqwehbkj"
}