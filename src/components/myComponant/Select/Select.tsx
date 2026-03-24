import { ISizes } from "@/components/myComponent/interface/common.interface";
import { IObject } from "../input/checkValidation";
import Icon from "../Icon";


type ISelect = {
	name?: string;
	label?: string;
	size?: ISizes;
	valueKey?: string;
	textKey?: string;
	onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
	renderItem?: (op: IObject) => void;
	value?: string | number;
	defaultValue?: string | number;
	noMargin?: boolean;
	options: { [key: string]: any }[];
	isRequired?: boolean;
	isError?: boolean;
	hasInfo?: boolean;
	placeholder?: string;
	infoText?: string;
	errorMessage?: string;
	acceptNull?: boolean;
	registerProperty?: any;
	width?: number;
	isDisabled?: boolean;
	helpText?: string;
	viewOnly?: string;
};

const Select = ({
	name,
	label,
	size = "sm",
	valueKey,
	textKey,
	onChange,
	renderItem,
	value,
	defaultValue,
	isRequired,
	noMargin,
	options,
	placeholder,
	hasInfo,
	infoText,
	isError,
	errorMessage,
	acceptNull = true,
	registerProperty,
	width,
	isDisabled = false,
	helpText,
	viewOnly,
}: ISelect) => {
	return (
		<div className={`${width ? `w-${width}px` : ""} ${noMargin ? "" : "mb-6"}`}>
			{label && (
				<label className="d-flex align-items-center fs-5">
					<span className={isRequired ? "required" : ""}>{label}</span>
					{hasInfo && <Icon icon="info" size={15} hoverTitle={infoText} />}
				</label>
			)}

			{!!viewOnly ? (
				<span className="ms-2 fs-4">{viewOnly}</span>
			) : (
				<select
					className={`form-select form-select-${size} ${isError ? "is-invalid" : ""
						}`}
					data-allow-clear="true"
					required={isRequired}
					name={name}
					value={value}
					defaultValue={defaultValue}
					onChange={onChange}
					disabled={isDisabled}
					{...registerProperty}
				>
					{acceptNull && (
						<option value="">{placeholder || "বাছাই করুন..."}</option>
					)}
					{options?.map((val, idx) => (
						<option
							key={idx}
							value={valueKey ? val?.[valueKey] : JSON.stringify(val)}
						>
							{renderItem ? renderItem(val) : val?.[textKey as string]}
						</option>
					))}
				</select>
			)}

			{isError && !viewOnly ? (
				<div className="invalid-feedback d-block">{errorMessage}</div>
			) : !!helpText && !viewOnly ? (
				<div className="form-text text-gray-600">{helpText}</div>
			) : null}
		</div>
	);
};

export { Select };
