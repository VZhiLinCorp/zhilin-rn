import React from 'react'
import { Icon, NativeBase } from 'native-base';

export function MarkerIcon(p: NativeBase.Icon): any;
export function MessageIcon(p: NativeBase.Icon): any;

export function ChevronRightIcon(p: NativeBase.Icon): any;

interface ChevronProps extends NativeBase.Icon {
    dir: "left" | "right" | "top" | "bottom"
}
export class Chevron extends React.Component<ChevronProps> {
}
