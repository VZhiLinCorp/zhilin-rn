import React, { Component } from 'react'
import {  View,  Icon } from 'native-base'

import { row, COLOR_DANGER, COLOR_PLACEHOLDER } from '../../../styles';
export default class CultivatingSchemeDetail extends Component {
    constructor() {
        super(...arguments)

    }

    render() {
        const { score = 0, color = COLOR_DANGER, onPress, size = 24, num = 5 } = this.props
        return (
            <View style={[row]}>
                {
                    Array.from(Array(num)).map((i, index) => {
                        const isActive = index < score
                        return <Icon
                            name={`star${isActive ? '' : '-outline'}`}
                            type='MaterialCommunityIcons'
                            style={{ color: isActive ? color : COLOR_PLACEHOLDER, fontSize: size }}
                            onPress={() => {
                                onPress(index + 1)
                            }}
                        />
                    })
                }
            </View>


        )
    }
}


