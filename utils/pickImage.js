import { Alert, Platform } from 'react-native'

var ImagePicker = require('react-native-image-picker');

export function pickImage(cb, options = {}) {
    let _options = {
        title: '选择图片',
        cancelButtonTitle: '取消',
        takePhotoButtonTitle: '拍照',
        chooseFromLibraryButtonTitle: '从图库挑选',
        storageOptions: {
            skipBackup: true,
            path: 'images'
        },
        quality: 0.99,
        ...options
    }
    ImagePicker.showImagePicker(_options, (response) => {
        console.log('Response = ', response);
        if (response.error === 'Camera permissions not granted') {
            Alert.alert(
                '没有权限',
                '相机权限未开启，请到设置中开启！'
            );
        }
        if (response.didCancel) {
            console.log('User cancelled image picker');
        }
        else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
            Alert.alert(
                '发生未知错误',
            )
        }
        else {
            // 如果是iOS，没有fileName
            if (response.uri && Platform.OS === 'android') {
                // 从uri截取fileName
                const temp = response.uri.split('/');
                response.fileName = temp[temp.length - 1];
                // 去掉 file://
                response.uri = response.uri.substring(7);
            }
            const { data, fileName } = response

            cb(data, fileName)
        }
    })
}

