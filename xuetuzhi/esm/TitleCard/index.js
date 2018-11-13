import React from 'react'
import { View, Text, Card, CardItem, Right } from 'native-base'

import { bgWhite, colorInfo, bgPrimary, alignItemsC, spaceBtw, row, getFlex, bold, getMorP, fontSizeN, fontSizeSm, ml_sm } from '../../../styles';


export class TitleCard extends React.Component {
    constructor() {
        super(...arguments)
        this.state = {

        }
    }
    render() {
        const { title, children, right } = this.props
        return (
            <Card style={[bgWhite]}>
                <CardItem header bordered style={[getMorP(1, 0, 'l')]}>
                    <View style={[{ width: 3, height: 20, borderTopRightRadius: 5, borderBottomRightRadius: 5 }, bgPrimary]}>
                    </View>
                    <View style={[row, alignItemsC, spaceBtw, getFlex(1), ml_sm]}>
                        <Text style={[bold, fontSizeN, getFlex()]} numberOfLines={1}>{title || '标题为空'}</Text>
                        <Text style={[fontSizeSm, colorInfo,]}>{right}</Text>
                    </View>
                </CardItem>
                <CardItem header>

                    {
                        React.Children.map(children, c => React.cloneElement(c))
                    }
                </CardItem>
            </Card>
        )
    }
}
