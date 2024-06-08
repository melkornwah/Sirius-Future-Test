import React, { memo } from "react";
import SubmitButton from "../button/submitButton/SubmitButton";

type FormProps = {
  formData: Array<{
    Component: React.ElementType,
    props: any,
    label: string,
  }>,
  submitAction: Function,
  submitButtonText: string,
  className: string,
  setValues: Function,
}

const Form = ({
  formData,
  submitAction,
  submitButtonText,
  className,
  setValues,
}: FormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitAction();
  }

  return (
    <form
      className={className}
      onSubmit={handleSubmit}
      onChange={(e) => {
        const { name, value, checked } = (e.target as HTMLInputElement);

        setValues((prev: any) => {
          if (name.toLowerCase().includes("checkbox")) {
            return { ...prev, [name]: checked };
          };

          return { ...prev, [name]: value };
        });
      }}
    >
      {
        formData.map(({ Component, props, label }) => {
          return (
            <Component key={label} name={label} {...props} />
          )
        })
      }
      <SubmitButton text={submitButtonText} />
    </form>
  );
};

export default memo(Form);
