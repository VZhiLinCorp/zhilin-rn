import React, { Component } from "react";
import {Text, View} from 'react-native'
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
                    <Icon name='arrow-down' style={{ fontSize: 16, color: COLOR_LIGHT, marginTop: -1, marginLeft: -1 }} />
                } color={COLOR_LIGHT} />
            </Touch>
        )


    }
    renderDoneIcon(progress) {
        return <Touch style={[p_xs]}>
            <ProgressCircle progress={progress} size={20} thickness={0} showIcon icon={
                <Icon name='check' style={{ fontSize: 16, color: COLOR_PRIMARY, marginTop: -1, marginLeft: -1 }} />
            } color={COLOR_PRIMARY} />
        </Touch>
    }
    static renderCancelIcon(progress, fn) {
        return (
            <Touch onPress={fn} style={[p_xs]}>
                <ProgressCircle progress={progress} size={20} showIcon icon={
                    <View style={{ width: 5, height: 5, backgroundColor: COLOR_PRIMARY }}></View>
                } color={COLOR_PRIMARY} />
            </Touch>
        )

    }
    render() {
        const { onPress, file, cancel, download, downloadStatus, progress, FileIcon } = this.props
        const { FileExtension, fileName, FileSizeString } = file

        let DownloadBtn = ''
        if (downloadStatus === 'initial') {
            DownloadBtn = this.renderInitialIcon(progress, download)
        } else if (downloadStatus === 'done') {
            DownloadBtn = this.renderDoneIcon(progress)
        } else {
            DownloadBtn = FileListItem.renderCancelIcon(progress, cancel)
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

