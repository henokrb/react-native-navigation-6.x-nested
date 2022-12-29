import "react-native-dotenv";

export default {
	expo: {
		name: "boilerplate",
		slug: "boilerplate",
		version: "1.0.0",
		orientation: "portrait",
		icon: ".src/assets/images/icon.png",
		userInterfaceStyle: "light",
		splash: {
			image: ".src/assets/images/splash.png",
			resizeMode: "contain",
			backgroundColor: "#ffffff",
		},
		updates: {
			fallbackToCacheTimeout: 0,
		},
		assetBundlePatterns: ["**/*"],
		ios: {
			supportsTablet: true,
		},
		android: {
			adaptiveIcon: {
				foregroundImage: ".src/assets/images/adaptive-icon.png",
				backgroundColor: "#FFFFFF",
			},
		},
		web: {
			favicon: ".src/assets/images/favicon.png",
		},
		extra: {
			apiKey: process.env.API_KEY,
			authDomain: process.env.AUTH_DOMAIN,
			projectId: process.env.PROJECT_ID,
			storageBucket: process.env.STORAGE_BUCKET,
			messagingSenderId: process.env.MESSAGING_SENDER_ID,
			appId: process.env.APP_ID,
			measurementId: process.env.MEASUREMENT_ID,
		},
	},
};
