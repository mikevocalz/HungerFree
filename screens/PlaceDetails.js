import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';

export class PlaceDetails extends Component {
	render() {
		return (
			<View>
				<Image
					style={styles.imageStyle}
					source={{ uri: 'https://globalassets.starbucks.com/assets/2f22cbcc693843989165dd459c4ca1ee.jpg' }}
				/>
				<Text>starbucks </Text>
				<Text>location: 13-25 Astor Pl, New York, NY 10003</Text>
				<Text>avaiablity</Text>
				<Text>15</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	imageStyle: {
		width: Dimensions.get('window').width,
		height: 300
	}
});

export default PlaceDetails;
