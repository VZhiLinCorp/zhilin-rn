import { DatePickerProps } from 'react-native-datepicker'
import react from 'react'


interface MyDatePickerProps extends DatePickerProps {
    style: array;
    iconDirection: "left" | "right" | "up" | "down"
}

declare class MyDatePicker extends react.Component<MyDatePickerProps> {

}
export default MyDatePicker