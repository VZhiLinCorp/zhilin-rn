import React, { Component } from 'react'
import { View, Text, ScrollView, StatusBar } from 'react-native'
import { fontSizeN, getFlex, listItemTitle, row, alignItemsC, flexEnd, COLOR_BLACK, COLOR_PLACEHOLDER, jc_c, getHeight, spaceBtw, pp_md, colorInfoLight, getBorder, pv_sm, m_0, pv_xs } from 'zhilin-rn/styles';
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
            _value: '',
            oldValue: ''
        }
    }
    static defaultProps = {
        onPress: () => { },
        valueName: 'value',
        labelName: 'label',
        cancelable: true
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

    //选择确定事件
    _handleSetChoose(ok) {
        const { state, props } = this
        const { onPress, } = props
        const { _value, oldValue, visibleModal } = state

        return () => {

            if (ok) {
                onPress(_value)
                this.setState({
                    oldValue: _value
                })
            }
            this.setState({
                visibleModal: !visibleModal,
                _value: oldValue
            })
        }

    }
    setValue(_value, oldValue, checked) {
        if (this.props.cancelable) {
            this.setState({ _value: (checked ? null : _value), oldValue })
        } else {
            if (!checked) {
                this.setState({ _value, oldValue })
            }
        }
    }
    render() {
        const { setValue, state, _handleSetChoose, props } = this
        const { _value } = state
        const { left, iconColor, placeholderColor, selectedColor, data = [], valueName, labelName, value, dir } = props
        _iconColor = { color: iconColor ? iconColor : COLOR_LIGHT }
        _placeholderColor = { color: placeholderColor ? placeholderColor : COLOR_PLACEHOLDER }
        _selectedColor = { color: selectedColor ? selectedColor : COLOR_BLACK }
        const target = data.find(d => d[valueName] == value) || {}
        return (
            <View style={[getFlex()]}>
                <Touch onPress={_handleSetChoose()} style={[row, left ? {} : flexEnd, alignItemsC]} outerStyle={[getFlex(), jc_c]}>
                    <Text>
                        {
                            left && <QueryIcon />
                        }
                    </Text>
                    <Text style={[_selectedColor, fontSizeN, { flexShrink: 1 }, jc_c]} numberOfLines={1}>{target[labelName] || '请选择'}</Text>
                    <Text>
                        {
                            (!left) && <Chevron dir={dir} />
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
                    useNativeDriver={true}
                >
                    <StatusBar backgroundColor="rgba(0,0,0,0.7)" barStyle="light-content" />
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
                                        const disabled = !!item.IsDisabled;
                                        return (
                                            <Touch disabled={disabled} style={[bgWhite, getHeight(HEIGHT), row, alignItemsC]} key={item[valueName]} onPress={() => setValue(itemValue, _value, checked)} >
                                                <View style={{ justifyContent: 'center', paddingRight: 12, paddingLeft: 12 }}  >
                                                    <CheckBox checked={checked} />
                                                </View>
                                                <View style={{ flex: 1 }}>
                                                    <View >
                                                        <Text style={[listItemTitle, disabled && colorInfoLight]} numberOfLines={1}>{item[labelName]}</Text>
                                                    </View>
                                                </View>
                                            </Touch>
                                        );
                                    })
                                }
                            </View>
                        </ScrollView>
                    </View>
                </Modal>
            </View>
        )
    }
}