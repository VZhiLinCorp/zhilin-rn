import React from 'react'
import { Image, View, Text } from 'react-native'


import { alignItemsC, getFlex, row, pp_sm, bgPrimary, getWidth, bgInfoLight, pb_sm, getSquare } from '../../styles';
// import { Creators } from '../index';

export default class TimeLine extends React.Component {
    constructor() {
        super(...arguments)
        this.state = {
        }
    }
    static defaultProps = {
        content: <Text>小老弟没有内容噢</Text>,
        style: []
    }
    render() {
        const { style, content } = this.props
        return (

            <View style={[row]}>
                <View style={[pp_sm, alignItemsC]}>
                    <View style={[getSquare(10, true), bgPrimary]}>
                    </View>
                    <View style={[getWidth(1), bgInfoLight, getFlex()]}>
                    </View>
                </View>
                <View style={[getFlex(), pb_sm]}>
                    {
                        content
                    }
                </View>
            </View>


        )
    }

}
