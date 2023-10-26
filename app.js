const express= require("express");
const path= require("path");
const fs= require("fs");
const app= express();
const port= 2010;

//EXPRESS SPECIFIC STUFF
app.use(`/static`, express.static(`static`)); //for serving static files

//PUG SPECIFIC STUFF
app.set(`view engine`, `pug`);  //set the template engine as pug
app.set(`views`, path.join(__dirname, `views`));    // set the views directory

//END POINTS
app.get('/', (req,res)=>{
    const params={}
    res.status(200).render("index.pug",params);
    })
app.get('/teamContact', (req,res)=>{
    const params={}
    res.status(200).render("teamContact.pug",params);
    })
app.get('/events', (req,res)=>{
    const params={}
    res.status(200).render("events.pug",params);
    })
app.get('/aboutUs', (req,res)=>{
    const params={}
    res.status(200).render("aboutUs.pug",params);
    })
app.get('/gallery', (req,res)=>{
    const params={}
    res.status(200).render("gallery.pug",params);
    })

//START THE SERVER
app.listen(port, ()=>{
    console.log(`first app successful on port ${port}`)
})