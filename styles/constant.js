// import { px2dp } from './fn';

import { PixelRatio } from "react-native";
const px2dp = px => PixelRatio.roundToNearestPixel(px);

import theme from '../theme'
export const COLOR_PRIMARY = theme.primaryColor
export const COLOR_PRIMARY_SUB = '#19a899'
export const COLOR_PRIMARY_LIGHT = '#e5f2f1'

export const COLOR_SAFE = '#6af'
export const COLOR_SUCCESS = '#5cb85c'
export const COLOR_DANGER = '#ff6028'
export const COLOR_WARNING = '#febb49'

export const COLOR_ICON_TEXT = '#5E6C92'

export const COLOR_DARK = '#000'
export const COLOR_WHITE = '#fff'
export const COLOR_BLUE = '#5FB8F1'
export const COLOR_GREEN = '#45CD9B'
export const COLOR_ORANGE = '#FE9141'

export const COLOR_BLACK = '#333'
export const COLOR_INFO = '#666'
export const COLOR_LIGHT = '#999'
export const COLOR_SUB = '#cfdbda'
export const COLOR_PRESS = '#eee'
export const COLOR_PLACEHOLDER = '#ccc'
export const BORDER_COLOR = '#e5e8eb'

// export const BORDER_COLOR_LIGHT = '#ccc'

export const androidStatusBarColor = '#000'
export const BG_GRAY = '#f3f5f7'
export const BLOCK_GRAY = '#f2f2f2'
export const WHITE = '#fff'
export const colorPrimaryDark = '#00897B'
/****************大小****************/
export const FONT_SIZE_LG = px2dp(30);
export const FONT_SIZE_BIG = px2dp(19);
export const FONT_SIZE_MD = px2dp(18);
export const FONT_SIZE_N = px2dp(16);
export const FONT_SIZE_SM = px2dp(14);
export const FONT_SIZE_XS = px2dp(12);

export const INPUT_FONT_SIZE = px2dp(16)
export const DEFAULT_AVATAR_SIZE = px2dp(40)
