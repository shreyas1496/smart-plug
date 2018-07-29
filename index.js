import express from 'express';
import morgan from 'morgan'
const app = express()

app.use(morgan('combined'));

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