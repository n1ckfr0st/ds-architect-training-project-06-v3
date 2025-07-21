import styled from "styled-components";
import { Icon, iconsType } from "../icon";

// MAIN INTERFACE

interface IButtonIconProps {
    appearance?: "primary" | "secondary" | "ghost";
    size?: "xl" | "xs";
    disabled?: boolean;
    loading?: boolean;
    icon?: iconsType;
}

// MAIN STYLES

const StyledButtonIcon = styled.button<IButtonIconProps> 
`
    border: 1px solid transparent;
    background: none;
    border-radius: ${(props) => props.theme.borderRadius.mini};
    display: inline-flex;
    flex-direction: row;
    gap: ${(props) => props.theme.spacing.inner.close};
    justify-content: center;
    align-items: center;
    padding: 0;
    transition: ${(props) => props.theme.animation.base};
    &:focus {
        box-shadow: ${(props) => props.theme.focus};
    }
    

// PROPS $ STYLES

    // APPEARANCE PROPS

    ${(props) => props.appearance === "primary" && 
    `
        &:enabled {
            background-color: ${props.theme.colors.bg.interact.green.enabled};
            color: ${props.theme.colors.textIcon.inverted};
        }
        &:hover {
            background-color: ${props.theme.colors.bg.interact.green.hover};
        }
        &:active {
            background-color: ${props.theme.colors.bg.interact.green.active};
        }
        &:focus {
            background-color: ${props.theme.colors.bg.interact.green.focus};
        }
        &:disabled {
            background-color: ${props.theme.colors.bg.interact.green.disabled};
        }
    `}

    ${(props) => props.appearance === "secondary" && 
    `
        &:enabled {
            background-color: ${props.theme.colors.bg.interact.lighWeight.enabled};
            color: ${props.theme.colors.textIcon.interact.enabled};
            border-color: ${props.theme.colors.border.interact.enabled};
        }
        &:hover {
            background-color: ${props.theme.colors.bg.interact.lighWeight.hover};
            color: ${props.theme.colors.textIcon.interact.hover};
            border-color: ${props.theme.colors.border.interact.hover};
        }
        &:active {
            background-color: ${props.theme.colors.bg.interact.lighWeight.active};
            color: ${props.theme.colors.textIcon.interact.active};
            border-color: ${props.theme.colors.border.interact.active};
        }
        &:focus {
            background-color: ${props.theme.colors.bg.interact.lighWeight.focus};
            color: ${props.theme.colors.textIcon.interact.focus};
            border-color: ${props.theme.colors.border.interact.focus};
        }
        &:disabled {
            background-color: ${props.theme.colors.bg.interact.lighWeight.disabled};
            color: ${props.theme.colors.textIcon.interact.disabled};
            border-color: ${props.theme.colors.border.interact.disabled};
        }
    `}
    
    ${(props) => props.appearance === "ghost" && 
    `
        &:enabled {
            background-color: ${props.theme.colors.bg.transparent};
            color: ${props.theme.colors.textIcon.interact.enabled};
        }
        &:hover {
            background-color: ${props.theme.colors.bg.interact.lighWeight.hover};
            color: ${props.theme.colors.textIcon.interact.hover};
        }
        &:active {
            background-color: ${props.theme.colors.bg.interact.lighWeight.active};
            color: ${props.theme.colors.textIcon.interact.active};
        }
        &:focus {
            background-color: ${props.theme.colors.bg.interact.lighWeight.focus};
            color: ${props.theme.colors.textIcon.interact.focus};
        }
        &:disabled {
            background-color: ${props.theme.colors.bg.interact.lighWeight.disabled};
            color: ${props.theme.colors.textIcon.interact.disabled};
        }
    `}

    ${(props) => props.disabled &&
    `
        &:disabled {
            background-color: ${props.theme.colors.bg.interact.lighWeight.disabled};
            color: ${props.theme.colors.textIcon.interact.disabled};
            border-color: ${props.theme.colors.border.interact.disabled};
            cursor: not-allowed;
        }
    `}
    
    // SIZE PROPS

    ${(props) => props.size === "xl" &&
    `
        height: ${props.theme.spacing.widthHeight.base};
        width: ${props.theme.spacing.widthHeight.base};
    `}
    ${(props) => props.size === "xs" &&
    `
        height: ${props.theme.spacing.widthHeight.small};
        width: ${props.theme.spacing.widthHeight.small};
    `}
`;

export const ButtonIcon: React.FC<IButtonIconProps> = ({
    appearance, 
    size, 
    disabled, 
    loading, 
    icon, 
}) => {
    return <StyledButtonIcon 
        appearance={appearance} 
        size={size} 
        disabled={disabled} 
        loading={loading}
        icon={icon}
    >
        {icon && <Icon size={size === "xl" ? 20 : 16} iconName={icon} />}
    </StyledButtonIcon>;
};