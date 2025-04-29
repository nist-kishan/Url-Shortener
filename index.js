import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { routes } from './routes/urlRoutes.js';
import { dbConnection } from "./db/dbConnection.js";

const app = express();

app.use(express.json());


dbConnection()
  .then(() => console.log("Connected to DB"))
  .catch((error) => console.error(error));

app.use('/api/url', routes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
