import React from 'react';
import PropTypes from 'prop-types';

const IconLogo = (props) => {
  const { width, height } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 261.021 298.536"
    >
      <g transform="translate(-238.695 -107.379)">
        <text
          transform="translate(293 324)"
          fill="#0693E3"
          fontSize="200"
          fontFamily="SegoeUI-Semibold, Segoe UI"
          fontWeight="600"
        >
          <tspan x="0" y="0">
            Ḳ
          </tspan>
        </text>
        <path
          d="M435.651,850.174l126.064-68.158V637.388L437.036,563.135,310.695,632.124V776.474Z"
          transform="translate(-67 -450)"
          fill="none"
          stroke="#0693E3"
          strokeWidth="10"
        />
      </g>
    </svg>
  );
};

IconLogo.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default IconLogo;
