import React from 'react'
import { Image, View, Text, TouchableOpacity } from 'react-native'
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
    touchableHandlePress = () => {
        this.props.onPress && this.props.onPress();
    }

    render() {
        const { text, style, textStyle, showImage, renderImage, onPress } = this.props;
        return (
            <>
                {
                    showImage ?
                        <TouchableOpacity disabled={!onPress} onPress={this.touchableHandlePress} style={[getFlex(), center, getMorP(1, 50, 't'), ...style]}>
                            {
                                renderImage ? renderImage() : <Image source={require('../../images/blank.png')} />
                            }
                            <Text style={[colorInfoLight, fontSizeSm, ...textStyle]}>{text}</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity disabled={!onPress} onPress={this.touchableHandlePress} style={[getHeight(40), center, ...style]}>
                            <Text style={[colorInfoLight, fontSizeSm, ...textStyle]}>{text}</Text>
                        </TouchableOpacity>
                }
            </>
        )
    }
}