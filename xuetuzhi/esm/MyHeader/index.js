import React from 'react'
import { View, Text, Header,  Button, Icon, Title } from 'native-base'
import { NavigationActions, withNavigation } from 'react-navigation'
import { bgWhite, colorPrimary, center, px2dp, getBorder, headerHeight, getFlex, alignItemsC, COLOR_INFO, fontSizeMd, COLOR_BLACK, row, bgDanger, jc_c, spaceBtw, flexEnd } from 'zhilin-rn/styles';
import { isAndroid } from '../../../utils';
import { m_0 } from '../../../styles';
import { headerPadding } from '../../../styles/common';
@withNavigation
export default class MyHeader extends React.Component {
    constructor() {
        super(...arguments)
        this._nav = this._nav.bind(this)
    }
    _nav() {
        const { route, navigation } = this.props
        const action = route ? NavigationActions.navigate({ routeName: route }) : NavigationActions.back()
        navigation.dispatch(action)
    }
    render() {
        const { showLeft, renderRight, route, leftText, bgColor, color, showLeftIcon = true, renderBody, ChevronLeft } = this.props
        return (
            <Header style={[{ marginTop: -1, paddingTop: px2dp(24) }, spaceBtw, alignItemsC, getBorder('b'), headerHeight,headerPadding, { backgroundColor: bgColor ? bgColor : "#F8F8F8" }]}>
                <View style={[getFlex(3), row, alignItemsC]}>{
                    (route || showLeft) &&
                    <Button transparent style={[getFlex(1), { marginLeft: isAndroid ? px2dp(-5) : 0, paddingLeft: 0 }]} onPress={this._nav} dark>
                        {
                            showLeftIcon && <Icon type="Entypo" name="chevron-thin-left" style={[m_0]}/>
                        }
                        {
                            leftText && <Text style={colorPrimary}>{leftText}</Text>
                        }
                    </Button>

                }</View>
                <View style={[getFlex(10), row, jc_c]}>
                    {
                        renderBody ? renderBody() : <Title style={[fontSizeMd, { color: color ? color : COLOR_BLACK }]} >{this.props.title}</Title>
                    }
                </View>
                <View style={[getFlex(3), flexEnd, row, alignItemsC]}>
                    {
                        renderRight &&
                        renderRight()
                    }
                </View>

            </Header>
        )
    }
}
