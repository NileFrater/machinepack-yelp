module.exports = {
    friendlyName: 'yelp search api 2.0',
    description: 'HMAC-SHA1 Sig method, secret code and other information',
    extendedDescription: 'This example machine is part of machinepack-boilerplate, used to introduce everyone to machines.',

    inputs: {
        consumer_key: {
            example: '-DVCvqO6FeNd72pe08TofQ',
            description: 'consumer-key',
            required: true
        },
        consumer_secret: {
            example: 'SsqazNjK3JXYkHlvfo5gmqQvrWw',
            description: 'consumer-secret',
            required: true
        },
        token: {
            example: 'hi1Z8J0PFzo-c80sC6KIx-ZjneaaNYw2',
            description: 'API token for access',
            required: true
        },
        token_secret: {
            example: 'LVwYLQ4NO4XOWwI7NWPeU5DwiEI',
            description: 'API token-secret for access',
            required: true
        },

        term: {
            example: 'food',
            description: 'API for your zendesk instance',
            required: true
        },
        location: {
            example: 'Montreal',
            description: 'Name of ticket requestor',
            required: true
        },
    },

    defaultExit: 'success',

    exits: {
        error: {
            description: 'An unexpected error occurred.'
        },
        success: {
           example: {}
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

        // See http://www.yelp.com/developers/documentation/v2/search_api
        var searchstr = {term:inputs.term,location:inputs.location};

        yelp.search(searchstr, function (error, data) {
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

