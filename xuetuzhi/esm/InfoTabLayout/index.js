import React, { Component } from 'react'
import { Tab, Tabs, View, Text, } from 'native-base'
import { pp_sm, pv_n, px2dp, getFlex, bgPrimary, bgBlack } from '../../../styles';
import { default as InfoBlock } from '../InfoBlock';
export class InfoTabLayout extends Component {
    constructor() {
        super(...arguments)
    }


    render() {
        const { contentTabs, rows } = this.props
        return (
            <View style={[getFlex()]}>
                <InfoBlock rows={rows} />
                <Tabs initialPage={0} tabBarUnderlineStyle={{ height: px2dp(1.5) }}>
                    {
                        Object.entries(contentTabs).map((i, index) => {
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

            </View>
        )
    }
}
