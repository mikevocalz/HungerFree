import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { Location } from 'expo';
import Permissions from 'expo-permissions';

export class HomeScreen extends Component {
	static navigationOptions = {
		title: 'Home'
		//header: null
	};

	state = {
		location: {},
		errorMessage: '',
		latitude: null,
		longitude: null,
		markers: [
			{
				title: 'marker ',
				latlng: {
					latitude: 40.729514,
					longitude: -73.989112
				}
			}
		]
	};

	componentWillMount() {
		this.getLocation();
	}

	getLocation = async () => {
		try {
			await Permissions.askAsync(Permissions.LOCATION);
			const location = await Location.getCurrentPostionAsync();
			this.setState({ location });
		} catch (e) {
			console.log('hihi');
			console.log(e);
			this.setState({
				errorMessage: 'PREMISSION NOT GRANTED'
			});
		}

		console.log('location', location);
	};

	render() {
		const { location } = this.state;
		console.log('hi loca its me', location);
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
							// latitude: location.coords.latitude,
							// longitude: location.coords.latitude
						}}
						style={styles.mapStyle}
						provider={PROVIDER_GOOGLE}
					>
						{this.state.markers.map((marker) => <Marker coordinate={marker.latlng} title={marker.title} />)}
					</MapView>
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
