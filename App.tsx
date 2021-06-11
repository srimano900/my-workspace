import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AnimatedCarousel from './src/Animated-Flatlist-Carousel/AnimatedCarousel'
import PhilzCoffee from './src/PhilzCoffee/PhilzCoffee'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AnimatedCarousel/>
      {/* <PhilzCoffee/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
});
