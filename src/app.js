import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";


const app = express();

//parsers
app.use(express.json());
app.use(cookieParser());
app.use(cors());



//root route for check status
app.get("/", (req, res) => {
  res.send("server is running");
});

export default app;
