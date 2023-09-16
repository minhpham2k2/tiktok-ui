import { forwardRef } from 'react';
import styles from './Video.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Video = forwardRef(({ src, className }, ref) => {
    return <video ref={ref} className={classNames(styles.wrapper, className)} src={src} controls />;
});
Video.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
};

export default Video;
