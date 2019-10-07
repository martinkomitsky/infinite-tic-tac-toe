import classnames from 'classnames';
import * as React from 'react';
import * as s from './Input.module.css';
import * as T from './Input.types';

export const Input: React.FunctionComponent<T.IInputProps> = props => {
	const { legend, type, value, onChange, ...restProps } = props;

	const inputElement = (
		<input
			className={classnames(s.input, { [s.inputBorderless]: legend })}
			type={type}
			value={value}
			onChange={onChange}
			{...restProps}
		/>
	);

	const renderInput = () => {
		return legend ? (
			<fieldset className={s.inputFieldSet}>
				<legend className={s.inputLegend}>{legend}</legend>
				{inputElement}
			</fieldset>
		) : (
			<React.Fragment>{inputElement}</React.Fragment>
		);
	};

	return renderInput();
};
