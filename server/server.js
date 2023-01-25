const cors=require("cors")
const bodyParser=require("body-parser")
const express=require("express")
const mongoose=require("mongoose")
const port=8080
const app=express()
app.use(cors())
app.use(bodyParser.json())
const {Schema}=mongoose
const tableSchema = new Schema({
  imgurl: { type: String, required: true },
  description: { type: String, required: true },
  title: { type: String, required: true },
  imgurlavatar: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
},
{timestamps:true});

const Courses=mongoose.model("coursesrow",tableSchema)

//get
app.get("/coursesrow", (req, res) => {
    Courses.find({},(error,docs)=>{
        if(!error){
            res.send(docs)
        }else{
            res.status(500).json({message:error})
        }
    })
});


//get :id
app.get("/coursesrow/:id", (req, res) => {
    const {id}=req.params
  Courses.findById(id, (error, doc) => {
    if (!error) {
      res.send(doc);
    } else {
      res.status(500).json({ message: error });
    }
  });
});

//delete :id
app.delete("/coursesrow/:id", (req, res) => {
    const {id}=req.params
  Courses.findByIdAndDelete(id, (error) => {
    if (!error) {
      res.send("SUCCESS DELETED!");
    } else {
      res.status(404).json({ message: error });
    }
  });
});

//POST
app.post("/coursesrow/",(req,res)=>{
    const postSchema = Courses({
      imgurl: req.body.imgurl,
      description: req.body.description,
      title: req.body.title,
      imgurlavatar: req.body.imgurlavatar,
      name: req.body.name,
      price: req.body.price,
    });
    postSchema.save()
    res.send({message:"SUCCESS POST!"})
});


mongoose.set("strictQuery",false)
mongoose.connect(
  `mongodb+srv://sahar:sssaaa111@cluster0.opkcbok.mongodb.net/?retryWrites=true&w=majority`,
  (error) => {
    if (!error) {
     app.listen(port,()=>{
        console.log(`http://localhost:${port}`);
     })
    }
  }
);