import 'dotenv/config'
import express from "express";
import cors from "express";
import userRoute from "./infraestructure/route/userInfo.route";

const PORT = parseInt(process.env.PORT || '5000')

const app = express();
app.use(cors());
app.use(express.json());

app.use(userRoute);
app.listen(PORT, () => console.log(`USER, Listo por el puerto ${PORT}`));

