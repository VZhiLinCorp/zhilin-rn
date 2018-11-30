import React from 'react';
import hoistStatics from 'hoist-non-react-statics';
import MyHeader from '../xuetuzhi/esm/MyHeader';

import { View } from 'react-native';




export default (
  headerProps = {}
) => {

  return function wrapWithHeaderComponent(WrappedComponent) {


    class Component extends React.Component {
      static WrappedComponent = WrappedComponent;
      constructor() {
        super(...arguments)
      }
      setWrappedInstance(component) {
        if (component && component._root) {
          this._root = component._root;
        } else {
          this._root = component;
        }
        this.wrappedInstance = this._root;
      }
      render() {

        return (
          <View style={{ flex: 1 }}>
            <MyHeader {...headerProps} />
            <WrappedComponent
              {...this.props}
              ref={this.setWrappedInstance}
            />
          </View>
        );
      }
    }

    return hoistStatics(Component, WrappedComponent);
  };
};
