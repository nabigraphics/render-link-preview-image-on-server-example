require("dotenv").config();

import path from "path";
import Express from "express";
import api from "./api/index";

const app = Express();

// API 라우팅 추가
app.use("/api", api);
app.use("/", Express.static(path.resolve(__dirname, "../public")));

app.listen(process.env.PORT, () => {
  console.log(`Server Running on ${process.env.PORT}`);
});
