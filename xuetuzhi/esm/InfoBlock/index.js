import React from 'react'
import { View, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { row, spaceBtw, colorWhite, mt_sm, fontSizeSm, getFlex, COLOR_PRIMARY } from '../../../styles';
import { PaddingBox } from '../index';
import hexToRgba from 'hex-to-rgba';
export default class InfoBlock extends React.Component {
    constructor() {
        super(...arguments);

    }
    render() {
        const { rows = [], style = [], onPress, bg, bgColors = [hexToRgba(COLOR_PRIMARY, .5), hexToRgba(COLOR_PRIMARY, .7), hexToRgba(COLOR_PRIMARY, 1)], color = colorWhite, textStyle = [] } = this.props;
        const _textStyle = [color, fontSizeSm, ...textStyle]
        const bgC = bg ? [bg, bg, bg] : bgColors;
        window
        return (
            <LinearGradient colors={bgC} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                <PaddingBox style={[...style]} onPress={onPress}>
                    {
                        rows.map((r, index) => {
                            return (
                                <View style={[row, spaceBtw, (index !== 0) && mt_sm]} key={index}>
                                    {
                                        r.map((rowItem,i) => {
                                            return <Text style={_textStyle} key={i}>{rowItem}</Text>
                                        })
                                    }
                                </View>
                            )
                        })
                    }
                </PaddingBox>
            </LinearGradient>
        )
    }


}


