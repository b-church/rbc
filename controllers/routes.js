const express = require('express');
const request = require('request');
const router  = express.Router();

module.exports = function(app) {

    //handler for article requests to api
    app.post('/api/article' , function (req,res) {

        let article;

            article = articleRequest(req.body.id);

            console.log(article);
            //res.json(article);
            res.end();
    });

    //works but im unsure how to await this properly
    //creates request to get article data from contentful and returns data in a transformed JSON
    function articleRequest(articleID){

         request(`https://cdn.contentful.com/spaces/tot9g2yx605b/entries/${articleID}?access_token=e8cf32baa622ce72b243f640e5df725a01aa37049b8af61bbde4d92cb0cd4d8d` , function (error, response, body) {

            return transformArticleRequest(body);

        })
    }

    function transformArticleRequest(body){

        let obj = JSON.parse(body);
        console.log(obj);

        let article  = {
            id: obj.sys.id,
            title: obj.fields.title,
            description: obj.fields.description
        };
        return article;

    }
};
