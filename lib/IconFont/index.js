import createIconSet from 'react-native-vector-icons/lib/create-icon-set';
import json from '../styles/fonts/iconfont.json';
const Icon = createIconSet(json, 'iconfont', 'iconfont.ttf');

// export {Icon};
// export default Icon;

export class IconFont extends Icon {  
  static defaultProps = Object.assign({}, Icon.defaultProps, {
    size: 18,
  });
}