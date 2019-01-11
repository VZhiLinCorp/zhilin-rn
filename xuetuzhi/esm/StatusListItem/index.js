import React from 'react'
import { View, Text } from 'react-native'
import { bgWhite, fontSizeXs, listItemTitle, getFlex, row, pp_sm, spaceBtw, mt_xs, getBorder, pv_n, colorInfoLight, alignItemsC, mr_xs, mt_sm } from '../../../styles';
import { IconFont } from 'zhilin-rn'
import { StatusBadge, PaddingBox } from '../index';
export default class StatusListItem extends React.Component {
    constructor() {
        super(...arguments);

    }
    render() {
        const { bottomRows = [], status, title, onPress, renderStatus } = this.props;
        const textStyle = [colorInfoLight, fontSizeXs]
        return (
            <PaddingBox style={[bgWhite, pp_sm, pv_n, getBorder('b')]} onPress={onPress}>
                <View style={[row, spaceBtw, { alignItems: 'flex-start' }]}>
                    <Text style={[listItemTitle, getFlex(1)]} numberOfLines={1}>{title}</Text>
                    {
                        renderStatus ? renderStatus() : (status && <StatusBadge text={status} />)
                    }
                </View>
                {
                    bottomRows.map((r,rIndex) => {
                        return (
                            <View style={[row, spaceBtw, mt_sm]} key={rIndex}>
                                {
                                    r.map((c,cIndex) => {
                                        return(
                                            <View style={[row, alignItemsC]}>
                                                <IconFont name={rIndex<1?'time':'address'} style={[colorInfoLight, fontSizeXs, mr_xs]} />
                                                <Text style={textStyle} key={cIndex}>{c}</Text>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                        )
                    })
                }
            </PaddingBox>
        )
    }


}


