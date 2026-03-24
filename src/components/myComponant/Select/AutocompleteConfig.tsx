import { FC } from 'react';
import { DropdownIndicatorProps, StylesConfig, components } from 'react-select';
import { IObject } from '../input/checkValidation';
import Icon from '../Icon';

export const colourStyles = (color:any): StylesConfig<IObject> => ({
	control: (styles) => ({
		...styles,
		minHeight: 'calc(1.5em + 1.1rem + 5px)',
		border: '1px solid var(--kt-input-border-color);',
		borderRadius: '0.425rem',
	}),
	singleValue: (styles) => ({ ...styles, color: 'var(--kt-input-color)' }),
	multiValue: (styles) => {
		return {
			...styles,
			backgroundColor: `var(--kt-${color})`,
			borderRadius: '8px',
		};
	},
	multiValueLabel: (styles) => ({
		...styles,
		color: color === 'secondary' || color === 'light' ? 'black' : 'white',
	}),
	multiValueRemove: (styles) => ({
		...styles,
		color: color === 'secondary' || color === 'light' ? 'black' : 'white',
		':hover': {
			backgroundColor: 'transparent',
			color: color === 'danger' ? "black" : 'red',
		},
	}),
});

export const DropdownIndicator: FC<DropdownIndicatorProps<IObject, boolean>> = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <Icon icon="manage_search" size={20} />
    </components.DropdownIndicator>
  );
};
