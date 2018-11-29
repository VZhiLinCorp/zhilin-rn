import React from 'react'
import { View, Text } from 'react-native'
import { fontSizeXs, row, spaceBtw, mt_xs, bgPrimary, colorWhite, getFontWeight, mt_sm, fontSizeSm } from '../../../styles';

import { StatusBadge, PaddingBox } from '../index';
export default class InfoBlock extends React.Component {
    constructor() {
        super(...arguments);

    }
    render() {
        const { rows = [], style = [], onPress, bg = bgPrimary } = this.props;
        const textStyle = [colorWhite, fontSizeSm, getFontWeight('800')]
        return (
            <PaddingBox style={[bgPrimary, ...style]} onPress={onPress} >

                {
                    rows.map((r, index) => {
                        return (
                            <View style={[row, spaceBtw, (index !== 0) && mt_sm]}>
                                {
                                    r.map(rowItem => {
                                        return <Text style={textStyle}>{rowItem}</Text>
                                    })
                                }
                            </View>
                        )
                    })
                }
            </PaddingBox>
        )
    }


}


