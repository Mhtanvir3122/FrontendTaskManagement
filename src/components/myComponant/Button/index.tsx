import clsx from 'clsx';
import './Button.scss';
import { IObject } from '../input/checkValidation';
import { IColors, IColorsLight, ISizes } from '@/components/myComponent/interface/common.interface';
import { ReactNode } from 'react';

type IButtonProps = {
	children: string | ReactNode | ReactNode[] | any;
	color?: IColors | IColorsLight;
	size?: ISizes;
	variant?: 'fill' | 'outline' | 'light' | 'active' | 'active-light';
	type?: 'submit' | 'button' | 'reset';
	isDisabled?: boolean;
	className?: string;
	onClick?: (() => void) | void;
	isLoading?: boolean;
	loadingText?: string;
	dropClose?: boolean;
	form?: string;
	style?: IObject;
	hoverTitle?: string;
};

const Button = ({
	children,
	color = 'primary',
	size = 'sm',
	variant,
	type = 'button',
	isDisabled,
	className,
	onClick,
	isLoading,
	loadingText,
	dropClose,
	form,
	style,
	hoverTitle,
}: IButtonProps) => {
	return (
		<button
			type={type}
			className={clsx(`d-flex align-items-center justify-content-center gap-1 btn btn-${size}`, {
				[`btn-${variant}-${color}`]: !!variant,
				[`btn-${color}`]: !variant,
				[className as string]: !!className,
			})}
			style={{ cursor: isLoading ? 'wait' : 'pointer', ...style }}
			disabled={isDisabled || isLoading}
			onClick={!!onClick ? onClick: undefined}
			data-kt-menu-dismiss={dropClose ? 'true' : 'false'}
			form={form}
			title={hoverTitle}
		>
			{isLoading ? (
				<>
					{loadingText || 'অপেক্ষা করুন'}
					<span className='button-loader'></span>
				</>
			) : (
				children
			)}
		</button>
	);
};

export default Button;
