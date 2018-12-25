import React from 'react'
import DatePicker from 'react-native-datepicker'

import { colorPlaceholder, fontSizeN, colorPrimary, COLOR_PRIMARY } from '../../styles';
import { Chevron } from '../../icons';
import { Text } from 'native-base';

export default class MyDatePicker extends React.Component {
    constructor() {
        super(...arguments)
    }
    render() {
        const {
            style = [],
            mode = 'datetime',
            placeholder = '请选择',
            format = 'YYYY-MM-DD HH:mm',
            confirmBtnText = '确定',
            cancelBtnText = '取消',
            androidMode = 'spinner',
            locale = "zh",
            customStyles = {
                dateInput: {
                    borderWidth: 0,
                    flexDirection: 'row',
                    justifyContent: 'flex-end'
                },
                dateText: {
                    ...fontSizeN
                },
                placeholderText: {
                    ...fontSizeN,
                    ...colorPlaceholder
                },
                btnTextConfirm: colorPrimary
            },
            onDateChange,
            date,
            iconDirection,
            iconComponent,
        } = this.props
        const icon = iconComponent ? iconComponent : <Chevron dir={iconDirection} />
        return (
            <DatePicker
                style={style}
                date={date}
                mode={mode}
                placeholder={placeholder}
                format={format}
                confirmBtnText={confirmBtnText}
                cancelBtnText={cancelBtnText}
                androidMode={androidMode}
                iconComponent={icon}
                customStyles={customStyles}
                onDateChange={onDateChange}
                locale={locale}
            />
        )
    }
}