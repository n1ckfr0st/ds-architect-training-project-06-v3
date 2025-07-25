import styled from "styled-components";
import { Label } from "../label";
import { InlineMessage } from "../inline-message";
import { Icon } from "../icon";

interface IInputTextProps {
	/**
	 * Текст заглушка для пояснения вводимого значения
	 */
	placeholder?: string;
	/**
	 * Введённое значение
	 */
	value?: string;
	/**
	 * Дополнительная информация под полем ввода
	 */
	helpMessage?: string;
	/**
	 * Информация описания ошибки под полем ввода
	 */
	errorMessage?: string;
	/**
	 * Компонент недоступен, не читаем
	 * скринридером и не даёт обратную связи при попытке взаимеодействия
	 */
	disabled?: boolean;
	/**
	 * Компонент недоступен для редактирования
	 * но есть возможность копирования его значения
	 */
	readonly?: boolean;
	/**
	 * required - нативное свойство input, без label может также делать ввод значения в поле обязательным
	 */
	required?: boolean;
	/**
	 * Описание того, для чего необходимо данное поле
	 */
	label?: string;
	/**
	 * Отображает иконку до текста
	 */
	iconBefore?:
		| "user"
		| "chevronUp"
		| "chevronRight"
		| "chevronLeft"
		| "chevronDown"
		| "download"
		| "password"
}


const StyledInputText = styled.div<IInputTextProps>`
	display: flex;
    align-items: left;
	flex-direction: column;
	// display: relative;
	gap: ${(props) => props.theme.spacing.inner.closest};
	justify-content: stretch;
	outline: none;
	color: ${(props) => props.theme.colors.textIcon.interact.enabled};

	.input-composition {
		position: relative;
		width: 100%;      
	}

	.input-icon {
		position: absolute;
		top: 9px;
		left: 7px;
	}

	.input-text {
		border: 1px solid ${(props) => props.theme.colors.border.interact.enabled};
        border-radius: ${(props) => props.theme.borderRadius.mini};
		background: ${(props) => props.theme.colors.bg.interact.lighWeight.enabled};
		padding-left: ${(props) => props.theme.spacing.paddings.compact};
		padding-right: ${(props) => props.theme.spacing.paddings.compact};
		height: ${(props) => props.theme.spacing.widthHeight.base};
		font-size: ${(props) => props.theme.typography.fontSize.componet.base};
		line-height: ${(props) => props.theme.typography.lineHeight.componet.base};
		font-weight: ${(props) => props.theme.typography.fontWeight.regular};
		color: ${(props) => props.theme.colors.textIcon.interact.enabled};
		min-width: 100%;
		max-width: 100%;
		transition: all 0.2s;

		${(props) =>
			props.disabled &&
			`
            color: ${props.theme.colors.textIcon.interact.disabled};
            `}

		${(props) =>
			props.iconBefore &&
			`
                padding-left: ${props.theme.spacing.paddings.large};
                
                `}

		&:hover {
			border-color: ${(props) =>
				props.theme.colors.border.interact.hover};
		}
		&:active {
			border-color: ${(props) =>
				props.theme.colors.border.interact.active};
		}
		&:focus {
			border-color: ${(props) =>
				props.theme.colors.border.interact.focus};
			box-shadow: 0px 0px 0px 2px rgba(79, 96, 255, 0.25);
		}

		&::placeholder {
			color: ${(props) => props.theme.colors.textIcon.interact.enabled};
		}
		&:disabled {
			background: ${(props) => props.theme.colors.bg.interact.lighWeight.disabled};
			color: ${(props) => props.theme.colors.textIcon.interact.disabled};
		}
		&:read-only {
			background: ${(props) => props.theme.colors.bg.interact.lighWeight.readOnly};
			color: ${(props) => props.theme.colors.textIcon.interact.enabled};
		}
	}
	${(props) =>
		props.errorMessage &&
		`
        .input-text {
            &:enabled {
                border-color: ${props.theme.colors.border.critical.loud};
                }
            }
        
        `}
`;

/**
 *
 * Компонент используется для ввода текста, почты
 *
 */
export const InputText: React.FC<IInputTextProps> = ({
	placeholder = "Enter your email",
	value,
	helpMessage,
	errorMessage,
	readonly,
	disabled,
	required,
	label,
	iconBefore,
}) => {
	return (
		<StyledInputText iconBefore={iconBefore} errorMessage={errorMessage}>
			{label && <Label required={required} text={label} />}
			<div className="input-composition">
				{iconBefore && (
					<Icon
						iconName={iconBefore}
						size={24}
						className="input-icon"
					/>
				)}

				<input
					className="input-text"
					placeholder={placeholder}
					value={value}
					disabled={disabled}
					readOnly={readonly}
				/>
			</div>
			{helpMessage && (
				<InlineMessage text={helpMessage} status="default" />
			)}
			{errorMessage && (
				<InlineMessage text={errorMessage} status="critical" />
			)}
		</StyledInputText>
	);
};