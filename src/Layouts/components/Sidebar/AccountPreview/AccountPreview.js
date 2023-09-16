import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button/Button';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image
                    className={cx('avatar')}
                    atl="Đào Lê Phương Hoa"
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/42a81079b5885e152707b170d63ba2df~c5_100x100.jpeg?x-expires=1691812800&x-signature=QVQyAYEFzp4SrPGPiWeUAciK9nM%3D"
                />
                <Button primary small>
                    Following
                </Button>
            </div>
            <div className={cx('body')}>
                <h4 className={cx('full-name')}>
                    <span>Đào Lê Phương Hoa</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('nickname')}>hoaahanassii</span>
                <p className={cx('analytics')}>
                    <span className={cx('title')}>
                        <strong className={cx('value')}>8.2M </strong> Followers
                    </span>

                    <span className={cx('tilte')}>
                        <strong className={cx('value')}>1B</strong> Likes
                    </span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
