import React, { Component } from 'react'
import { View, StyleSheet, Text, ScrollView, TouchableHighlight, Image, ListView } from 'react-native'
import { px2dp, fontSizeN, getFlex, listItemTitle, BORDER_COLOR, COLOR_INFO, row, alignItemsC, flexEnd, fontSizeBig, fontSizeMd, ml_sm, mp_sm, mr_sm, getMorP, COLOR_BLACK, COLOR_PLACEHOLDER, bgDanger, bgSafe, jc_c, getHeight, spaceBtw, pv_n, pp_n, pp_md, colorInfoLight, getBorder, p_0, alignSelfC, p_md, pv_sm, m_0, pv_xs } from 'zhilin-rn/styles';
import { colorBlack, bgGray, bgWhite, colorPrimary, } from 'zhilin-rn/styles';
import Modal from "react-native-modal";
import { COLOR_LIGHT } from 'zhilin-rn/styles';
import { autobind } from 'zhilin-rn/utils';
import { Chevron, QueryIcon } from '../../../icons';
import Touch from '../Touch';
import CheckBox from '../CheckBox';
const HEIGHT = 42
@autobind
export default class SingleSelect extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            visibleModal: false,
            _value: ''
        }

    }

    static getDerivedStateFromProps({ value }, { _value }) {
        if (_value === '') {
            return {
                _value: value
            }
        }
        return {}
    }
    handleOnScroll = event => {
        this.setState({
            scrollOffset: event.nativeEvent.contentOffset.y
        });
    };

    handleScrollTo = p => {
        if (this.scrollViewRef) {
            this.scrollViewRef.scrollTo(p);
        }
    };
    static defaultProps = {
        onPress: () => { },
        valueName: 'value',
        labelName: 'label'
    }

    //选择确定事件
    _handleSetChoose(ok) {
        const { setState, state, props } = this
        const { data, onPress, valueName, labelName, } = props
        const { _value, visibleModal } = state

        return () => {

            if (ok) {
                onPress(_value)
            }
            this.setState({
                visibleModal: !visibleModal,
            })
        }

    }
    setValue(_value) {
        this.setState({ _value })
    }
    render() {
        const { setValue, state, _handleSetChoose, props } = this
        const { _value } = state
        const { left, iconColor, placeholderColor, selectedColor, data, valueName, labelName, value } = props
        _iconColor = { color: iconColor ? iconColor : COLOR_LIGHT }
        _placeholderColor = { color: placeholderColor ? placeholderColor : COLOR_PLACEHOLDER }
        _selectedColor = { color: selectedColor ? selectedColor : COLOR_BLACK }
        const target = data.find(d => {
            return d[valueName] == value
        }) || {}
        return (
            <View style={[getFlex()]}>
                <Touch onPress={_handleSetChoose()} style={[row, left ? {} : flexEnd,alignItemsC]} outerStyle={[getFlex(), jc_c]}>
                    <Text>
                        {
                            left && <QueryIcon />
                        }
                    </Text>
                    <Text style={[_selectedColor, fontSizeN, { flexShrink: 1 },jc_c]} numberOfLines={1}>{target[labelName] || '请选择'}</Text>
                    <Text>
                        {
                            (!left) && <Chevron dir="right" />
                        }
                    </Text>
                </Touch>
                <Modal ref={el => this.modal = el}
                    isVisible={this.state.visibleModal === true}
                    onBackdropPress={_handleSetChoose()}
                    style={[flexEnd, m_0]}
                    scrollTo={this.handleScrollTo}
                    scrollOffset={this.state.scrollOffset}
                    scrollOffsetMax={400 - 300} // content height - ScrollView height
                >

                    <View style={[bgWhite, getHeight(300)]}>

                        <View style={[row, alignItemsC, getHeight(HEIGHT), spaceBtw, getBorder('b')]}>
                            <Touch onPress={_handleSetChoose()}>
                                <Text style={[colorInfoLight, fontSizeN, pp_md, pv_sm]}>取消</Text>
                            </Touch>
                            <Text style={[colorBlack, fontSizeN]}>请选择</Text>
                            <Touch onPress={_handleSetChoose(true)}>
                                <Text style={[colorPrimary, fontSizeN, pp_md, pv_sm]}>确定</Text>
                            </Touch>
                        </View>
                        <ScrollView
                            ref={ref => (this.scrollViewRef = ref)}
                            onScroll={this.handleOnScroll}
                            scrollEventThrottle={16}
                            style={[bgGray]}
                        >
                            <View style={[pv_xs, bgWhite]}>
                                {
                                    data.map(item => {
                                        const itemValue = item[valueName]
                                        let checked = itemValue == _value
                                        return <Touch style={[bgWhite, getHeight(HEIGHT), row, alignItemsC]} key={item[valueName]} onPress={() => setValue(checked ? null : itemValue)} >
                                            <View style={{ justifyContent: 'center', paddingRight: 12, paddingLeft: 12 }}  >
                                                <CheckBox checked={checked} />
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <View >
                                                    <Text style={[listItemTitle]} numberOfLines={1}>{item[labelName]}</Text>
                                                </View>
                                            </View>

                                        </Touch>
                                    })
                                }
                            </View>
                        </ScrollView>

                    </View>
                </Modal>

            </View >
        )
    }
}





