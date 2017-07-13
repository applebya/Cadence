import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { observable } from 'mobx';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});


export default class Home extends Component {
	static navigationOptions = {
		title: 'Welcome'
	}
	
	render() {
		return (
			<View>
				<Text>Home</Text>
			</View>
		)
	}
}
