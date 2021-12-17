import Express from "express";
import BodyParser from "body-parser";
import cors from "cors";
import Mongoose from "mongoose";
import PostRoutes from "./routes/posts.js";

const app = Express();
app.use(BodyParser.urlencoded({extended: true}));
app.use(cors());

app.use("/posts", PostRoutes);             //Every request to /posts will be routed by PostRoutes now




//MongoDB conenction:


const ConnectionUri = "mongodb+srv://akshaydagar98:ak%40221298@cluster0.s8g5d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3000;

Mongoose.connect(ConnectionUri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Listening on port ${PORT}`)))
    .catch(err => console.log(err));

//Mongoose.set("useFindAndModify", false);