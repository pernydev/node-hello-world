const socket = new WebSocket("ws://172.17.0.1:4000");

const identityMessage = {
  op: 2,
  d: {
    token: process.env.DISCORD_TOKEN,
    intents: 513, 
    properties: {
      os: "linux", 
      browser: "stable.dev",
      device: "stable.dev" 
    }
  }
};

socket.addEventListener("open", (event) => {
  console.log("opened:", event);
  socket.send(JSON.stringify(identityMessage));
});

socket.addEventListener("message", (event) => {
  console.log("recv:", event.data);
});

socket.addEventListener("close", (event) => {
  console.log("closed:", event);
});

socket.addEventListener("error", (event) => {
  console.error("error:", event);
});
