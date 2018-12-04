

import React, { PureComponent } from 'react'
import { Image } from 'react-native';
import { bgPrimary, getSquare, defaultAvatarSize, getBorder } from '../../../styles';
import { getAvatar } from '../../../images';
export default class MyAvatar extends PureComponent {
    constructor() {
        super(...arguments)
    }


    render() {
        const { uri = '', style = [], bordered = false, ...props } = this.props
        const source = getAvatar(uri)
        return (
            <Image source={source} {...props} style={[defaultAvatarSize, bordered && getBorder(), ...style]} />
        )
    }
}

