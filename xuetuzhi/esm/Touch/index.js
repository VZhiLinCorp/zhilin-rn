import React from 'react'
import { TouchableHighlight, View} from 'react-native'



export default class Touch extends React.Component {
    constructor() {
        super(...arguments)
    }
    render() {
        const { onPress } = this.props
        return (
            <TouchableHighlight underlayColor="#eee"  {...this.props}>
                <View>
                    {
                        React.Children.map(this.props.children, c => React.cloneElement(c))
                    }
                </View>
            </TouchableHighlight>
        )
    }
}
