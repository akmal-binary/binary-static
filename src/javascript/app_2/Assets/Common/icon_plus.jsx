import PropTypes  from 'prop-types';
import React      from 'react';

const IconPlus = ({ className, is_disabled }) => (
    <svg className={`${className} ${is_disabled ? 'disabled' : null}`} xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'>
        <path fill='#5C5C5C' fillRule='evenodd' d='M8.5 7.5H13v1H8.5V13h-1V8.5H3v-1h4.5V3h1v4.5z' />
    </svg>

);

IconPlus.propTypes = {
    className  : PropTypes.string,
    is_disabled: PropTypes.bool,
};

export { IconPlus };
