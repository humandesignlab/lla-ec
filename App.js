import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button'

export default function App() {
  return (
    <View style={styles.container}>
			<Button
				text="Next"
				textColor="#161616"
				backgroundColor="#d3d3d3"
        onPress={() =>
          console.log("Pressed button!")
        }
				/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
