import React, { Component } from 'react'
import { View, StyleSheet, Text, ScrollView, TouchableHighlight, Image, ListView } from 'react-native'
import { px2dp, fontSizeN, getFlex, listItemTitle, BORDER_COLOR, COLOR_INFO, row, alignItemsC, flexEnd, fontSizeBig, fontSizeMd, ml_sm, mp_sm, mr_sm, getMorP, COLOR_BLACK, COLOR_PLACEHOLDER } from 'zhilin-rn/styles';
import { colorBlack, bgGray, bgWhite, colorPrimary, } from 'zhilin-rn/styles';
import Modal from "react-native-modal";
import { COLOR_LIGHT } from 'zhilin-rn/styles';
import { autobind } from 'zhilin-rn/utils';
import { Chevron, QueryIcon } from '../../../icons';
import Touch from '../Touch';
import CheckBox from '../CheckBox';

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
        if (!_value) {
            return {
                _value: value
            }
        }
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

            let target
            if (ok) {
                target = data.find(d => {
                    return d[valueName] === _value
                }) || {}
                onPress(target[valueName], target[labelName])
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
            return d[valueName] === value
        }) || {}
        return (
            <View style={{ flex: 1, row }}>
                <Touch onPress={_handleSetChoose()} style={[getFlex(), row, alignItemsC, left ? {} : flexEnd]}>
                    {
                        left && <QueryIcon />
                    }
                    <Text style={[_selectedColor, fontSizeN, { flexShrink: 1 }]} numberOfLines={1}>{target[labelName] || '请选择'}</Text>
                    {
                        (!left) && <Chevron dir="right" />

                    }
                </Touch>
                <Modal ref={el => this.modal = el}
                    isVisible={this.state.visibleModal === true}
                    onBackdropPress={_handleSetChoose()}
                    style={styles.bottomModal}
                    scrollTo={this.handleScrollTo}
                    scrollOffset={this.state.scrollOffset}
                    scrollOffsetMax={400 - 300} // content height - ScrollView height
                >

                    <View style={styles.scrollableModal}>

                        <View style={[bgWhite, styles.selShadow, { flexDirection: 'row', height: px2dp(50), alignItems: 'center' }]}>
                            <Touch onPress={_handleSetChoose()} style={[getFlex(0.2), { textAlign: 'center' }]}><Text style={[colorPrimary, fontSizeN, { textAlign: 'center' }]}>取消</Text></Touch>
                            <Text style={[getFlex(0.8), colorBlack, fontSizeN, { textAlign: 'center' }]}>请选择</Text>
                            <Touch onPress={_handleSetChoose(true)} style={[getFlex(0.2), { textAlign: 'center' }]}><Text style={[colorPrimary, fontSizeN, { textAlign: 'center' }]}>确定</Text></Touch>
                        </View>
                        <ScrollView
                            ref={ref => (this.scrollViewRef = ref)}
                            onScroll={this.handleOnScroll}
                            scrollEventThrottle={16}
                            style={[bgGray]}
                        >
                            {
                                data.map(item => {
                                    const itemValue = item[valueName]
                                    let checked = itemValue === _value
                                    return <Touch style={[styles.item, bgWhite, getFlex()]} key={item[valueName]} onPress={() => setValue(isChecked ? '' : itemValue)} >
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
                        </ScrollView>

                    </View>
                </Modal>

            </View >
        )
    }
}

const styles = StyleSheet.create({
    itemTitle: {
        fontSize: px2dp(16),
        marginLeft: px2dp(5),
        color: "#333"
    },
    itemDetail: {
        fontSize: px2dp(24),
        color: "#c6c6c6"
    },
    backColor: {
        backgroundColor: '#f3f5f7'
    },
    itemBackColor: {
        backgroundColor: '#ffffff'
    },
    modalContent: {
        backgroundColor: "white",
        padding: 22,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)"
    },
    bottomModal: {
        justifyContent: "flex-end",
        margin: 0,
    },
    modalBotton: {
        marginTop: px2dp(10)
    },
    scrollableModal: {
        height: 300,
        backgroundColor: 'red'

    },
    scrollableModalContent1: {
        height: 200,
        backgroundColor: "orange",
        alignItems: "center",
        justifyContent: "center"
    },
    scrollableModalContent2: {
        height: 200,
        backgroundColor: "lightgreen",
        alignItems: "center",
        justifyContent: "center"
    },
    item: {
        justifyContent: 'space-between',
        flexDirection: 'row', padding: 5,
        borderBottomColor: BORDER_COLOR,
        borderBottomWidth: 0.5,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 12,
        paddingBottom: 12
    },
    selShadow: {
        borderBottomColor: BORDER_COLOR,
        borderBottomWidth: 0.5,
    }


})