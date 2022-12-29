import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Home from "../screens/Home";
import Profile from "../screens/Profile";

const TopTab = createMaterialTopTabNavigator();

function MyTopTabs() {
	return (
		<TopTab.Navigator>
			<TopTab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarLabel: "Football",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="home" color={color} size={size} />
					),
				}}
			/>
			<TopTab.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarLabel: "Basketball",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="face-man" color={color} size={size} />
					),
				}}
			/>
		</TopTab.Navigator>
	);
}

export default function Toptabnav() {
	return (
		<NavigationContainer>
			<MyTopTabs />
		</NavigationContainer>
	);
}
