import React from 'react';

export type IButtonProps = {
    text: string,
    onClick: ()=>void
}

const Button: React.FC<IButtonProps> = ({ text, onClick }:IButtonProps) => (
  <button
    className="button"
    type="button"
    onClick={() => { onClick(); }}
  >
    {text}
  </button>
);

export default Button;
