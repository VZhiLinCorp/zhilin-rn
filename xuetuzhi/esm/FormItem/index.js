import React, { PureComponent } from 'react'
import {  View, Text, } from 'native-base'
import { pv_n, pp_sm, getFlex, alignItemsC, getHeight, fontSizeN, row, spaceBtw } from 'zhilin-rn/styles';
import { bgWhite } from 'zhilin-rn/styles';
export default class FormItem extends PureComponent {
    constructor() {
        super(...arguments)
    }


    render() {
        const { label, style = [], Right } = this.props

        return (
            <View style={[row, pp_sm,spaceBtw, alignItemsC,getHeight(44),bgWhite,...style]}>
                <Text style={[fontSizeN]}>{label}</Text>
                    {
                        Right
                    }
            </View>
        )
    }
}
