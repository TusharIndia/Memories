const jwbtoken = require('jsonwebtoken')
const jwt_secret = process.env.JWT_TOKEN

const fetchuser = (req,res,next)=>{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error: "Please authenticate using a valid token"})
    }
    try{
        const data = jwbtoken.verify(token,jwt_secret);
        req.user = data.user;
        next();
    }catch(error){
        res.status(401).send({error: "Please authenticate using a valid token"})
    }
}

module.exports = fetchuser;