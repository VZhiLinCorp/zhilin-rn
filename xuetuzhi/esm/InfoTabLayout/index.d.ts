import * as React from 'react';
import { ImageURISource } from 'react-native';

export interface InfoTabLayoutProps {
    contentTabs: object;
}
declare class InfoTabLayout extends React.Component<InfoTabLayoutProps> {
    constructor(props: InfoTabLayoutProps);
    onPressDate(): void;
    onPressCancel(): void;
}
export default InfoTabLayout;
