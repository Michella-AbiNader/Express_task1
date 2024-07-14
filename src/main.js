const express = require('express');
const app = express();
app.use(express.json());
require("dotenv").config();

const Todos = require("./Routes/Todos");
const TryCatch = require("./Services/Utils/TryCatch");
const ErrorHandler = require("./Services/Utils/ErrorHandler");
app.use(Todos);



app.use(TryCatch);
app.use(ErrorHandler);
const PORT = process.env.PORT || 3032;
app.listen(PORT, ()=>{
    console.log(`App is listening on Port ${PORT}`);
})
