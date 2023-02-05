
import { ReactNode } from "react";
import { SmallText, MediumText, LargeText, ExtraLargeText } from "./styles"

export interface TextProps {
    size: 'S' | 'M' | 'L' | 'XL',
    weight: 'normal' | 'light' | 'bold' | 'bolder',
    children: ReactNode
}

const VARIANTS_FROM_SIZE = {
    S: SmallText,
    M: MediumText,
    L: LargeText,
    XL: ExtraLargeText
}

const WEIGHT_VARIANTS = {
    normal: '400',
    light: '300',
    bold: '500',
    bolder: '700'
}

export default function Text({ size, weight, children }: TextProps) {

    const SizedText = VARIANTS_FROM_SIZE[size];
    const fontWeight = WEIGHT_VARIANTS[weight]

    return <SizedText
        variant="caption"
        sx={{
            fontWeight: fontWeight
        }} >
        {children}
    </SizedText>
}

Text.defaultProps = {
    size: 'M',
    weight: 'normal'
}