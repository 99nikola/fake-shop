/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
	i18n: {
		locales: ["english", "srpski"],
		defaultLocale: "english"
	}

}
