import { StyledInput, StyledLabel } from "./InputField.styled";

interface InputFieldProps {
  label: string;
  value: string;
  setValue: (value: string) => void;
  isError?: boolean;
  maxLength?: number;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  setValue,
  isError = false,
  maxLength,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <StyledLabel $isError={isError}>
      <span>{label}</span>
      <StyledInput
        type="text"
        value={value}
        onChange={handleChange}
        aria-describedby="label-error"
        maxLength={maxLength}
      />
    </StyledLabel>
  );
};
