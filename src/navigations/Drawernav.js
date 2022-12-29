import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Bottomtabnav from "./Bottomtabnav";

import About from "../screens/About";
import Contact from "../screens/Contact";

const Drawer = createDrawerNavigator();

export default function Drawernav() {
	return (
		<Drawer.Navigator>
			<Drawer.Screen
				name="Home"
				component={Bottomtabnav}
				options={{ title: "Home Page" }}
			/>
			<Drawer.Screen
				name="About Us"
				component={About}
				options={{ title: "About Us Page" }}
			/>
			<Drawer.Screen
				name="Contact Us"
				component={Contact}
				options={{ title: "Contact Us Page" }}
			/>
		</Drawer.Navigator>
	);
}
