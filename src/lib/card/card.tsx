import styled from "styled-components";
import { ButtonLink } from "../button";
import { Badge } from "../badge";


interface ICardProps {
    appearance?:  "success" | "critical";
    text?: string;
    textSize?: "base" | "large";
    newsDate?: string;
    badgeText?: string;
    buttonText?: string;
    children?: React.ReactNode;
}

const StyledCard = styled.div<ICardProps>
`
    padding: ${props => props.theme.spacing.paddings.default};
    display: inline-flex;
    flex-direction: column;
    gap: ${props => props.theme.spacing.inner.grouped};
    min-width: 320px;
    max-width: 560px;
    border: 1px solid;
    border-color: ${props => props.theme.colors.border.neutral.calm};

    .card-header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        & > .card-header-date {
            font-family: ${props => props.theme.typography.fontFamily.component};
            font-size: ${props => props.theme.typography.fontSize.componet.base};
            font-weight: ${props => props.theme.typography.fontWeight.medium};
            color: ${props => props.theme.colors.textIcon.neutral.calm};
        };
    };

    ${props => props.textSize === "base" && 
    `
        .card-body {
        & > .card-body-text {
            font-family: ${props.theme.typography.fontFamily.text};
            font-size: ${props.theme.typography.fontSize.text.base};
            line-height: ${props.theme.typography.lineHeight.text.base};
            font-weight: ${props.theme.typography.fontWeight.light};
            color: ${props.theme.colors.textIcon.neutral.bold};
        };
    };
    `};

    ${props => props.textSize === "large" && 
    `
        .card-body {
        & > .card-body-text {
            font-family: ${props.theme.typography.fontFamily.text};
            font-size: ${props.theme.typography.fontSize.text.large};
            line-height: ${props.theme.typography.lineHeight.text.large};
            font-weight: ${props.theme.typography.fontWeight.light};
            color: ${props.theme.colors.textIcon.neutral.bold};
            };
        };
    `};

    ${props => props.appearance &&
        `
        .card-header {
            & > .card-header-date {
                color: ${props.theme.colors.textIcon.inverted};
            }
        }

        .card-body {
            & > .card-body-text {
                color: ${props.theme.colors.textIcon.inverted};
                }
        }

        .card-body {
            & > .card-body-text {
                color: ${props.theme.colors.textIcon.inverted};
                }
        }
        
        background: ${props.theme.colors.bg[props.appearance].loud};
        `};

`;

export const Card: React.FC<ICardProps> = ({
    appearance, 
    text = "Текст заглушка",
    textSize ="base", 
    newsDate = "01.01.1986", 
    badgeText = "News", 
    buttonText = "Gogogo", 
    children
    }) => {
    return (
    <StyledCard 
    appearance={appearance}
    textSize={textSize}
    newsDate={newsDate}
    badgeText={badgeText}
    buttonText={buttonText}
    >
        <div className="card-header">
            <span className="card-header-date" >{newsDate}</span>
            <Badge text={badgeText} size="xl" appearance={appearance ? appearance : "success"} />
        </div>

        <div className="card-body">
            <p className="card-body-text">
                {text} 
            </p>
        </div>

            <div>
                {children}
            </div>

        <div className="card-footer">
            <ButtonLink 
                appearance={appearance ? "primaryInverted" : "primary"} 
                text={buttonText} 
                iconAfter="chevronRight" 
                size="xl" 
            />
        </div>
    </StyledCard>
    );
};