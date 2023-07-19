import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/Layouts';
import Search from '~/pages/Search';
import Live from '~/pages/Live';
import config from '~/config';
// Public Routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, Layout: HeaderOnly },
    { path: config.routes.search, component: Search, Layout: null },
    { path: config.routes.live, component: Live },
];
//Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
