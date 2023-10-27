// Middleware

const authorize = (req, res, next) => {
    const {user} = req.query;
    if(user === 'sam'){
        req.user = {name:'sam', id:3}
        console.log("Authorize");
        next();
    }
    else{
        res.status(401).send("Unauthorized");
    }
}

module.exports = authorize;