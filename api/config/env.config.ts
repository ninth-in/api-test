import dotenv from 'dotenv'
dotenv.config();

const envConfig= {
    PORT : process.env.PORT || 4545,
    API_ROOT_PATH: process.env.API_ROOT_PATH ?? '/example/v1',
    MONGO_URI: process.env.MONGO_URI
}

export default envConfig;