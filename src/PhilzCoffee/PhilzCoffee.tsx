import React from "react";
import { Dimensions, View, ScrollView, StyleSheet } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { interpolateColor } from 'react-native-redash'

import { products } from "./Model";
import Card, { CARD_HEIGHT } from "./Card";
import Products from "./Products";
import Cards from "./components/Cards";

const { width } = Dimensions.get("window");

const snapToOffset = [0, CARD_HEIGHT];

const styles = StyleSheet.create({
  slider: { height: CARD_HEIGHT },
});

const PhilzCoffee = () => {
  const translateX = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset: {x} }) => {
      translateX.value = x
    }
  })
  const style = useAnimatedStyle(() => ({
    backgroundColor:interpolateColor(
      translateX.value,
      products.map((_,i) => width * 1),
      products.map((product) => product.color2)
    )
  }))
  return (
    <Animated.View style={[{flex:1}]}>
      <ScrollView 
        snapToOffsets={snapToOffset}
        bounces={false}
        decelerationRate='fast'
        snapToEnd={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.slider}>
          <Animated.ScrollView 
            scrollEventThrottle={16}
            // onScroll = {onScroll}
            showsHorizontalScrollIndicator={false}
            snapToInterval={width}
            decelerationRate='fast'
            horizontal>
            {products.map((product, index) => (
              <Card product={product} key={index} />
            ))}
          </Animated.ScrollView>
          <Products />
        </View>
        <Cards />
      </ScrollView>
    </Animated.View>
  );
};

export default PhilzCoffee;
