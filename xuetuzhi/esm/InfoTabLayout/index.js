import React from 'react'
import { View, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { fontSizeXs, row, spaceBtw, mt_xs, bgPrimary, colorWhite, getFontWeight, mt_sm, fontSizeSm, getFlex } from '../../../styles';

import { StatusBadge, PaddingBox } from '../index';
export default class InfoBlock extends React.Component {
    constructor() {
        super(...arguments);

    }
    render() {
        const { rows = [], style = [], onPress, bg = bgPrimary, bgColors = ['#66ccff', '#3399ff', '#0066cc'], color = colorWhite, textStyle = [] } = this.props;
        const _textStyle = [color, fontSizeSm, ...textStyle]
        return (
            <LinearGradient colors={bgColors}  start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                <PaddingBox style={[...style]} onPress={onPress}>
                    {
                        rows.map((r, index) => {
                            return (
                                <View style={[row, spaceBtw, (index !== 0) && mt_sm]}>
                                    {
                                        r.map(rowItem => {
                                            return <Text style={_textStyle}>{rowItem}</Text>
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


