import styled from "styled-components";

interface ILabel {
	required?: boolean;
	text: string;
}

const StyledLabel = styled.span<ILabel>`
	font-family: ${(props) => props.theme.typography.fontFamily.component};
	font-size: ${(props) => props.theme.typography.fontSize.componet.base};
	line-height: ${(props) => props.theme.typography.lineHeight.componet.base};
	font-weight: ${(props) => props.theme.typography.fontWeight.regular};
	color: ${(props) => props.theme.colors.textIcon.interact.enabled};
	display: inline-flex;
	gap: ${(props) => props.theme.spacing.inner.closest};

	.label-required {
		color: ${(props) => props.theme.colors.textIcon.critical.loud};
	}
`;

export const Label: React.FC<ILabel> = ({ required, text }) => {
	return (
		<StyledLabel text={text} required={required}>
			{text}
			{required && <span className="label-required">*</span>}
		</StyledLabel>
	);
};