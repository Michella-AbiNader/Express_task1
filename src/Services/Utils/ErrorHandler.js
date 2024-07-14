//handle errors that might occure so the app doesn't crash
const errorHandler = (error, req, res, next)=>{
    console.log(error); //Log the error to the terminal
    return res.status(201).json({   //return a message to the user that shows that an error happened
            message:'something went wrong'
        });
}
module.exports = errorHandler;