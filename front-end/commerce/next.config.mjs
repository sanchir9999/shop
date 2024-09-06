// next.config.mjs
import { config } from 'dotenv';

config(); // .env файлыг унших

const nextConfig = {
    env: {
        API: process.env.API,
    },
};

export default nextConfig;
