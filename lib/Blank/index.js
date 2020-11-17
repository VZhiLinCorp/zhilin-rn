import React from 'react'
import { Image, View, Text, FlatList } from 'react-native'
import { getHeight, getFlex, center, getMorP, colorInfoLight, fontSizeSm } from 'zhilin-rn/styles';

export default class Blank extends React.Component {
    constructor() {
        super(...arguments)
    }
    static defaultProps = {
        text: '暂无数据',
        showImage: true,
        textStyle: [],
        style: []
    }
    render() {
        const { text, style, textStyle, showImage, renderImage } = this.props
        return (
            showImage ?
                <View style={[getFlex(), center, getMorP(1, 50, 't'), ...style]}>
                    {
                        renderImage ? renderImage() : <Image source={require('../../images/blank.png')} />
                    }
                    <Text style={[colorInfoLight, fontSizeSm, ...textStyle]}>{text}</Text>
                </View>
                :
                <View style={[getHeight(40), center, ...style]}>
                   <Text style={[colorInfoLight, fontSizeSm, ...textStyle]}>{text}</Text>
                </View>
        )
    }
}
