import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Home from "../screens/Home";
import Profile from "../screens/Profile";

const BottomTab = createBottomTabNavigator();

export default function Bottomtabnav() {
	return (
		<BottomTab.Navigator>
			<BottomTab.Screen
				name="Home"
				component={Home}
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="home" color={color} size={size} />
					),
				}}
			/>
			<BottomTab.Screen
				name="Profile"
				component={Profile}
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="face-man" color={color} size={size} />
					),
				}}
			/>
		</BottomTab.Navigator>
	);
}
