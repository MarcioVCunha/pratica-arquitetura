import express from "express";
import cors from "cors";

import signUp from "./controllers/signUpController.js";
import signIn from "./controllers/signInController.js";
import postFinancialEvent from "./controllers/postFinancialEventController.js";
import getFinancialEvents from "./controllers/getFinalcialEventsController.js";
import getSum from "./controllers/getSumController.js";
import auth from './middleware/auth.js';

const app = express();
app.use(cors());
app.use(express.json());

app.post("/sign-up", signUp);
app.post("/sign-in", signIn);
app.post("/financial-events", auth, postFinancialEvent);

app.get("/financial-events", auth, getFinancialEvents);
app.get("/financial-events/sum", auth, getSum);

export default app;
