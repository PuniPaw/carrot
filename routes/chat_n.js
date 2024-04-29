// const express = require('express');
// const { WebSocketServer } = require('ws');

// const router = express.Router();

// const app = express();

// app.use(express.static('../public'));

// const wss = new WebSocketServer({ port: 8001 });

// // broadcast 메소드 추가
// router.wss.broadcast = (message) => {
//   wss.clients.forEach((client) => {
//     client.send(message);
//   });
// };

// router.wss.on('connection', (ws, request) => {
//   ws.on('message', (data) => {
//     wss.broadcast(data.toString());
//   });

//   ws.on('close', () => {
//     wss.broadcast(`유저 한명이 떠났습니다. 현재 유저 ${wss.clients.size} 명`);
//   });

//   wss.broadcast(
//     `새로운 유저가 접속했습니다. 현재 유저 ${wss.clients.size} 명`,
//   );
//   // 메세지 수신
//   ws.on('message', (data) => {
//     wss.clients.forEach((client) => {
//       client.send(data.toString());
//     });
//   });
// });

// module.exports = router;
