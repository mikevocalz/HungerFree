import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import MapView from 'react-native-maps';

export class HomeScreen extends Component {
	static navigationOptions = {
		title: 'Home'
		//header: null
	};

	render() {
		return (
			<View style={styles.container}>
				<ScrollView style={{ flex: 1 }}>
					<Text>Home Component </Text>
					<MapView showsUserLocation={true} style={styles.mapStyle} />
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center'
	},
	mapStyle: {
		width: Dimensions.get('window').width,
		height: 400
	}
});

export default HomeScreen;
