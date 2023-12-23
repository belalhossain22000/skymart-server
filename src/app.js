import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import router from "./app/routes/index.js";
import { globalErrorHandler, notFound } from "./app/middleware/errorMiddleware.js";



const app = express();

//parsers
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/api', router);

//root route for check status
app.get("/", (req, res) => {
  res.send("server is running");
});


app.use(notFound);
// app.use(globalErrorHandler);

export default app;
