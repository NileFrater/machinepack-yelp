module.exports = {
    friendlyName: 'yelp business api 2.0',
    description: 'HMAC-SHA1 Sig method, secret code and other information',
    extendedDescription: 'This example machine is part of machinepack-boilerplate, used to introduce everyone to machines.',

    inputs: {
        consumer_key: {
            example: '-XXXxxXX6FeNd72pe08TofQ',
            description: 'consumer-key',
            required: true
        },
        consumer_secret: {
            example: 'SxxxxxxxXXXXfo5gmqQvrWw',
            description: 'consumer-secret',
            required: true
        },
        token: {
            example: 'xxxxxxXXXzo-c80sC6KIx-ZxxxxaNYw2',
            description: 'API token for access',
            required: true
        },
        token_secret: {
            example: 'LVwYCXXXXXXXXxxxwiEI',
            description: 'API token-secret for access',
            required: true
        },

        search: {
            example: 'yelp-san-francisco',
            description: 'Email of ticket requestor',
            required: true
        }
    },

    defaultExit: 'success',

    exits: {
        error: {
            description: 'An unexpected error occurred.'
        },
        success: {
            //example: {}
            "is_claimed": true,
            "rating": 4.5,
            "mobile_url": "http://m.yelp.com/biz/brad-gorsky-dmd-new-york",
            "rating_img_url": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/99493c12711e/ico/stars/v1/stars_4_half.png",
            "review_count": 9,
            "name": "Brad Gorsky, DMD",
            "snippet_image_url": "http://s3-media1.fl.yelpcdn.com/photo/M3cpW0z5IshJqGvO9rYDQg/ms.jpg",
            "rating_img_url_small": "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/a5221e66bc70/ico/stars/v1/stars_small_4_half.png",
            "url": "http://www.yelp.com/biz/brad-gorsky-dmd-new-york",
            "reviews": [
                {
                    "rating": 5,
                    "excerpt": "My family has been going to Dr G for over 10 years. He's reliable, professional, and plays great music. He's fixed plenty of messes other dentists have made...",
                    "time_created": 1430765853,
                    "rating_image_url": "http://s3-media1.fl.yelpcdn.com/assets/2/www/img/f1def11e4e79/ico/stars/v1/stars_5.png",
                    "rating_image_small_url": "http://s3-media1.fl.yelpcdn.com/assets/2/www/img/c7623205d5cd/ico/stars/v1/stars_small_5.png",
                    "user": {
                        "image_url": "http://s3-media1.fl.yelpcdn.com/photo/M3cpW0z5IshJqGvO9rYDQg/ms.jpg",
                        "id": "_gWgNc6P6Umn175mm4ji0w",
                        "name": "Julie D."
                    },
                    "rating_image_large_url": "http://s3-media3.fl.yelpcdn.com/assets/2/www/img/22affc4e6c38/ico/stars/v1/stars_large_5.png",
                    "id": "QZT2Sz_vnOS4mVGpy4FprA"
                }
            ],
            "phone": "2123555241",
            "snippet_text": "My family has been going to Dr G for over 10 years. He's reliable, professional, and plays great music. He's fixed plenty of messes other dentists have made...",
            "categories": [
                [
                    "Dentists",
                    "dentists"
                ]
            ],
            "display_phone": "+1-212-355-5241",
            "rating_img_url_large": "http://s3-media4.fl.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
            "id": "brad-gorsky-dmd-new-york",
            "is_closed": false,
            "location": {
                "cross_streets": "Park Ave & Lexington Ave",
                "city": "New York",
                "display_address": [
                    "133 E 58th St",
                    "Ste 311A",
                    "Midtown East",
                    "New York, NY 10022"
                ],
                "geo_accuracy": 8,
                "neighborhoods": [
                    "Midtown East"
                ],
                "postal_code": "10022",
                "country_code": "US",
                "address": [
                    "133 E 58th St",
                    "Ste 311A"
                ],
                "coordinate": {
                    "latitude": 40.7617874,
                    "longitude": -73.9687271
                },
                "state_code": "NY"
            }



            ////////
        }
    },
    fn: function (inputs, exits) {
        // TODO: handle more specific exits (i.e. rate limit, customer does not exist, etc.)
        // console.log('find yelp fn')
        var yelp = require("yelp").createClient({
            consumer_key: inputs.consumer_key,
            consumer_secret: inputs.consumer_secret,
            token: inputs.token,
            token_secret: inputs.token_secret
        });


        yelp.business(inputs.search, function (error, data) {
            console.log(error);
            console.log(data);
            if (error) {
                return exits(error);

            }
            else {
                return exits.success(data);
            }


        });

    }
};

