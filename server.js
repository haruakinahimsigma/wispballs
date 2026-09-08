import { server as wisp } from "@mercuryworkshop/wisp-js/server";
import express from "express";
import { createServer } from "http";

const app = express();
const port = Number(process.env.PORT) || 8080;

// Basic health check endpoint for Render/Railway/Fly.io
app.get("/", (req, res) => {
  res.status(200).send("Wisp server is running.");
});

const server = createServer(app);

// Intercept WebSocket upgrade requests and route them to Wisp
server.on("upgrade", (request, socket, head) => {
  wisp.routeRequest(request, socket, head);
});

server.listen(port, () => {
  console.log(`Wisp server listening on port ${port}`);
});
