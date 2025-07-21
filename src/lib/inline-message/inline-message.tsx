import styled from "styled-components";

interface IInlineMessage {
	status?: "default" | "critical";
	text?: string;
}

const StyledInlineMessage = styled.span<IInlineMessage>`
	font-family: ${(props) => props.theme.typography.fontFamily.component};
	font-size: ${(props) => props.theme.typography.fontSize.componet.small};
	line-height: ${(props) => props.theme.typography.lineHeight.componet.small};
	font-weight: ${(props) => props.theme.typography.fontWeight.light};

	${(props) =>
		props.status === "critical" &&
		`
        color: ${props.theme.colors.textIcon.critical.loud};
        `}

	${(props) =>
		props.status === "default" &&
		`
        color: ${props.theme.colors.textIcon.interact.enabled};
        `}
`;

export const InlineMessage: React.FC<IInlineMessage> = ({ status, text }) => {
	return (
		<StyledInlineMessage text={text} status={status}>
			{text}
		</StyledInlineMessage>
	);
};