module.exports =  reqf = (req, res, next) => {
    if (!req.query.age) {
        res.send('enter age')
    }
    else {
        next()
    }
}