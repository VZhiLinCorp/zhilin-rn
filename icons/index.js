import React from 'react'
import { Icon } from 'native-base';
import { colorPlaceholder, getFontSize, getMorP } from '../styles';



export var Chevron = ({ style = [], dir = 'right', ...p }) => {
    return <Icon name={`chevron-${dir}`} type="MaterialCommunityIcons" {...p} style={[colorPlaceholder, getFontSize(22), getMorP(0, -2, 'lrb'), ...style]} />
}

export var MarkerIcon = p => {
    return <Icon name="map-marker-outline" type="MaterialCommunityIcons" {...p} />
}
export var MessageIcon = p => {
    return <Icon name="message-text-outline" type="MaterialCommunityIcons" {...p} />
}

export var ChevronRightIcon = ({ style = [], ...p }) => {
    return <Icon name="chevron-right" type="MaterialCommunityIcons" {...p} style={[colorPlaceholder, getFontSize(22), getMorP(0, -2, 'lrb'), ...style]} />
}

