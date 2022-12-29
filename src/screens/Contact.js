import { StyleSheet, Text, View } from "react-native";

export default function Contact() {
	return (
		<View style={styles.container}>
			<Text>Contact Us Page...</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
