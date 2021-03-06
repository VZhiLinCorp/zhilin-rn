import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import types from 'prop-types'
import Blank from '../Blank';
import { alignItemsC, getFlex, row, pp_sm, bgPrimary, getWidth, bgInfoLight, pb_sm, getSquare, mb_md } from '../../styles';
// import { Creators } from '../index';

export default class MyList extends React.Component {
    constructor() {
        super(...arguments)
        this.state = {
        }
    }
    static propTypes = {
        data: types.array,
        item: types.func
    }
    static defaultProps = {
        Item: () => <Text>缺少Item</Text>,
        data: []
    }
    render() {
        const { Item, data } = this.props
        return (
            !!data.length ? data.map(Item) : <Blank style={[mb_md]} />

        )
    }

}
