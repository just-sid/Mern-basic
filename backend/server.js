const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.on('open', () => {
    console.log("Datababse connection established");
})


const exercisesRoute = require("./routes/exercises");
const userRoute = require("./routes/users");


app.use("/posts", exercisesRoute);
app.use("/posts", postRoute);
 


app.listen(port, () => {
 console.log(`Server running on port: ${port}`);
});
