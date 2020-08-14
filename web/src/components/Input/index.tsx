import React, { InputHTMLAttributes, Children } from "react";

import "./styles.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
}

const Input: React.FC<InputProps> = ({ label, name, children, ...rest }) => {
  return (
    <div className="input-block">
      {label && <label htmlFor={name}>{label}</label>}
      <input type="text" id={name} {...rest} />
      {children}
    </div>
  );
};

export default Input;
