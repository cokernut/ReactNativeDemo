import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import Base from './source/base/Base';

export default class Root extends Component {
  render() {
    return (
      <Base />
    )
  }
}

/**  
 * 注册应用(registerComponent)后才能正确渲染
 * 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
 * 注意，这里用引号括起来的'HelloWorldApp'必须和你init创建的项目名一致
 */
AppRegistry.registerComponent('ReactNativeDemo', () => Root);