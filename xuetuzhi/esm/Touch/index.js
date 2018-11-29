import React from 'react'
import { TouchableHighlight, View} from 'react-native'
import { getFlex } from 'zhilin-rn/styles';



export default class Touch extends React.Component {
    constructor() {
        super(...arguments)
    }
    render() {
        const { onPress } = this.props
        return (
            <TouchableHighlight underlayColor="#eee" onPress={onPress ? onPress : () => { }} style={[getFlex()]}>
                <View {...this.props}>
                    {
                        React.Children.map(this.props.children, c => React.cloneElement(c))
                    }
                </View>
            </TouchableHighlight>
        )
    }
}
