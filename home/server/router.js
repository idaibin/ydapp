module.exports = function(router) {
    router.get('/index/test', (req, res) => {
        const param = req.query.a;
        res.json({
            data: 23 + param
        })
    })
};