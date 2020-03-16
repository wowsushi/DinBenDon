import Home from 'pages/Home'
import AddNew from 'pages/AddNew'
import InProgress from 'pages/InProgress'
import Finish from 'pages/Finish'

type ConfigType = {
    name: string;
    chineseName: string;
    path: string;
    // default: boolean;
    component: any;
    // display?: boolean;
    routes?: ConfigType[]
    exact?: boolean
}

const RouteConfig: ConfigType[] = [
    //     {
    //     name: 'Home',
    //     chineseName: '首页',
    //     path: '/',
    //     component: Home,
    //     exact: true
    // },
    {
        name: 'InProgress',
        chineseName: '进行中',
        path: '/inProgress',
        component: InProgress
    }, {
        name: 'Finish',
        chineseName: '已结束',
        path: '/finish',
        component: Finish,
        // routes: [{
        //     name: 'Mobile',
        //     path: '/electronics/mobile',
        //     component: Mobile
        // }, {
        //     name: 'Desktop',
        //     path: '/electronics/desktop',
        //     component: Desktop
        // }, {
        //     name: 'Laptop',
        //     path: '/electronics/laptop',
        //     component: Laptop
        // }]
    }, {
        name: 'AddNew',
        chineseName: '新增',
        path: '/addNew',
        component: AddNew,
    }]

export default RouteConfig