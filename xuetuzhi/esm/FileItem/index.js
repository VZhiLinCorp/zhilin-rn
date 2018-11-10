import React, { Component } from "react";
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { fontSizeN, getFlex, row, getBorder, fontSizeXs, alignItemsC, mp_xs, ml_xs, p_xs, COLOR_PRIMARY, COLOR_LIGHT, fontSizeSm } from "../../../styles";
import { colorInfoLight } from "../../../styles";
import { Touch, ProgressCircle, PaddingBox } from "../index";

export default class FileListItem extends Component {
    constructor() {
        super(...arguments);

    }

    renderInitialIcon(progress, download) {
        return (
            <Touch onPress={download} style={[p_xs]}>
                <ProgressCircle progress={progress} size={20} showIcon icon={
                    <Icon name='arrow-down' color={COLOR_LIGHT} size={16} style={{ marginTop: -1, marginLeft: -1 }} />
                } color={COLOR_LIGHT} />
            </Touch>
        )


    }
    renderDoneIcon(progress, color) {
        return <Touch style={[p_xs]}>
            <ProgressCircle progress={progress} size={20} thickness={0} showIcon icon={
                <Icon name='check' color={color} size={16} style={{ marginTop: -1, marginLeft: -1 }} />
            } color={color} />
        </Touch>
    }
    static renderCancelIcon(progress, fn, color) {
        return (
            <Touch onPress={fn} style={[p_xs]}>
                <ProgressCircle progress={progress} size={20} showIcon icon={
                    <View style={{ width: 5, height: 5, backgroundColor: color }}></View>
                } color={color} />
            </Touch>
        )

    }
    render() {
        const { onPress, file, cancel, download, downloadStatus, progress, FileIcon, color } = this.props
        const { FileExtension, fileName, FileSizeString } = file

        let DownloadBtn = ''
        if (downloadStatus === 'initial') {
            DownloadBtn = this.renderInitialIcon(progress, download)
        } else if (downloadStatus === 'done') {
            DownloadBtn = this.renderDoneIcon(progress, color)
        } else {
            DownloadBtn = FileListItem.renderCancelIcon(progress, cancel, color)
        }

        return (
            <PaddingBox onPress={onPress} style={[getBorder('b')]}>
                <View style={[row, getFlex(1), alignItemsC]} >
                    <FileIcon type={FileExtension} />
                    <View style={[getFlex(1), mp_xs]}>
                        <Text style={[fontSizeN]} numberOfLines={1}>{fileName}</Text>
                        <View style={[row, alignItemsC]}>
                            <Icon name="database" style={[fontSizeSm, colorInfoLight]} />
                            <Text style={[ml_xs, fontSizeXs, colorInfoLight]} numberOfLines={1}>{FileSizeString}</Text>
                        </View>
                    </View>
                    <View style={[row]}>
                        {
                            DownloadBtn
                        }
                    </View>
                </View>
            </PaddingBox>

        );
    }

}

