import React from 'react'
import { View, Text, ListItem, Left, Thumbnail, Body, Icon, Input } from 'native-base'
import { row, spaceBtw, fontSizeN, pp_sm, getBorder, getFlex, ml_sm, mt_sm, fontSizeSm, alignItemsC, getRadius, getHeight, ml_xs, getWidth, center, mb_sm, pp_xs, colorBlack } from 'zhilin-rn/styles';
import { bgWhite, colorInfoLight, bgSafe, bgGray, colorPrimary, bgPrimaryLight, bgBlockGray, colorInfo } from 'zhilin-rn/styles';

import BottomBlock from '../BottomBlock';
import Touch from '../Touch';
import PaddingBox from '../PaddingBox';
import FormItem from '../FormItem';
import { QueryIcon } from '../../../icons';


export default class Query extends React.PureComponent {
    constructor() {
        super(...arguments)
        this.state = {

        }
    }
    static defaultProps = {
        showBtn: true
    }

    render() {
        const { query, fa, isQueryShow, showBtn } = this.props
        const { picks, states, inputs } = query
        const cancel = queryCancel.bind(fa)
        const commit = queryCommit.bind(fa)
        const { textFn, toggleQueryShow } = fa
        return (
            isQueryShow ?
                (
                    <View style={[getFlex(), bgGray, getBorder('b')]}>
                        {
                            inputs.map(({ val, myKey, placeholder, cb }, index) => {
                                return <View style={[getHeight(60), row, pp_sm, alignItemsC, bgWhite]}>
                                    <View style={[getBorder(), getFlex(), getHeight(40), getRadius(5), row, alignItemsC]}>
                                        <Icon name="search" type="EvilIcons" style={[colorInfoLight, ml_xs]} />
                                        <Input placeholder={placeholder} value={val} onChangeText={val => { cb(myKey, val) }} />
                                    </View>
                                    <Touch onPress={cancel}>
                                        <Text style={[colorInfoLight, fontSizeN, ml_sm]}>取消</Text>
                                    </Touch>
                                </View>
                            })
                        }
                        {
                            picks.map(({ cb, val, Cp, myKey, title }, index) => {
                                return <FormItem key={index} label={title} Right={
                                    <Cp cb={cb} val={val} myKey={myKey} />
                                } style={[getBorder('t')]} />
                            })
                        }
                        {
                            states.map(({ cb, val, data, myKey, title }, index) => {
                                return <PaddingBox style={[mt_sm, getBorder('tb'), bgWhite]} key={index}>
                                    <Text style={[fontSizeSm, colorInfoLight]}>{title} </Text>
                                    <View style={[row, spaceBtw, { flexWrap: 'wrap' }]}>
                                        {
                                            data.map((i, index) => {
                                                const isActive = val === i[1]
                                                return (
                                                    <Touch outerStyle={[mt_sm]} key={index} onPress={() => { cb(myKey, i[1]) }} style={[getHeight(34), getWidth(100), center, getRadius(5), isActive ? bgPrimaryLight : bgBlockGray]}>
                                                        <Text style={[fontSizeN, isActive ? colorPrimary : colorInfo]}>{i[0]}</Text>
                                                    </Touch>
                                                )
                                            })
                                        }
                                    </View>
                                </PaddingBox>
                            })
                        }
                        <BottomBlock title="查询" onPress={commit} />
                    </View>
                ) : (
                    showBtn && <Touch onPress={toggleQueryShow} style={[row, getHeight(40), { backgroundColor: '#F7F7F7' }, alignItemsC, pp_xs, getBorder('b')]}>
                        <QueryIcon style={[colorInfoLight]} />
                        <Text numberOfLines={1} style={[fontSizeN, colorBlack, ml_xs]}>{textFn()}</Text>
                    </Touch>
                )

        )
    }

    static config(query, textFn) {
        this.queryCommit = queryCommit.bind(this)
        this.textFn = textFn.bind(this)
        this.toggleQueryShow = toggleQueryShow.bind(this)
        this.queryCancel = queryCancel.bind(this)
        const setItem = _setItem.bind(this)
        const keys = Object.keys(query)
        keys.forEach(k => {
            const cb = setItem(k)
            query[k].forEach(q => q.cb = cb)
        })

        this.state = {
            ...this.state,
            query,
            queryResult: backup(query),
            isQueryShow: false,
        }
    }
}


function _setItem(type) {
    return (myKey, val) => {
        const { query } = this.state
        const target = query[type].find(t => t.myKey === myKey)
        target.val = val

        this.setState({
            query: Object.assign({}, query),
        }, () => {
            if (target.fn && typeof fn === 'function') {
                fn()
            }
        })

    }
}

function queryCommit() {
    const { query } = this.state
    this.setState({
        queryResult: backup(query),
        isQueryShow: false
    })
}

function queryCancel() {
    const { isQueryShow, queryResult, query } = this.state
    this.setState({
        isQueryShow: !isQueryShow,
        query: cover(queryResult, query)
    })
}
function toggleQueryShow() {
    const { isQueryShow } = this.state
    this.setState({
        isQueryShow: !isQueryShow,
    })
}
function cover(from, to) {
    const keys = Object.keys(to)
    keys.forEach(k => {
        const value = to[k]//某一项
        value.forEach(v => {
            if (from.hasOwnProperty(k)) {
                v.val = from[k]
            }
        })
    })
    return to
}

function backup(from) {
    const res = {}
    const keys = Object.keys(from)
    keys.forEach(k => {
        const value = from[k] //某一项
        value.forEach(({ val, myKey }) => {
            res[myKey] = val
        })
    })
    return res
}