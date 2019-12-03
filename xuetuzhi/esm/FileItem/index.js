import React, { Component } from "react";
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import { fontSizeN, getFlex, row, getBorder, fontSizeXs, spaceBtw, alignItemsC, mp_xs, pt_xs, ml_xs, p_xs, COLOR_PRIMARY, COLOR_LIGHT, fontSizeSm, bgWhite } from "../../../styles";
import { colorInfoLight } from "../../../styles";
import { Touch, ProgressCircle, PaddingBox } from "../index";
import { autobind } from "zhilin-rn/utils";
const DOWNLOAD_URL_KEY = 'DownloadUrl'
@autobind
export default class FileListItem extends Component {
    constructor() {
        super(...arguments);

    }

    download(fileUserId, file, DownloadUrl, realExtension, myDownload, updateFile) {
        const { downloadTasks, removeFile } = this.props

        return () => {
            const task = myDownload(DownloadUrl, realExtension)
            updateFile({ id: fileUserId, realExtension, downloadPath: DownloadUrl, task, ...file })
            task.progress((received, total) => {
                updateFile({ id: fileUserId, received, total })
            }).then((resp) => {

                console.log('====================================');
                const path = resp.data
                updateFile({ id: fileUserId, path, ...file })
                console.log('====================================');

            }).catch((err) => {
                FileListItem.cancel(fileUserId, downloadTasks, removeFile)()
            })
        }
    }

    static cancel(fileUserId, downloadTasks, removeFile) {
        return () => {
            const task = downloadTasks[fileUserId]
            task && task.cancel((err) => {
            })
            removeFile([fileUserId])
        }
    }
    renderInitialIcon(progress, download) {
        return (
            <Touch onPress={download} style={[p_xs]}>
                <ProgressCircle progress={progress || 0} size={20} showIcon icon={
                    <Icon name='arrow-down' color={COLOR_LIGHT} size={16} style={{ marginTop: -1, marginLeft: -1 }} />
                } color={COLOR_LIGHT} />
            </Touch>
        )
    }
    renderDoneIcon(progress) {
        return <Touch style={[p_xs]}>
            <ProgressCircle progress={progress || 0} size={20} thickness={0} showIcon icon={
                <Icon name='check' color={COLOR_PRIMARY} size={16} style={{ marginTop: -1, marginLeft: -1 }} />
            } color={COLOR_PRIMARY} />
        </Touch>
    }
    static renderCancelIcon(progress, fn) {
        return (
            <Touch onPress={fn} style={[p_xs]}>
                <ProgressCircle progress={progress || 0} size={20} showIcon icon={
                    <View style={{ width: 5, height: 5, backgroundColor: COLOR_PRIMARY }}></View>
                } color={COLOR_PRIMARY} />
            </Touch>
        )

    }
    render() {
        const { props, download } = this
        const { routeName, file, FileIcon, userId, files, navigation, updateFile, downloadTasks, myDownload, removeFile, showDownLoad = true, checkStudents } = props
        const { FileExtension, FileNameWithoutExt, FileSizeString, FileId } = file
        const DownloadUrl = file[DOWNLOAD_URL_KEY]
        const realExtension = DownloadUrl&&DownloadUrl.slice(DownloadUrl.lastIndexOf('.') + 1)

        const fileUserId = FileId + userId
        const target = files[fileUserId]
        let progress = 0
        let DownloadBtn = this.renderInitialIcon(progress, download(fileUserId, file, DownloadUrl, realExtension, myDownload, updateFile, FileId))
        let openUrl = DownloadUrl
        //文件存在
        if (target && (target.userId === userId)) {
            const { received, total, path, id } = target
            progress = (received / total) || 0
            if (path) {
                //已经下载完成
                openUrl = target.path
                DownloadBtn = this.renderDoneIcon(progress)
            } else {
                //下载中
                DownloadBtn = FileListItem.renderCancelIcon(progress, FileListItem.cancel(fileUserId, downloadTasks, removeFile))
            }
        }
        const onPress = () => {
            navigation.navigate({ routeName, params: { type: realExtension, path: openUrl, fileName: FileNameWithoutExt, FileId: FileId, checkStudents: checkStudents } })
        }





        return (
            <PaddingBox onPress={onPress} style={[getBorder('b'), bgWhite]}>
                <View style={[row, getFlex(1), alignItemsC]} >
                    <FileIcon type={FileExtension} />
                    <View style={[getFlex(1), mp_xs]}>
                        <Text style={[fontSizeN]} numberOfLines={1}>{FileNameWithoutExt}</Text>
                        {
                            file.ViewCount>=0 || file.ViewCount>=0 ?
                                <View style={[row, spaceBtw, pt_xs]}>
                                    <Text style={[ml_xs, fontSizeXs, colorInfoLight]} numberOfLines={1}>查看时长:{file.ViewDuration}分钟</Text>
                                    <Text style={[ml_xs, fontSizeXs, colorInfoLight]} numberOfLines={1}>查看次数:{file.ViewCount}次</Text>
                                </View> :
                                <View style={[row, alignItemsC]}>
                                    <Icon name="database" style={[fontSizeSm, colorInfoLight]} />
                                    <Text style={[ml_xs, fontSizeXs, colorInfoLight]} numberOfLines={1}>{FileSizeString}</Text>
                                </View>
                        }
                    </View>
                    <View style={[row]}>
                        {
                            showDownLoad&&DownloadBtn
                        }
                    </View>
                </View>
            </PaddingBox>

        );
    }

}

