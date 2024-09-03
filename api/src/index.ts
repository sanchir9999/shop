import express from "express"
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (_req, res) => {
    res.json({ message: "hello Mongolia" })
});
app.listen(3001, () => {
    console.log("Сервер ажиллаж байна http://localhost:3001 ");

})