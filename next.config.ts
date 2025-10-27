import type { NextConfig } from "next";


const nextConfig: NextConfig = {
    webpack: (config: NextConfig) => {
        config.module.rules.push({
            test:/\.svg$/,
            exclude:/node_modules/,
            use:['@svgr/webpack'],
        })
        return config
    }

};

export default nextConfig;
