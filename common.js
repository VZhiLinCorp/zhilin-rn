import { px2dp, getHeight } from "./fn";
import { COLOR_INFO, COLOR_LIGHT, COLOR_PRIMARY, COLOR_BLACK, WHITE, COLOR_WHITE } from "./constant";
import { isAndroid } from '../utils';
import { StatusBar } from 'react-native';
export const head = {
    fontSize: px2dp(16),
    color: '#000',
    fontWeight: 'bold'
}
export const listItemTitle = {
    fontSize: px2dp(16),
    color: '#323538',
    fontWeight: 'normal'
}
export const listItemContent = {
    fontSize: px2dp(14),
    color: COLOR_INFO,
}
export const listItemSub = {
    fontSize: px2dp(14),
    color: COLOR_LIGHT
}

export const menuItem = {
    fontSize: px2dp(20),
    color: COLOR_LIGHT
}
export const menuItemFocus = {
    fontSize: px2dp(20),
    color: COLOR_PRIMARY
}
export const avator = {
    width: px2dp(20),
    height: px2dp(20),
    borderRadius: px2dp(20) / 2
}


export const tabViewStyle = {
    labelStyle: {
        color: COLOR_BLACK
    },
    style: {
        backgroundColor: WHITE
    },
    indicatorStyle: {
        backgroundColor: COLOR_PRIMARY
    }
}

export const btnClassic = {
    backgroundColor: COLOR_PRIMARY,
    color: COLOR_WHITE
}

export const btnSimple = {
    backgroundColor: COLOR_WHITE,
    color: COLOR_PRIMARY,
    borderColor: COLOR_PRIMARY
}
export const formInput = {
    textAlign: 'right',
    paddingRight: px2dp(7)
}
export const formItem = {
    paddingRight: px2dp(10)
}

//统一的状态栏属性
export const statusbarIsHidden = false
export const statusbarBgColor = '#fff'
export const statusbarIsTranslucent = isAndroid ? false : true
export const statusbarFontStyle = 'dark-content';
export const headerHeight = isAndroid ? (getHeight(40) + StatusBar.currentHeight) : {}
export const headerPadding = isAndroid ? { paddingTop: StatusBar.currentHeight } : {}