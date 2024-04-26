const express = require("express")
const { WebSocketServer } = require("ws")
const app = express()

app.use(express.static("public"))

app.listen(8000, () => {
  console.log(`Example app listening on port 8001`)
})

const wss = new WebSocketServer({ port: 8001 })


wss.on("connection", (ws, request) => {})

//브로드캐스트
wss.on("connection", (ws, request) => {
  wss.clients.forEach(client => {
    client.send(`새로운 유저가 접속했습니다. 현재 유저 ${wss.clients.size} 명`)
  })

  console.log(`새로운 유저 접속: ${request.socket.remoteAddress}`)
})
wss.broadcast = (message) => {
  wss.clients.forEach((client) => {
    client.send(message);
  });
};

wss.on("connection", (ws, request) => {
  ws.on("message", (data) => {
    wss.broadcast(data.toString());
  });

  ws.on("close", () => {
    wss.broadcast(`유저 한명이 떠났습니다. 현재 유저 ${wss.clients.size} 명`);
  });

  wss.clients.forEach((client) => {
    wss.broadcast(
      `새로운 유저가 접속했습니다. 현재 유저 ${wss.clients.size} 명`
    );
  });
});

//클라이언트에서 수신
function receiveMessage(event) {
  const chat = document.createElement("div")
  const message = document.createTextNode(event.data)
  chat.appendChild(message)

  const chatLog = document.getElementById("chat-log")
  chatLog.appendChild(chat)
}

wss.onmessage = receiveMessage

//유저 연결 끊김 이벤트
wss.on("connection", (ws, request) => {
  ws.on("close", () => {
    wss.clients.forEach((client) => {
      client.send(`유저 한명이 떠났습니다. 현재 유저 ${wss.clients.size} 명`);
    });
  });
});

function clearMessage() {
  document.getElementById("message").value = ""
}

// 메세지 전송
function sendMessage() {
  const nickname = document.getElementById("nickname").value
  const message = document.getElementById("message").value
  const fullMessage = `${nickname}: ${message}`

  ws.send(fullMessage)
  clearMessage()
}