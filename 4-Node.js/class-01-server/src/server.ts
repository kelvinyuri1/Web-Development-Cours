import express from "express";

const app = express();

app.listen(3000, () => {
  console.log("server is running on port 3000...");
});

app.get("/", (_request, response) => {
  response.json({ class: "Server" });
});