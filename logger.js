// Middleware
const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const newtime = new Date().getFullYear();
    console.log(method, url, newtime);
    next();
}


module.exports = logger;