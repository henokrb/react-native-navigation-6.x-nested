import { StyleSheet, Text, View } from "react-native";

export default function About() {
	return (
		<View style={styles.container}>
			<Text>About Us Page...</Text>
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
