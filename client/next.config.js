/** @type {import('next').NextConfig} */
const nextConfig = {
	webpackDevMiddleware: (config) => {
		// Solve compiling problem via vagrant
		config.watchOptions = {
			poll: 1000, // Check for changes every second
			aggregateTimeout: 300, // delay before rebuilding
		}
		return config
	},
	reactStrictMode: true,
	env: {
		BACKEND_API_URL: process.env.BACKEND_API_URL,
	},
}

module.exports = nextConfig
