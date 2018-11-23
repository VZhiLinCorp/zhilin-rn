

import React, { PureComponent } from 'react'
import { Fab, Icon, } from 'native-base'

import { bgPrimary} from '../../../styles';
export default class Add extends PureComponent {
    constructor() {
        super(...arguments)
    }


    render() {
        const { position = 'bottomRight', onPress = () => { } } = this.props
        return (
            <Fab
                style={bgPrimary}
                position={position}
                onPress={onPress}>
                <Icon name="plus" type="MaterialCommunityIcons" />
            </Fab>
        )
    }
}

