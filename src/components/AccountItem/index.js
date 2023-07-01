import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                alt="Hoa"
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/42a81079b5885e152707b170d63ba2df~c5_100x100.jpeg?x-expires=1688360400&x-signature=3HaWJR4f4vVDR0DTRv%2FiW9DPX1M%3D"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Đào Lê Phương Hoa</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('user-name')}>hoaa.hanassii</span>
            </div>
        </div>
    );
}

export default AccountItem;
