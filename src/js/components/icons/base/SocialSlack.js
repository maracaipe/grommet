// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import CSSClassnames from '../../../utils/CSSClassnames';
import Intl from '../../../utils/Intl';

const CLASS_ROOT = CSSClassnames.CONTROL_ICON;
const COLOR_INDEX = CSSClassnames.COLOR_INDEX;

export default class Icon extends Component {
  render () {
    const { className, colorIndex } = this.props;
    let { a11yTitle, size, responsive } = this.props;
    let { intl } = this.context;

    const classes = classnames(
      CLASS_ROOT,
      `${CLASS_ROOT}-social-slack`,
      className,
      {
        [`${CLASS_ROOT}--${size}`]: size,
        [`${CLASS_ROOT}--responsive`]: responsive,
        [`${COLOR_INDEX}-${colorIndex}`]: colorIndex
      }
    );

    a11yTitle = a11yTitle || Intl.getMessage(intl, 'social-slack');

    return <svg version="1.1" viewBox="0 0 24 24" width="24px" height="24px" role="img" className={classes} aria-label={a11yTitle}><path fill="#000000" fillRule="evenodd" d="M10.9829147,13.9325266 L10.0460003,11.1353533 L12.9732746,10.1548615 L13.910189,12.9520348 L10.9829147,13.9325266 Z M22.0848234,8.9814134 C19.8208835,1.4349469 16.5278799,-0.348763364 8.9814134,1.91517659 C1.4349469,4.17911654 -0.348763364,7.4721201 1.91517659,15.0185866 C4.17911654,22.5650531 7.4721201,24.3487634 15.0185866,22.0848234 C22.5650531,19.8208835 24.3487634,16.5278799 22.0848234,8.9814134 L22.0848234,8.9814134 Z M18.2429859,13.8523145 L16.8022969,14.3325442 L17.2825265,15.7732332 C17.4883393,16.3906714 17.1453181,17.0081096 16.5964841,17.2139223 C16.4592757,17.2825265 16.3220672,17.2825265 16.1848587,17.2825265 C15.704629,17.2825265 15.2930036,16.9395053 15.1557951,16.5278799 L14.6755654,15.0871908 L11.725583,16.0476502 L12.2058127,17.4883393 C12.4116254,18.1057774 12.0686042,18.7232156 11.5197703,18.9290283 C11.3825618,18.9976326 11.2453534,18.9976326 11.1081449,18.9976326 C10.6279152,18.9976326 10.2162897,18.6546114 10.0790813,18.2429859 L9.59885157,16.8022969 L8.15816251,17.2825265 C8.02095403,17.3511308 7.88374555,17.3511308 7.74653706,17.3511308 C7.26630738,17.3511308 6.85468193,17.0081096 6.71747345,16.5964841 C6.51166073,15.979046 6.85468193,15.3616078 7.40351586,15.1557951 L8.84420492,14.6755654 L7.88374555,11.7941873 L6.51166073,12.274417 C6.37445225,12.3430212 6.23724376,12.3430212 6.10003528,12.3430212 C5.6198056,12.3430212 5.20818015,12 5.07097167,11.5883746 C4.86515895,10.9709364 5.20818015,10.3534982 5.75701408,10.1476855 L7.19770314,9.66745581 L6.71747345,8.22676675 C6.51166073,7.60932858 6.78607769,6.92328617 7.40351586,6.71747345 C8.02095403,6.51166073 8.6383922,6.85468193 8.84420492,7.40351586 L9.3244346,8.84420492 L12.274417,7.88374555 L11.7941873,6.44305649 C11.5883746,5.82561832 11.9313958,5.20818015 12.4802297,5.00236743 C13.0976679,4.7965547 13.715106,5.13957591 13.9209187,5.68840984 L14.4011484,7.19770314 L15.8418375,6.71747345 C16.4592757,6.51166073 17.0767138,6.85468193 17.2825265,7.40351586 C17.4883393,8.02095403 17.1453181,8.6383922 16.5964841,8.84420492 L15.1557951,9.3244346 L16.1162545,12.1372085 L17.5569435,11.6569788 C18.1743817,11.4511661 18.7918198,11.7941873 18.9976326,12.3430212 C19.1348411,13.0290636 18.8604241,13.6465018 18.2429859,13.8523145 L18.2429859,13.8523145 Z"/></svg>;
  }
};

Icon.contextTypes = {
  intl: PropTypes.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'SocialSlack';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: PropTypes.string,
  colorIndex: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: PropTypes.bool
};

