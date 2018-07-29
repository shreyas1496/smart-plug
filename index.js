import express from 'express';
const app = express()


app.post("/slaves", (request, response) => {
    response.json({message: "post request sent"})
})

app.listen(3000, (err) => {
    if(err) {
        console.log("error")
    }
    else {
        console.log("server started")
    }
});