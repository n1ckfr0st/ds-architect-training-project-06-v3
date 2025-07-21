import styled from "styled-components";

interface IBadgeProps {
	/**
	 * Наполнение текстом (обязательное поле)
	 */
	text: string;

	/**
	 * Размер компонента
	 */
	size?: "xl" | "xs";

	/**
	 * Визуальный вес компонента
	 */
	appearance?: "gray" | "green";

	/**
	 * Переключает компонент в менее акцентный вид
	 */
	outlined?: boolean;
}

const StyledBadge = styled.div<IBadgeProps>`
	display: inline-flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	border: 1px solid;
	border-radius: 0;
	font-family: ${(props) => props.theme.typography.fontFamily.text};

	${(props) =>
		props.size === "xl" &&
		`
            font-size: ${props.theme.typography.fontSize.componet.base};
            line-height: ${props.theme.typography.lineHeight.componet.base};
            font-weight: ${props.theme.typography.fontWeight.medium};
            height: ${props.theme.spacing.widthHeight.small};
            padding: 0 ${props.theme.spacing.paddings.xxCompact};
        `}

	${(props) =>
    props.size === "xs" &&
    `
        font-size: ${props.theme.typography.fontSize.componet.small};
        line-height: ${props.theme.typography.lineHeight.componet.small};
        font-weight: ${props.theme.typography.fontWeight.medium};
        height: ${props.theme.spacing.widthHeight.xSmall};
        padding: 0 ${props.theme.spacing.paddings.xxxCompact};
    `}

    ${(props) =>
    props.appearance &&
    `
        background: ${props.theme.colors.bg.success.bold};
        color: ${props.theme.colors.textIcon.inverted};
        border-color: ${props.theme.colors.border.transparent};
    `}

    ${(props) =>
    props.outlined &&
    props.appearance &&
    `
        background: ${props.theme.colors.bg.interact.lighWeight.active};
        color: ${props.theme.colors.textIcon.success.bold};
        border-color: ${props.theme.colors.border.success.bold};   
    `}
`;
/**
 *
 * Используется для цветового разграничения контента
 *
 */
export const Badge: React.FC<IBadgeProps> = ({
	text = "Hello badge",
	size = "small",
	appearance = "grey",
	outlined = false,
}) => {
	return (
		<StyledBadge
			outlined={outlined}
			appearance={appearance}
			size={size}
			text={text}
		>
			{text}
		</StyledBadge>
	);
};