import { ChangeEventHandler } from "react";
import OptionType from "../../types/OptionType";

type SelectProps = {
  options: OptionType[];
  onChange: ChangeEventHandler<HTMLSelectElement>;
  labelText: string;
  label: string;
  defaultOption: string;
  defaultValue?: number;
};

const Select = ({
  options,
  onChange,
  labelText,
  label,
  defaultOption,
  defaultValue = -1,
}: SelectProps) => {
  return (
    <>
      <label className="form__label" htmlFor={label}>{labelText}</label>
      <select className="form__option" name={label} id={label} onChange={onChange} value={defaultValue}>
        {<option  value={defaultOption}>{defaultOption}</option>}
        {options.map(({ id, firstName, lastName }) => (
          <option key={label + id} value={id}>
            {`${firstName} ${lastName}`}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
