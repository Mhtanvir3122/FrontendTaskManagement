import clsx from 'clsx';
import { memo } from 'react';

type ICheckbox = {
	name?: string;
	label?: string;
	subLabel?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	checked?: boolean;
	defaultChecked?: boolean;
	noMargin?: boolean;
	registerProperty?: any;
	isDisabled?: boolean;
	labelClass?: string;
	viewOnly?: boolean | string | number;
	viewOnlyActive?: boolean; // For primary condition to active the viewOnly mode
	falseLabel?: string;
};

const Checkbox = ({
	name,
	label,
	subLabel,
	onChange,
	checked,
	defaultChecked,
	noMargin,
	registerProperty,
	isDisabled,
	labelClass,
	viewOnly,
	viewOnlyActive,
	falseLabel,
}: ICheckbox) => {
	viewOnly = viewOnly?.toString();

	return (
		<label
			className={clsx(`d-flex align-items-center gap-3`, { 'mb-6': !noMargin, 'cursor-pointer': !viewOnly })}
		>
			{!viewOnlyActive && (
				<div className='form-check form-check-custom'>
					<input
						className='form-check-input cursor-pointer'
						name={name}
						type='checkbox'
						disabled={isDisabled}
						checked={checked}
						defaultChecked={defaultChecked}
						onChange={onChange}
						{...registerProperty}
					/>
				</div>
			)}
			<div className='flex-grow-1'>
				<span
					className={clsx(`text-gray-800 ${viewOnlyActive ? 'fs-4 ms-2' : 'fs-6 text-hover-primary'}`, {
						[labelClass as string]: labelClass,
					})}
				>
					{!!viewOnlyActive ? (viewOnly ? label : falseLabel) : label}
				</span>
				<span className='text-muted fw-semibold d-block'>{subLabel}</span>
			</div>
		</label>
	);
};

export default memo(Checkbox);
