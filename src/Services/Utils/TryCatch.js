const tryCatch = controller => (req, res, next) =>{
    try{
        controller(req, res); //Try the controller
    }
    catch(err){ //if an error happens catch it and go to Errorhandler
        next(err)
    }
}
module.exports = tryCatch;