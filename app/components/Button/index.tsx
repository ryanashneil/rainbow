import { Button, IButton } from "@chakra-ui/core";

export enum ButtonAppearance {
    PRIMARY = "primary",
    SECONDAY = "secondary"
}

interface ICustomButton extends IButton {
    appearance: ButtonAppearance;
}

export default ({ appearance, children, ...props }: ICustomButton) => {
    let variantColor: string;
    switch (appearance) {
        case ButtonAppearance.PRIMARY:
            variantColor = "teal";
            break;
        case ButtonAppearance.SECONDAY:
            variantColor = "red";
            break;
        default:
    }

    return (
        <Button
            variantColor={variantColor}
            fontWeight={800}
            minWidth={200}
            {...props}
        >
            {children}
        </Button>
    );
};
