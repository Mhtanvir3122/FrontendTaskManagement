import React from "react";
import Select, { GroupBase, Props as SelectProps } from "react-select";

type OptionType = {
  value: string;
  label: string;
};

interface CustomSelectProps
  extends SelectProps<OptionType, true, GroupBase<OptionType>> {
  label: string;
  id: string;
  wrapperClassName?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  id,
  wrapperClassName = "",
  ...selectProps
}) => {
  return (
    <div className={`${wrapperClassName}`}>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <Select<OptionType, true, GroupBase<OptionType>>
        inputId={id}
        className="select-1"
        classNamePrefix="custom-select"
        isMulti
        menuShouldBlockScroll
        {...selectProps}
      />
    </div>
  );
};

export default CustomSelect;
