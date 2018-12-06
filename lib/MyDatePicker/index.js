import React from 'react'
import DatePicker from 'react-native-datepicker'

import { colorPlaceholder,fontSizeN } from '../../styles';
import { Chevron } from '../../icons';

export default class Template extends React.Component {
    constructor() {
        super(...arguments)
    }
    render() {
        const {
            style = [],
            mode = 'datetime',
            placeholder = '请选择',
            format = 'YYYY-MM-DD HH:mm',
            minDate = '2018-05-01',
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
                }
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
                minDate={minDate}
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