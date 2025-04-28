const socket = new WebSocket("ws://localhost:4000");

socket.addEventListener("open", (event) => {
  console.log("opened:", event);
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
