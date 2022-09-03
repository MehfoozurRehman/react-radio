import React from "react";
import "./styles.css";

const Radio = ({
  onChange,
  value,
  checkedColor,
  unCheckedColor,
  iconColor,
  label,
  labelColor,
  style,
  ...props
}) => {
  return (
    <div className="radio">
      <input
        class="radio__input"
        type="radio"
        value={value}
        onChange={onChange}
        {...props}
      />
      <div className="radio__content">
        <div
          className="radio__content__indicator"
          style={
            value
              ? { background: checkedColor, color: iconColor, ...style }
              : { background: unCheckedColor, ...style }
          }
        >
          {value ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-check"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          ) : null}
        </div>
        <div className="radio__content__label" style={{ color: labelColor }}>
          {label}
        </div>
      </div>
    </div>
  );
};
export default Radio;
