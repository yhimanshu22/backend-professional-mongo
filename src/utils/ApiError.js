class ApiError extends Error{
    constructor(
     statusCode,
     errors =[],
     statck=''

    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.error = errors

        if(statck){
            this.stack =  statck
        }else{
            Error.captureStackTrace(this,this.contructor)
        }

    }
}

export {ApiError}