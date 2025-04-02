import { FunctionComponent, ReactElement, ReactNode } from "react";

export enum CardVariants {
    outlined = 'outlined',
    primary = 'primary'
}

interface ICard {
    width: string;
    height?: string;
    variant?: CardVariants;
    onClick?: () => void;
    children?: ReactElement | ReactNode;
}

const Card: FunctionComponent<ICard> =
    ({
        width,
        height,
        variant,
        children
    }) => {

        return (
            <div style={{
                width,
                height,
                border: variant === CardVariants.outlined ? '1px solid #333' : '1px solid transparent',
                backgroundColor: variant === CardVariants.primary ? '#11ffdf' : '#f1f1f1',
                borderRadius: '.5em',
                padding: '.5em'
            }}>{children}</div>
        );
    }

export default Card;