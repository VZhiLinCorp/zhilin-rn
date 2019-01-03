
---

## 依赖安装

运行项目根目录下的install.sh


## 热更新流程
- code-push客户端，[文档](https://github.com/Microsoft/code-push/blob/master/cli/README.md)
```shell
npm install -g code-push-cli
# 登陆并且输入token
code-push login http://热更新的地址
```
- code-push plugin，[文档](https://github.com/Microsoft/react-native-code-push/blob/master/README.md)  
  [ios配置](https://github.com/Microsoft/react-native-code-push/blob/master/docs/setup-ios.md)  
  [安卓配置](https://github.com/Microsoft/react-native-code-push/blob/master/docs/setup-android.md)  
  [ios灰度配置](https://github.com/Microsoft/react-native-code-push/blob/master/docs/multi-deployment-testing-ios.md)  
  [安卓灰度配置](https://github.com/Microsoft/react-native-code-push/blob/master/docs/multi-deployment-testing-android.md)
- 热更新流程
1. ios
```shell
# 发布热更新包

#灰度测试
npm run release-ios
#正式环境
npm run release-ios-pro
```
打开xCode, 找到Product>Scheme>Edit Scheme, 点击左侧Run,更改Build Configuration。其中Staging代表灰度测试，Release代表正式环境   
然后Product>Archive分别打包出测试包和正式包。正式包用于第一次上架，测试包用来测试灰度热跟新。  
代码更改后需要热跟新：
```shell
npm run release-ios
```
在测试包上检查是否正常，如果正常，推送到正式环境
```shell
npm run promote-ios
```

2. android
```shell
# 发布热更新包

#灰度测试
npm run release-android
#正式环境
npm run release-android-pro
```
进入android目录，
 ```shell
 # 灰度测试包
./gradlew assembleReleaseStaging
 # 正式包
./gradlew assembleRelease
```
代码更改后需要热跟新：
```shell
npm run release-android
```
在测试包上检查是否正常，如果正常，推送到正式环境
```shell
npm run promote-android
```
