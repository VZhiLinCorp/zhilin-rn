

import React, { PureComponent } from 'react'
import { Tab, Tabs, View, Text, } from 'native-base'
import Touch from './Touch'
import PaddingBox from './PaddingBox'

import { bgWhite, bgPrimary, colorWhite, p_sm, getWidth, getHeight, center, fontSizeMd, getBorder, getRadius } from '../../../styles';
export default class BottomBlock extends PureComponent {
    constructor() {
        super(...arguments)
    }


    render() {
        const { onPress = () => { }, title = '', renderContent, style } = this.props
        return (
            <PaddingBox style={[bgWhite, getWidth(), getBorder('t'), { position: 'absolute', bottom: 0 }, ...style]}>
                {renderContent ? renderContent() :
                    <Touch style={[bgPrimary, getHeight(40), center, getRadius(5)]} onPress={onPress}>
                        <Text style={[fontSizeMd, colorWhite]}>{title}</Text>
                    </Touch>}
            </PaddingBox>
        )
    }
}

