var parameters = {
    development: {
        server: {
            schema: 'http://',
            host: 'localhost',
            port: 3000
        },

        persistence: {
            connectionString: 'mongodb://localhost/flightfox_dev'
        },

        session: {
            secret: 'flightoxxofthgilf'
        }
    },

    staging: {
        server: {
            schema: 'http://',
            host: '52.11.26.126',
            port: 3000, // @TODO set to 80 once nginx is setup
        },

        persistence: {
            connectionString: 'mongodb://localhost/flightfox_staging'
        },

        session: {
            secret: 'flightoxxofthgilf'
        }
    },


    production: {
        // TODO
    }
};

module.exports = {
    get: function(env) {
        if (!env) {
            env = 'development';

            if (process.env.NODE_ENV) {
                env = process.env.NODE_ENV;
            }
        }

        if (['development', 'staging', 'production'].indexOf(env) === -1) {
            throw new Error('Invalid environment: ' + env);
        }

        return parameters[env];
    }
};
