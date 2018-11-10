
import React, { StyleSheet, Dimensions, PixelRatio, Platform, StatusBar } from "react-native";


export * from './length'
export * from './layout'
export * from './constant'
export * from './icon'
export * from './common'
export * from './fn'

export const statusHeight = (Platform.OS === 'android') ? StatusBar.currentHeight : 25;
export const screenW = Dimensions.get("window").width;
export const screenH = Dimensions.get("window").height;
export const drawerWidth = screenW / 3 * 2;



export const setRadius = size => {

}

