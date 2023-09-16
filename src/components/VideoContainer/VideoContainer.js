import classNames from 'classnames/bind';
import styles from './VideoContainer.module.scss';
import Image from '~/components/Image';

import Button from '~/components/Button/Button';
import { CommentIcon, LikeIcon, MusicIcon, SaveIcon, ShareIcon } from '~/components/Icons';
import { useState } from 'react';
import Video from '~/components/Video/Video';

const cx = classNames.bind(styles);

function VideoContainer({ src, href, atl, item, following = false }) {
    const [primary, setPrimary] = useState(false);
    const [follow, setFowllow] = useState(false);

    const handleFollow = () => {
        setFowllow(!follow);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('image')}>
                <Image className={cx('avatar')} atl={atl} src={src} />
            </div>
            <div className={cx('container')}>
                <div className={cx('header')}>
                    <div>
                        <div className={cx('author')}>
                            <h3 className={cx('nickname')}>{item.nickname}</h3>
                            <h4 className={cx('fullname')}>{item.fullname}</h4>
                        </div>
                        <div className={cx('content')}>
                            <span className={cx('title')}>{item.title}</span>
                            <strong className={cx('caption')}>{item.caption}</strong>
                        </div>
                        <a className={cx('music')} href={href}>
                            <MusicIcon className={cx('music-icon')} />
                            <div className={cx('music-text')}>{item.music}</div>
                        </a>
                    </div>

                    {follow
                        ? !following && (
                              <Button outline className={cx('following')} onClick={handleFollow}>
                                  Following
                              </Button>
                          )
                        : !following && (
                              <Button primary className={cx('follow')} onClick={handleFollow}>
                                  Follow
                              </Button>
                          )}
                </div>
                <div className={cx('body')}>
                    <div className={cx('video')}>
                        <Video src={item.video} className={cx('video-tag')} />
                    </div>
                    <div className={cx('action')}>
                        <button
                            className={cx('btn')}
                            onClick={() => {
                                setPrimary(!primary);
                            }}
                        >
                            {primary ? (
                                <span className={cx('liked')}>
                                    <LikeIcon className={cx('like-icon')} />
                                </span>
                            ) : (
                                <span className={cx('icon')}>
                                    <LikeIcon className={cx('like-icon')} />
                                </span>
                            )}
                            <strong>700K</strong>
                        </button>
                        <button className={cx('btn')}>
                            <span className={cx('icon')}>
                                <CommentIcon className={cx('comment-icon')} />
                            </span>
                            <strong>700K</strong>
                        </button>
                        <button className={cx('btn')}>
                            <span className={cx('icon')}>
                                <SaveIcon className={cx('save-icon')} />
                            </span>
                            <strong>700K</strong>
                        </button>
                        <button className={cx('btn')}>
                            <span className={cx('icon')}>
                                <ShareIcon className={cx('share-icon')} />
                            </span>
                            <strong>700K</strong>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoContainer;
