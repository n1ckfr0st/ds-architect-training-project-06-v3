import styled from "styled-components";
import { Icon, iconsType } from "../icon";

// MAIN INTERFACE

interface IButtonLinkProps {
    appearance?: "primary" | "primaryInverted" | "secondary";
    size?: "xl" | "xs";
    disabled?: boolean;
    loading?: boolean;
    iconBefore?: iconsType;
    iconAfter?: iconsType;
    text?: string;
}

// MAIN STYLES

const StyledButtonLink = styled.button<IButtonLinkProps> 
`
    border: none;
    background: none;
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
            font-weight: ${props.theme.typography.fontWeight.regular};
            color: ${props.theme.colors.textIcon.interact.enabled};
        }
        &:hover {
            color: ${props.theme.colors.textIcon.interact.hover};
        }
        &:active {
            color: ${props.theme.colors.textIcon.interact.active};
        }
        &:focus {
            color: ${props.theme.colors.textIcon.interact.focus};
        }
        &:disabled {
            color: ${props.theme.colors.textIcon.interact.disabled};
        }
    `}

    ${(props) => props.appearance === "primaryInverted" && 
    `
        &:enabled {
            font-weight: ${props.theme.typography.fontWeight.regular};
            color: ${props.theme.colors.textIcon.inverted};
        }
        &:hover {
            color: ${props.theme.colors.textIcon.neutral.calmest};
        }
        &:active {
            color: ${props.theme.colors.textIcon.neutral.calm};
        }
        &:focus {
            color: ${props.theme.colors.textIcon.neutral.calmest};
        }
        &:disabled {
            color: ${props.theme.colors.textIcon.neutral.loud};
        }
    `}
    
    ${(props) => props.appearance === "secondary" && 
    `
        &:enabled {
            font-weight: ${props.theme.typography.fontWeight.light};
            color: ${props.theme.colors.textIcon.interact.enabled};
        }
        &:hover {
            color: ${props.theme.colors.textIcon.interact.hover};
        }
        &:active {
            color: ${props.theme.colors.textIcon.interact.active};
        }
        &:focus {
            color: ${props.theme.colors.textIcon.interact.focus};
        }
        &:disabled {
            color: ${props.theme.colors.textIcon.interact.disabled};
        }
    `}

    ${(props) => props.disabled &&
    `
        &:disabled {
            color: ${props.theme.colors.textIcon.interact.disabled};
            cursor: not-allowed;
        }
    `}
    
    // SIZE PROPS

    ${(props) => props.size === "xl" &&
    `
        font-size: ${props.theme.typography.fontSize.componet.base};
        line-height: ${props.theme.typography.lineHeight.componet.base};
        font-weight: ${props.theme.typography.fontWeight.regular};
    `}
    ${(props) => props.size === "xs" &&
    `
        font-size: ${props.theme.typography.fontSize.componet.small};
        line-height: ${props.theme.typography.lineHeight.componet.small};
        font-weight: ${props.theme.typography.fontWeight.regular};
    `}
`;

export const ButtonLink: React.FC<IButtonLinkProps> = ({
    appearance, 
    size, 
    disabled, 
    loading, 
    iconBefore, 
    iconAfter, 
    text = "buttonText"
}) => {
    return <StyledButtonLink 
        appearance={appearance} 
        size={size} 
        disabled={disabled} 
        loading={loading}
        iconBefore={iconBefore}
        iconAfter={iconAfter}
    >
        {iconBefore && <Icon size={size === "xl" ? 20 : 16} iconName={iconBefore} />}
        {text}
        {iconAfter && <Icon size={size === "xl" ? 20 : 16} iconName={iconAfter} />}
    </StyledButtonLink>;
};