import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import cron from "node-cron"
import { getNumberDetails } from "./utils.js";
dotenv.config();
;
function keepAlive(url) {
  http
    .get(url, (res) => {
      console.log(`Status: ${res.statusCode}`);
    })
    .on("error", (error) => {
      console.error(`Error: ${error.message}`);
    });
};

const port = process.env.PORT;

cron.schedule("*/5 * * * *", () => {
  keepAlive(process.env.LIVE_URL || `http://localhost:${port}`);
  console.log("Pinging the server every 5 minutes");
});

const app = express();

app.options("*", cors());
app.use(
  cors({
    origin: "*",
    methods: ["GET"],
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Authorization",
    ],
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req, res) => {
  res.status(200).json({ message: "Welcome to hng12 stage 1 task base url" });
});

app.get("/api", (_req, res) => {
  res.status(200).json({ message: "Welcome to hng12 stage 1 task api responder" });
});

app.get("/api/classify-number", async (req, res) => {
  const numberDetails = await getNumberDetails(Number(req.query.number));
  const status = numberDetails.error ? 400 : 200;
  res.status(status).json(numberDetails);
});

app.listen(port, () => {
  console.log(`App started and listening on port ${port}`)
});