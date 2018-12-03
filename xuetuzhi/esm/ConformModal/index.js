import React from 'react'
import { TouchableHighlight, View } from 'react-native'
import { getFlex, center, bgDanger, bgWhite, getWidth, mb_md, getMorP, row, getHeight, bgPrimary, colorWhite, getRadius, fontSizeN, colorBlack, getBorder, pv_md, pp_n } from 'zhilin-rn/styles';

import Modal from 'react-native-modal'
import { Text, Button } from 'native-base';
import { screenW, autobind } from 'zhilin-rn/utils';

@autobind
export default class ConformModal extends React.Component {
    constructor() {
        super(...arguments)
        this.state = {
        }
    }
    static defaultProps = {
        onComfirm: () => { },
        onToggle: () => { },
        renderContent: () => { },
        width: screenW * .8,
        isVisible: false,
        contentStyle: [],
        confirmText: ''
    }
    getFn(status) {
        const { onToggle } = this.props
        return () => {
            onToggle(status)
        }
    }
    _onComfirm() {
        const { onComfirm, onToggle } = this.props
        onComfirm()
        onToggle(false)
    }
    render() {
        const { contentStyle, isVisible = false, renderContent, width, confirmText } = this.props
        const { _onComfirm, getFn } = this
        return (
            <Modal ref={el => this.modal = el}
                isVisible={isVisible}
                onBackdropPress={getFn(false)}
                // onBackdropPress={() => this.setState({ visibleModal: false })}
                style={[center]}
                // scrollTo={this.handleScrollTo}
                // scrollOffset={this.state.scrollOffset}
                scrollOffsetMax={400 - 300} // content height - ScrollView height
            >
                <View style={[bgWhite, getWidth(width), getMorP(0, 80, 'b'), getRadius(5), { overflow: 'hidden' }]}>
                    <View style={[pv_md, pp_n, ...contentStyle]}>
                        {
                            renderContent()
                        }
                    </View>
                    <View style={[row, getBorder('t')]}>
                        <Button transparent style={[getHeight(44), getFlex(), center]} onPress={getFn(false)}>
                            <Text style={[fontSizeN, colorBlack]}>
                                取消
                            </Text>
                        </Button>
                        <Button style={[getHeight(44), getFlex(), center, getRadius(0)]} onPress={_onComfirm}>
                            <Text style={[colorWhite, fontSizeN]}>
                                {
                                    confirmText ? confirmText : 确定
                                }
                            </Text>
                        </Button>
                    </View>
                </View>
            </Modal>
        )
    }
}
