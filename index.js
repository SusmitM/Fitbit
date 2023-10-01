import express from "express";
import cors from 'cors';
import { connectToMongoDB } from "./connect.js";
import {apiRouter} from "./routes/apiRoutes.js"
const app=express();

const PORT=  process.env.PORT || 5000;


app.use(cors())
app.use(express.json())
app.use('/api',apiRouter);


async function startServer() {
    try {
     
      await connectToMongoDB();
  
      app.get('/', async (req, res) => {
        res.send("Welcome To Fitness Tracker");
      });
  
      app.listen(PORT, () => {
        console.log(`Server started on http://localhost:${PORT}/`);
      });
    } catch (error) {
      console.error('Failed to connect to MongoDB:', error);
    }
  }
  

startServer();




