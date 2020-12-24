import react from 'react'

interface Props {
    text: string;
    showImage: boolean,
    textStyle: array,
    style: array,
    renderImage:Function,
    onPress:Function
}

declare class Blank extends react.Component<Props> {

}
export default Blank