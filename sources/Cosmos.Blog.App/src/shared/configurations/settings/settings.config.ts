export interface SettingsConfiguration{
    publicPath: string,
    outputDir: string,
    assetsDir: string,
    lintOnSave: boolean,
    transpileDependencies:string[],
    baseURL:string
    title:string
    titleSeparator:string,
    titleReverse: boolean,
    abbreviation: string,
    devPort: number,
    copyright: string,
    keepAliveMaxNum: number,
    routerMode: string,
    routesWhiteList: string[],
    loadingText: string,
    tokenName: string,
    tokenTableName: string,
    storage: string,
    recordRoute: boolean,
    logo: string,
    i18n: string,
    errorLog: string[],
    loginInterception:boolean,
    loginRSA: boolean,
    authentication: string,
    rolesControl: boolean,
    uniqueOpened: boolean,
    defaultOpeneds: string[],
    debounce: string[],
    build7z: boolean,
    templateFolder: string,
    donation: boolean,
    openFirstMenu: boolean,
}
export const Settings : SettingsConfiguration={
    //开发以及部署时的URL，hash模式时在不确定二级目录名称的情况下建议使用""代表相对路径或者"/二级目录/"，history模式默认使用"/"或者"/二级目录/"
    publicPath: '/',
    //生产环境构建文件的目录名
    outputDir: 'dist',
    //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    assetsDir: 'static',
    //开发环境每次保存时是否输出为eslint编译警告
    lintOnSave: true,
    //进行编译的依赖
    transpileDependencies: ['vue-echarts', 'resize-detector'],
    //默认的接口地址 如果是开发环境和生产环境走sc-mock-server，当然你也可以选择自己配置成需要的接口地址
    baseURL: process.env.NODE_ENV === 'development' ? 'https://localhost:9991' : 'https://localhost:9991',
    //标题 （包括初次加载雪花屏的标题 页面的标题 浏览器的标题）
    title: 'Media Data Analysis Platform',
    //标题分隔符
    titleSeparator: ' - ',
    //标题是否反转 如果为false:"page - title"，如果为ture:"title - page"
    titleReverse: false,
    //简写
    abbreviation: 'sc-pro',
    //开发环境端口号
    devPort: 9999,
    //pro版本copyright可随意修改
    copyright: 'baron boshao.li@outlook.com',
    //缓存路由的最大数量
    keepAliveMaxNum: 99,
    //路由模式，可选值为 history 或 hash
    routerMode: 'hash',
    //不经过token校验的路由
    routesWhiteList: ['/login', '/register', '/callback', '/404', '/403'],
    //加载时显示文字
    loadingText: '正在加载中...',
    //token名称
    tokenName: 'token',
    //token在localStorage、sessionStorage、cookie存储的key的名称
    tokenTableName: 'token',
    //token存储位置localStorage sessionStorage cookie
    storage: 'localStorage',
    //token失效回退到登录页时是否记录本次的路由
    recordRoute: true,
    //是否显示logo，不显示时设置false，显示时请填写remixIcon图标名称，暂时只支持设置remixIcon
    logo: 'home-gear-line', //'vuejs-fill',
    //语言类型zh、en
    i18n: 'zh',
    //在哪些环境下显示高亮错误
    errorLog: ['development', 'production'],
    //是否开启登录拦截
    loginInterception: true,
    //是否开启登录RSA加密
    loginRSA: false,
    //intelligence（前端导出路由）和all（后端导出路由）两种方式
    authentication: 'intelligence',
    //是否开启roles字段进行角色权限控制（如果是all模式后端完全处理角色并进行json组装，可设置false不处理路由中的roles字段）
    rolesControl: true,
    //vertical gallery comprehensive common布局时是否只保持一个子菜单的展开
    uniqueOpened: false,
    //vertical布局时默认展开的菜单path，使用逗号隔开建议只展开一个
    defaultOpeneds: ['/sc'],
    //需要加loading层的请求，防止重复提交
    debounce: ['doEdit'],
    //npm run build时是否自动生成7z压缩包
    build7z: false,
    //代码生成机生成在view下的文件夹名称
    templateFolder: 'project',
    //是否显示终端donation打印
    donation: false,
    //画廊布局和综合布局时，是否点击一级菜单默认开启第一个二级菜单
    openFirstMenu: true,
}

