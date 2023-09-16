import Header from '~/Layouts/components/Header';
import Sidebar from '../components/Sidebar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('sidebar')}>
                    <Sidebar />
                </div>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
