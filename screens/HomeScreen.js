import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Location } from 'expo';
import Permissions from 'expo-permissions';

export class HomeScreen extends Component {
	static navigationOptions = {
		title: 'Home'
		//header: null
	};

	state = {
		location: '',
		errorMessage: '',
		latitude: null,
		longitude: null
	};

	componentWillMount() {
		this.getLocation();
	}

	getLocation = async () => {
		try {
			await Permissions.askAsync(Permissions.LOCATION);
			const location = await Location.getCurrentPostionAsync();
			this.setState({ location });
			console.log('hi');
		} catch (e) {
			console.log('hihi');
			console.log(e);
			this.setState({
				errorMessage: 'PREMISSION NOT GRANTED'
			});
		}
	};

	render() {
		return (
			<View style={styles.container}>
				<ScrollView style={{ flex: 1 }}>
					<Text>Home Component </Text>
					<Text>{JSON.stringify(this.state.location)}</Text>
					<MapView
						showsUserLocation={true}
						region={{
							latitudeDelta: 0.0922,
							longitudeDelta: 0.0421,
							latitude: 40.731031,
							longitude: -73.991324
						}}
						style={styles.mapStyle}
						provider={PROVIDER_GOOGLE}
					/>
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
