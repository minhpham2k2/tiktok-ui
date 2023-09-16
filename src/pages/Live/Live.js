import styles from './Live.module.scss';
import classNames from 'classnames/bind';
import { DownIcon, UpIcon, UserGroupActiveIcon } from '~/components/Icons';
import { video } from '~/video';
const cx = classNames.bind(styles);

function Live() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('user')}>
                <span className={cx('live')}>LIVE</span>
                {/* nick name */}
                <div className={cx('detail')}>
                    <span className={cx('nick-name')}>@hoaa.hanassii</span>
                    <div className={cx('view')}>
                        <UserGroupActiveIcon className={cx('viewer-icon')} />
                        <span className={cx('viewer-count')}>50</span>
                    </div>
                </div>
                {/* content */}
                <p className={cx('content')}>Chao buoi toi</p>
            </div>
            <div className={cx('video-block')}>
                <video src={video[1]} className={cx('video-live')} />
            </div>
            <div className={cx('icon')}>
                <div className={cx('btn-up')}>
                    <UpIcon className={cx('up-icon')} />
                </div>
                <div className={cx('btn-down')}>
                    <DownIcon className={cx('down-icon')} />
                </div>
            </div>
        </div>
    );
}

export default Live;
