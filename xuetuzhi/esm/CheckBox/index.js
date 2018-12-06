import React, { Component } from 'react'
import { Icon } from 'native-base'

import { colorPrimary, colorInfoLight } from 'zhilin-rn/styles';

export default class CheckBox extends Component {
    constructor() {
        super(...arguments)
        this.state = {

        }
        this._setScore = this._setScore.bind(this)
    }

    _setScore(type) {

    }
    render() {
        const { checked, size = 26, box = false, style = [] } = this.props
        const markedIcon = box ? 'checkbox-intermediate' : 'radiobox-marked'
        const outlineIcon = box ? 'checkbox-blank-outline' : 'radiobox-blank'

        return <Icon type="MaterialCommunityIcons"
            name={checked ? markedIcon : outlineIcon}
            style={[checked ? colorPrimary : colorInfoLight, { fontSize: size }, ...style]} />
    }
}


