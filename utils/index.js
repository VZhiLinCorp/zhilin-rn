
import { Dimensions, Platform } from "react-native";



export const screenW = Dimensions.get("window").width;
export const screenH = Dimensions.get("window").height;

export const isAndroid = Platform.OS === 'android'
export const isIphoneX = Platform.OS === "ios" && (screenH === 812 || screenW === 812);

export { default as autobind } from 'autobind-decorator'
export { default as emitter } from './emitter'
