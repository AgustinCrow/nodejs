import  express  from "express";
import userRouter from "./routes/users_routes.js"

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    console.log("Holaaa");
    res.status(200).end()
})

app.use('/',userRouter);

export default app;