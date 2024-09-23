/* eslint-disable max-len */
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

const IconLogo = ({ theme, width = 36.581, height = 50.186, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"  width={width} height={height} viewBox="0 0 261.021 298.536"><g transform="translate(-238.695 -107.379)"><text transform="translate(293 324)" fill="#0693E3" font-size="200" font-family="SegoeUI-Semibold, Segoe UI" font-weight="600"><tspan x="0" y="0">Ḳ</tspan></text><path d="M435.651,850.174l126.064-68.158V637.388L437.036,563.135,310.695,632.124V776.474Z" transform="translate(-67 -450)" fill="none" stroke="#0693E3" stroke-width="10"/></g></svg>
  );
};

IconLogo.propTypes = {
  theme: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default withTheme(IconLogo);
