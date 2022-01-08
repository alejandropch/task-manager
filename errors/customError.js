
class CustomErrorAPI extends Error {
    constructor(status, msg){
        super(msg)
        this.status= status
    }
}

const createCustomError = (status, msg)=> {
    return new CustomErrorAPI(status, msg)
}

module.exports={CustomErrorAPI, createCustomError}