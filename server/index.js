import { Express } from "express";
import BodyParser from "body-parser";
import cors from "cors";
import { Mongoose } from "mongoose";

const app = Express();
app.use(BodyParser.urlencoded({extended: true}));
app.use(cors());

app.listen(3000, () => console.log("Listening on port 3000"));