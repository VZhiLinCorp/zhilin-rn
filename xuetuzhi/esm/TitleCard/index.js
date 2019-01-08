import React from 'react'
import { View, Text, Card, CardItem, Right } from 'native-base'

import { getBorder, bgWhite, colorInfo, bgPrimary, alignItemsC, spaceBtw, row, getFlex, bold, getMorP, fontSizeN, fontSizeSm, ml_sm, getHeight, mp_sm } from '../../../styles';


export default class TitleCard extends React.Component {
    constructor() {
        super(...arguments)
        this.state = {

        }
    }
    static defaultProps = {
        right: ''
    }
    render() {
        const { title, children, right, renderRight, renderFoot } = this.props
        return (
            <Card style={[bgWhite,getRadius(4)]}>
                <View bordered style={[getMorP(1, 0, 'l'), getHeight(50), row, alignItemsC, getBorder('b')]}>
                    <View style={[{ width: 3, height: 20, borderTopRightRadius: 5, borderBottomRightRadius: 5 }, bgPrimary]}>
                    </View>
                    <View style={[row, alignItemsC, spaceBtw, getFlex(1), mp_sm]}>
                        <Text style={[bold, fontSizeN, getFlex()]} numberOfLines={1}>{title || '标题为空'}</Text>
                        {
                            renderRight ? renderRight() : <Text style={[fontSizeSm, colorInfo,]}>{right}</Text>
                        }
                    </View>
                </View>
                <CardItem header>

                    {
                        React.Children.map(children, c => React.cloneElement(c))
                    }
                </CardItem>
                {
                    renderFoot ? renderFoot() : null
                }
            </Card>
        )
    }
}
