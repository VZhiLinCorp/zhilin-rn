
import React, { PureComponent } from 'react'
import { View ,StyleSheet} from 'react-native'
import { Touch } from '../index';
import { pv_n, pp_sm } from '../../../styles';
import { bgWhite } from '../../../styles/color';
export default class PaddingBox extends PureComponent {
    constructor() {
        super(...arguments)
    }


    render() {
        const { children, style = [], onPress } = this.props
        const Wrap = typeof onPress === 'function' ? Touch : View
        return (
            <Wrap style={[pv_n, pp_sm, bgWhite, ...style]} onPress={onPress}>
                {
                    React.Children.map(children, c => React.cloneElement(c))
                }
            </Wrap>
        )
    }
}

