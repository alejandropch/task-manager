const { CustomErrorAPI } = require('../errors/customError')

function errorHandler(error,req,res,next) {
    if(error instanceof CustomErrorAPI){
        return res.status(error.status).json({message:error.message, stack: error.stack})

    }
    return res.status(500).json({message:'Something is broke, try again later', error: error.message})
}

module.exports=errorHandler