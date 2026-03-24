import { useState } from "react";

import clsx from "clsx";

import Icon from "../Icon";
import {
  BN_EN_DECIMAL_NUMERIC_REGEX,
  BN_EN_NUMERIC_REGEX,
  numEnToBn,
} from "./checkValidation";
import "./style.scss";

type ISizes = "lg" | "md" | "sm";

type IInputProps = {
  name?: string;
  size?: ISizes;
  variant?: "solid" | "outline";
  label?: string;
  autoFocus?: boolean;
  accept?: string;
  type?:
    | "button"
    | "text"
    | "color"
    | "date"
    | "email"
    | "datetime-local"
    | "month"
    | "number"
    | "password"
    | "search"
    | "tel"
    | "time"
    | "url"
    | "week"
    | "range"
    | "file";
  numaricOnly?: boolean;
  isRequired?: boolean;
  hasInfo?: boolean;
  infoText?: string;
  placeholder?: string;
  defaultValue?: string | number | File | FileList;
  value?: string | number | File | FileList;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onClick?: (event: any) => void;
  max?: string | number;
  min?: string | number;
  isError?: boolean;
  helpText?: string;
  isValid?: boolean;
  errorMessage?: string;
  noMargin?: boolean;
  registerProperty?: any;
  disabled?: boolean;
  startIcon?: any;
  startIconClassName?: string;
  endIcon?: any;
  className?: string;
  readOnly?: boolean;
  title?: string;
  isMultiple?: boolean;
  inputRef?: any;
  viewOnly?: string | number;
  isPhone?: boolean;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

const Input = ({
  name,
  size = "sm",
  autoFocus,
  variant = "outline",
  accept,
  label,
  type = "text",
  numaricOnly,
  placeholder,
  defaultValue,
  value,
  isRequired,
  onChange,
  onFocus,
  onClick,
  min,
  max,
  hasInfo,
  infoText,
  isError,
  helpText,
  isValid,
  startIcon,
  startIconClassName,
  endIcon,
  errorMessage,
  noMargin,
  registerProperty,
  disabled = false,
  className,
  readOnly,
  title,
  isMultiple,
  inputRef,
  viewOnly,
  isPhone = false,
  onKeyDown,
}: IInputProps) => {
  const [inputType, setInputType] = useState<string>(type);

  return (
    <div
      className={clsx([
        `w-100 fv-row mb-3`,
        { [className as string]: !!className, "mb-3": !noMargin },
      ])}
    >
      {label ? (
        <label className="d-flex align-items-center fs-5">
          <span className={isRequired ? "required" : ""}>
            {label}
            {isRequired && <span style={{ color: "red" }}>*</span>}
          </span>
          {hasInfo && <Icon icon="help" hoverTitle={infoText} />}
          {hasInfo && <Icon icon="help" />}
        </label>
      ) : null}
      <div className={`position-relative ${isPhone ? " phone-field" : ""}`}>
        {!!startIcon && !isPhone && (
          <span
            className={clsx(
              "position-absolute top-50 ms-4 translate-middle-y",
              { "mt-1": !startIconClassName },
              startIconClassName
            )}
          >
            {startIcon}
          </span>
        )}
        {isPhone && (
          <div
            className="phone-prefix d-flex align-items-center position-absolute top-50 ms-3 translate-middle-y"
            style={{ borderRadius: 8 }}
          >
            <img src="/src/assets/svg/home.svg" alt="bd" />
            &nbsp;
            <span>+88</span>
          </div>
        )}

        {!!viewOnly ? (
          <span className="ms-2 fs-5 fw-bold text-gray-800">
            {inputType === "number" ? numEnToBn(viewOnly) : viewOnly}
          </span>
        ) : (
          <>
            <input
              type={inputType}
              autoFocus={autoFocus}
              className={`form-control form-control-${size} form-control-${variant} input-rounded ${
                isError ? "is-invalid " : ""
              } ${isValid ? "is-valid" : ""} ${startIcon ? "ps-11" : ""}`}
              name={name}
              accept={accept}
              required={isRequired}
              defaultValue={defaultValue}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              onFocus={onFocus}
              onClick={onClick}
              multiple={isMultiple}
              min={min}
              max={max}
              disabled={disabled}
              readOnly={readOnly}
              title={title}
              onKeyDown={onKeyDown}
              onKeyPress={
                type === "number"
                  ? (e) =>
                      e.charCode !== 13
                        ? numaricOnly
                          ? !BN_EN_NUMERIC_REGEX.test(e.key) &&
                            e.preventDefault()
                          : !BN_EN_DECIMAL_NUMERIC_REGEX.test(e.key) &&
                            e.preventDefault()
                        : null
                  : null
              }
              onWheel={(e: any) => e.target.blur()}
              ref={inputRef}
              {...registerProperty}
            />

            {type === "password" && (
              <span className="position-absolute top-50 end-0 mt-1 me-3 translate-middle-y">
                <Icon
                  icon={
                    inputType === "password" ? "visibility_off" : "visibility"
                  }
                  //   variants="outlined"
                  //   size={20}
                  onClick={() =>
                    setInputType((prev) =>
                      prev === "password" ? "text" : "password"
                    )
                  }
                />
              </span>
            )}
          </>
        )}

        {!!endIcon && (
          <span className="position-absolute top-50 end-0 mt-1 me-3 translate-middle-y">
            {endIcon}
          </span>
        )}
      </div>
      {isError && !viewOnly ? (
        <div className="invalid-feedback d-block">{errorMessage}</div>
      ) : !!helpText && !viewOnly ? (
        <div className="form-text text-gray-600">{helpText}</div>
      ) : null}
    </div>
  );
};

export default Input;
