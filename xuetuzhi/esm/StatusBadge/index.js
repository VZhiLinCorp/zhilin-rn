import React from 'react'
import { View, Text } from 'react-native'

import { pp_xs, jc_c, getMorP, getRadius, getStupidBg, colorWhite } from '../../../styles';
export default class StatusBadge extends React.PureComponent {
  constructor() {
    super(...arguments)
  }

  render() {
    const { text } = this.props
    return !!text && <View style={[pp_xs, getStupidBg(text), jc_c, getMorP(1, 2, 'tblr'), getRadius(2)]}>
      <Text style={[colorWhite]}>
        {text}
      </Text>
    </View>
  }
}
