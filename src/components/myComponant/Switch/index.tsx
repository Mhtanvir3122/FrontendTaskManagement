import clsx from 'clsx';
import { useState } from 'react';
import "./style.scss"

type ISwitch = {
	label?: string;
	isRequired?: boolean;
	checked?: boolean;
	name?: string;
	defaultChecked?: boolean;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	registerProperty?: any;
	className?: string;
	noMargin?: boolean;
	checkTrueValue?: string | number;
	checkFalseValue?: string | number;
} & (
	| {
			showSwitchValue?: false;
	  }
	| {
			showSwitchValue: true;
			checkTrueValue: string | number;
			checkFalseValue: string | number;
	  }
);

const Switch = ({
	label,
	isRequired,
	checked,
	name,
	defaultChecked,
	onChange,
	registerProperty,
	className,
	noMargin = false,
	showSwitchValue,
	checkTrueValue,
	checkFalseValue,
}: ISwitch) => {
	const [isChecked, setChecked] = useState<boolean>();

	const onSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(e.target.checked);
		onChange && onChange(e);
		registerProperty && registerProperty?.onChange(e);
	};
	return (
		<div
			className={clsx('d-flex align-items-center justify-content-between', {
				'mb-6': !noMargin,
				[className as string]: !!className,
			})}
		>
			<label className='d-flex align-items-center fs-6'>
				<span
					className={clsx({
						required: isRequired,
					})}
				>
					{label}
				</span>
			</label>

			<div className='form-check form-switch form-switch-sm form-check-custom form-check-solid'>
				<input
					className='form-check-input'
					required={isRequired}
					type='checkbox'
					checked={checked}
					name={name}
					defaultChecked={defaultChecked}
					{...registerProperty}
					onChange={onSwitch}
				/>
				{showSwitchValue ? (
					<label className='form-check-label'>
						{isChecked !== null && isChecked ? checkTrueValue : checkFalseValue}
					</label>
				) : null}
			</div>
		</div>
	);
};

export default Switch;
