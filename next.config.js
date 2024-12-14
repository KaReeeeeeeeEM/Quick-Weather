/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'flagcdn.com',
            port: '',
            pathname: '/**',
            search: '',
        },
        {
            protocol: 'https',
            hostname: 'openweathermap.org',
            port: '',
            pathname: '/**',
            search: '',
        }
        ],
    },
};

module.exports = nextConfig;
