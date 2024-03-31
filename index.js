import express from "express";

const app = express();

app.use(express.json())

const PORT = 5000;


app.get("/healthy",(req,res)=>{
    res.json({
        status:"Server is very healthy"
    })

})

//Query Parameter

app.get("/info",(req,res)=>{
  const {name,age,city} = req.query;

  //Headers
 const {clg,branch} = req.headers;

    res.json({
        message:`I am ${name} from ${city}`,
        age:`And I am ${age} year old`,
        details :`I completed my graduation from ${clg} in ${branch} branch`
    })

})

//Path Parameter

app.get("/food/:type",(req,res)=>{

    const {type} = req.params;

    return res.json({
        message : `you have ordered ${type} food`
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);

}
);