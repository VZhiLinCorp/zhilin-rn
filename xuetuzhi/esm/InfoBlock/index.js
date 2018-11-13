import React from 'react'
import { View, Text } from 'react-native'
import { fontSizeXs, row, spaceBtw, mt_xs, bgPrimary, colorWhite, getFontWeight } from '../../../styles';

import { StatusBadge, PaddingBox } from '../index';
export default class InfoBlock extends React.Component {
    constructor() {
        super(...arguments);

    }
    render() {
        const { rows = [] } = this.props;
        const textStyle = [colorWhite, fontSizeXs, getFontWeight('800')]
        return (
            <PaddingBox style={[bgPrimary]} >

                {
                    rows.map((r, index) => {
                        return (
                            <View style={[row, spaceBtw, (index !== 0) && mt_xs]}>
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


