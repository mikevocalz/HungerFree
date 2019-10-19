import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Callout } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { Location } from 'expo';
import Permissions from 'expo-permissions';
import { NavigationEvents } from 'react-navigation';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

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
				id: 1,
				title: 'the bao ',
				description: '50 dumplings avaiable',
				latlng: {
					latitude: 40.729514,
					longitude: -73.989112
				}
			},
			{
				id: 2,
				title: 'the smith ',
				description: '20 burgers',
				latlng: {
					latitude: 40.731204,
					longitude: -73.988466
				}
			},
			{
				id: 3,
				title: 'startbucks ',
				description: '13 pastries',
				latlng: {
					latitude: 40.730253,
					longitude: -73.991556
				}
			},
			{
				id: 4,
				title: 'Tim Ho Wan ',
				description: '50 dim sum',
				latlng: {
					latitude: 40.731554,
					longitude: -73.9901
				}
			},
			{
				id: 5,
				title: 'IHOP ',
				description: '100 bacons',
				latlng: {
					latitude: 40.733164,
					longitude: -73.985547
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
			this.setState({
				errorMessage: 'PREMISSION NOT GRANTED'
			});
		}
	};

	render() {
		const { location } = this.state;
		return (
			<View style={styles.container}>
				<ScrollView style={{ flex: 1 }}>
					{/* <Text>{JSON.stringify(this.state.location)}</Text> */}
					<MapView
						showsUserLocation={true}
						region={{
							latitudeDelta: 0.0322,
							longitudeDelta: 0.0021,
							latitude: 40.731031,
							longitude: -73.991324
						}}
						style={styles.mapStyle}
						provider={PROVIDER_GOOGLE}
					>
						{this.state.markers.map((marker) => (
							<Marker
								key={marker.id}
								coordinate={marker.latlng}
								title={marker.title}
								description={marker.description}
							>
								<Callout onPress={() => this.props.navigation.push('PlaceDetails')}>
									<View>
										<Text style={{ fontWeight: 'bold' }}>{marker.title}</Text>
										<Text>{marker.description}</Text>
									</View>
								</Callout>
							</Marker>
						))}
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
		height: Dimensions.get('window').height
	}
});

export default HomeScreen;
