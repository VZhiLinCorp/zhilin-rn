import React, { Component } from 'react'
import { Tab, Tabs, View, Text, } from 'native-base'
import { pp_sm, pv_n, px2dp, getFlex, bgPrimary, bgBlack, colorWhite, getBorder } from '../../../styles';
import { default as InfoBlock } from '../InfoBlock';
export default class InfoTabLayout extends Component {
    constructor() {
        super(...arguments)
    }
    static defaultProps = {
        bordered: false
    }

    render() {
        const { contentTabs, rows, bg, color = colorWhite, textStyle, bordered } = this.props
        const entries = Object.entries(contentTabs)
        return (
            <View style={[getFlex()]}>
                <InfoBlock rows={rows} bg={bg} color={color} textStyle={textStyle} />

                {
                    !!entries.length && <Tabs initialPage={0} tabBarUnderlineStyle={{ height: px2dp(1.5) }} style={[bordered && getBorder('t')]}>
                        {
                            entries.map((i, index) => {
                                const key = i[0]
                                const value = i[1]
                                return (
                                    <Tab heading={key} key={index}>
                                        {
                                            value
                                        }
                                    </Tab>
                                )
                            })
                        }
                    </Tabs>
                }

            </View>
        )
    }
}
