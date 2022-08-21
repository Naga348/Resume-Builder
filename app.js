const express= require("express")

const bodyparser= require('body-parser')

const pdf = require('html-pdf')

var cors= require('cors')


const structureforpdf= require("./template/structure")

const app= express();

app.use(cors())
app.use(bodyparser.urlencoded({ extended: true}))
app.use(bodyparser.json())


app.post('/createpdf',(req,res)=>{
    pdf.create(structureforpdf(req.body),{}).toFile('myresume.pdf',(err)=>{
        if(err){
            res.send(Promise.reject())
            //console.log(err)

        }
    
        res.send(Promise.resolve())
        
        
    })
})


app.get('/downloadpdf',(req,res)=>{
    res.sendFile(`${__dirname}/myresume.pdf`);
})

// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
// });



module.exports=app;
