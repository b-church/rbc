const express           = require('express'),
        request         = require('request-promise'),
       // promise         = require('bluebird');
    router = express.Router();

module.exports = router;



router.route('/api/article')
    //handler for article requests to api
    .post ((req, res) => {
        let id = req.body.id;
        //noinspection JSUnresolvedFunction
        request({

            method: 'GET',
            uri: `https://cdn.contentful.com/spaces/71rop70dkqaj/entries/${id}?access_token=297e67b247c1a77c1a23bb33bf4c32b81500519edd767a8384a4b8f8803fb971`,
            json: true
        })
            .then((data) => {
                console.log(data);
                //transformArticleRequest(data);
                res.json(transformArticleRequest(data))

            })
            .catch((err) => {
                console.log(err)
            })
    });

//creates request to get article data from contentful and returns data in a transformed JSON
function articleRequest(articleID){

    const options = {
        method: 'GET',
        uri: `https://cdn.contentful.com/spaces/71rop70dkqaj/entries/${articleID}?access_token=297e67b247c1a77c1a23bb33bf4c32b81500519edd767a8384a4b8f8803fb971`
    };

    /*
    main cms
    const options = {
        method: 'GET',
        uri: `https://cdn.contentful.com/spaces/tot9g2yx605b/entries/${articleID}?access_token=e8cf32baa622ce72b243f640e5df725a01aa37049b8af61bbde4d92cb0cd4d8d`
    }*/

    return request(options);
}

function transformArticleRequest(data){

    /*for (const key of Object.keys(data))
    {
        //do stuff
        console.log(key, data[key]);
    }*/



    return {
        id: data.sys.id,
        title: data.fields.title,
        description: data.fields.description,

        image: request({
            method: 'GET',
            uri: `http://images.contentful.com/71rop70dkqaj/wtrHxeu3zEoEce2MokCSi/e86a375b7ad18c25e4ff55de1eac42fe/quwowooybuqbl6ntboz3.jpg`,
        })
    };

}

