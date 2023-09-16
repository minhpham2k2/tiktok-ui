import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PoperWrapper } from '~/components/Popper';
import styles from './SuggestAccounts.module.scss';
import Image from '~/components/Image';
import AccountPreview from '../AccountPreview';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const renderpreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PoperWrapper>
                    <AccountPreview />
                </PoperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} render={renderpreview} placement="bottom">
                <Link to={'/'} className={cx('account-item')}>
                    <Image
                        className={cx('avatar')}
                        atl="Đào Lê Phương Hoa"
                        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/42a81079b5885e152707b170d63ba2df~c5_100x100.jpeg?x-expires=1691812800&x-signature=QVQyAYEFzp4SrPGPiWeUAciK9nM%3D"
                    />
                    <div className={cx('item-info')}>
                        <h4 className={cx('full-name')}>
                            <span>Đào Lê Phương Hoa</span>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </h4>
                        <span className={cx('nickname')}>hoaahanassii</span>
                    </div>
                </Link>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object,
};

export default AccountItem;
