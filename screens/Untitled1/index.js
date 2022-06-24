import { Text } from "react-native";
import { FlatList } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled1 = () => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <FlatList renderItem={() => <View style={{
      minHeight: 60,
      backgroundColor: "#ddd9e1",
      borderRadius: "50%",
      left: 0,
      top: 0,
      width: 151,
      height: 60,
      borderWidth: 1
    }}><Text style={{
        left: 26,
        top: 11,
        position: "absolute",
        width: 99,
        height: 32,
        lineHeight: 14,
        fontSize: 14,
        borderRadius: 0,
        color: "#c22020"
      }}>Hello!</Text></View>} data={[1, 2, 3, 4]} keyExtractor={item => item.toString()} style={{
      left: 14,
      top: 27,
      position: "absolute",
      width: 151,
      height: 200
    }} ItemSeparatorComponent={() => <View style={{
      backgroundColor: '#000000',
      height: 1
    }} />}></FlatList></View>;
};

export default Untitled1;