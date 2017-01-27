
module.exports = function(app) {

    //test route to make sure everything is working (accessed at GET http://localhost:8080/api)
    app.get('/api', function(req, res) {

            res.json({ message: 'test working external route file' });
            res.end();
        });


};
