
import { Dimensions, Platform } from "react-native";


export const screenW = Dimensions.get("window").width;
export const screenH = Dimensions.get("window").height;

export const isAndroid = Platform.OS === 'android'
export const isIphoneX = Platform.OS === "ios" && (screenH === 812 || screenW === 812 || screenH===896||screenW===896);

export { default as autobind } from 'autobind-decorator'
export { default as emitter } from './emitter'
export { default as setHeader } from './setHeader'
export { connect } from 'react-redux';
export { default as Orientation } from 'react-native-orientation'
export * from './constant' 
