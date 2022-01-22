import Express from "express";
import BodyParser from "body-parser";
import cors from "cors";
import Mongoose from "mongoose";
import PostRoutes from "./routes/posts.js";

const app = Express();
app.use(BodyParser.json({limit: "30mb", extended: true}));
app.use(BodyParser.urlencoded({extended: true}));
app.use(cors());                           //To allow cross origin requests. u can read about it here : https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS This will basically send a cors header in response allowing cross origin requestors to access the resources. (localhost:3000 and localhost:5000 are different domains hence cross origin).

app.use("/posts", PostRoutes);             //Every request to /posts will be routed by PostRoutes now


//MongoDB connection:


const ConnectionUri = "mongodb+srv://akshaydagar98:ak%40221298@cluster0.s8g5d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

Mongoose.connect(ConnectionUri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Listening on port ${PORT}`)))
    .catch(err => console.log(err));

//Mongoose.set("useFindAndModify", false);