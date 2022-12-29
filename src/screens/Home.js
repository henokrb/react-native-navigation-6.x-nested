import { Text, View, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Text style={styles.textTitle}>Home Screen</Text>
			<Button
				title="Go to Details screen"
				onPress={() => navigation.navigate("Details")}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		paddingTop: 15,
	},
	textTitle: {
		fontWeight: "bold",
		fontSize: 20,
		color: "#3db83a",
	},
});
