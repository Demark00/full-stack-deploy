import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors(
    {
        origin: [
            "http://localhost:5173",
            "http://localhost:5174"
        ]
    }
));

app.get('/api/message', (req,res)=>{
    res.json({message: "Hello from Developer"})
})

const PORT = 8000;

app.listen(PORT, "0.0.0.0", ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})