import React from 'react'
import { Image, View, Text } from 'react-native'


import { alignItemsC, jc_c, getHeight, getFlex, center } from 'zhilin-rn/styles';
import { colorInfoLight, bgWhite, bgDanger } from 'zhilin-rn/styles';
import { fontSizeSm } from '../../styles';
// import { Creators } from '../index';

export default class Blank extends React.Component {
    constructor() {
        super(...arguments)
        this.state = {
        }
    }
    static defaultProps = {
        text: false,
        style: []
    }
    render() {
        const { text, style } = this.props
        const message = <Text style={[colorInfoLight, fontSizeSm]}>暂无数据</Text>
        return (

            text ?
                (
                    <View style={[getHeight(40), center, ...style]}>
                        {
                            message
                        }
                    </View >
                ) : (
                    < View style={[getFlex(), center, ...style]} >
                        <Image source={require('../../images/blank.png')} />
                        {
                            message
                        }
                    </View >
                )


        )
    }

}
