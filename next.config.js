/** @type {import('next').NextConfig} */
const nextConfig ={
    images:{
        // domains:["images.unsplash.com"],
        remotePatterns:[
            {
                protocol:'https',
                hostname:'images.unsplash.com',
                pathname:'**',
            },
            {
                protocol:'https',
                hostname:'assets.aceternity.com',
                pathname:'**',
            },
            {
                protocol:'https',
                hostname:'live.staticflickr.com',
                pathname:'**',
            }
        ]
    }
};

module.exports = nextConfig;