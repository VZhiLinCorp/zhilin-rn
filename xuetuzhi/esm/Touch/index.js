import React from 'react'
import { TouchableHighlight, View } from 'react-native'
import { getFlex } from 'zhilin-rn/styles';



export default class Touch extends React.Component {
    constructor() {
        super(...arguments)
    }
    render() {
        const { style = [], outerStyle = [], ...props } = this.props
        return (
            <TouchableHighlight underlayColor="#eee" {...props} style={[...outerStyle]}>
                <View style={style}>
                    {
                        React.Children.map(this.props.children, c => React.cloneElement(c))
                    }
                </View>
            </TouchableHighlight>
        )
    }
}
