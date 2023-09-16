import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import VideoContainer from '~/components/VideoContainer';
import { videocontents } from './videocontent';
const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            {videocontents.map((videocontent, index) => {
                return (
                    <VideoContainer
                        key={index}
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/28027a06ad2c1281bdb7220a54d72dc0.jpeg?x-expires=1691812800&x-signature=5XzxThjVhVVS9mUhQDyd8Qcj5UE%3D"
                        atl="Tiên Hiền Thư Viện"
                        href="https://www.tiktok.com/music/nhạc-nền-Tiên-Hiền-Thư-Viện-7201464800772508417?is_from_webapp=1&sender_device=pc"
                        item={videocontent}
                    />
                );
            })}
        </div>
    );
}

export default Home;
