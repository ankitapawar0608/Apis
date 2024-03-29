import express from "express";

const app = express();

app.use(express.json())

const PORT = 5000;


app.get("/healthy",(req,res)=>{
    res.json({
        status:"Server is very healthy"
    })

})

app.get("/pizza",(req,res)=>{
res.json({
    message:"Pizza is ready",
    price :"Rs 200"
})
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);

}
);