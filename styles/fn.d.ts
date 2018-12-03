import { PixelRatio } from "react-native";
import { isNumber } from 'lodash'
import { isAndroid,screenW } from "../utils";
const fontSizeScaler = isAndroid ? (1 / PixelRatio.getFontScale()) : 1
export const px2dp = px => PixelRatio.roundToNearestPixel(px);

export const getFontSize = size => {
    return ({
        fontSize: px2dp(size * fontSizeScaler)
    })
}


const directions = {
    t: 'Top',
    r: 'Right',
    b: 'Bottom',
    l: 'Left'
}





export function getMorP(p, n, d = 'trbl') {
    let data = {}
    const prefixs = ['margin', 'padding']
    const prefix = prefixs[p]

    let _directions = d.split('')
    _directions.forEach(d => {
        data[prefix + directions[d]] = n
    })

    return data
}

export const getBorder = (d = 'trbl', c = '#d3d8dd', w = .33) => {
    let prefix = 'border'
    let data = {}
    let _directions = d.split('')
    _directions.forEach(d => {
        let direction = directions[d]
        data[prefix + direction + 'Width'] = w
        data[prefix + direction + 'Color'] = c
    })

    return data
}

export const getRadius = (size) => {
    return {
        borderRadius: size,
    }
}

export const getSquare = (length, isCircle) => {
    if (!isNumber(length)) {
        return { backgroundColor: 'green' };
    }
    length = px2dp(length)
    let res = {
        width: length,
        height: length
    }
    isCircle && (res.borderRadius = (length / 2))
    return res
}
export const getBgColor = (backgroundColor) => {
    return {
        backgroundColor
    }
}
export const getColor = (color) => {
    return {
        color
    }
}
export const getHeight = (height) => {
    return {
        height: px2dp(height)
    }
}
export const getWidth = (width = screenW) => {
    return {
        width: px2dp(width)
    }
}



export const getLineHeight = (lineHeight) => {
    return {
        lineHeight: px2dp(lineHeight)
    }
}

export const getFontWeight = fontWeight => ({
    fontWeight
})

export const getShadow = (width, height, shadowOpacity = .33) => ({
    shadowOffset: { width, height }, shadowColor: 'black', shadowOpacity
})

export const getAbsPosition = (top, right, bottom, left) => {
    return res = {
        position: 'absolute',
        ...(isNumber(top) ? { top } : {}),
        ...(isNumber(right) ? { right } : {}),
        ...(isNumber(bottom) ? { bottom } : {}),
        ...(isNumber(left) ? { left } : {}),
    }
}
