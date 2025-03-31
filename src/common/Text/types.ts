import * as React from 'react';

export interface TextProps {
    id?: string,
    tag?: string
    weight?: string,
    size?: string,
    color?: string,
    transform?: string,
    lineHeight?: string,
    className?: string,
    children: React.ReactNode,
    dataWowDelay?: string,
    type?: string
}