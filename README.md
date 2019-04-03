# 微明外卖

## 项目介绍

- 1. 项目开发准备
  - 项目描述
  - 技术选型
  - API 接口
- 2. 开启项目开发
  - 脚手架创建项目
  - 安装所有依赖/指定依赖
  - 开发环境运行
  - 生产环境打包与发布
- 3. 搭建项目整体界面结构
  - stylus
    - 结构化，变量，函数/mixin(混合)
  - vue-router
    - `router-view/router-link/keep-alive`
    - `$router`: 路由器对象，包含一些操作路由的功能函数，来实现编程式导航（跳转路由）
    - `$route`：当前路由对象，一些当前路由信息数据的容器，`path/meta/query/params`
  - 项目路由拆分
  - 底部导航组件：`FooterGuide`
  - 导航路由组件：`Site/Search/Order/Profile`
- 4. 抽取组件
  - 头部组件：`HeaderTop` 通过`slot`来实现组件通信标签结构
  - 商家列表组件：`ShopList`
- 5. 登录路由组件
  - 静态组件
  - `FooterGuide` 的现实/隐藏；通过路由的`meta`

- 6. 后台仙姑
  - 启动后台项目，理解前后台分离
  - 测试后台接口：使用postman
  - 修正接口文档

- 7. 前后台交互
  - ajax 请求库：axios
  - ajax 请求函数封装：axios+promise
  - 接口请求函数封装：每个后台接口

- 8. 异步数据

- 9. 登录/注册

### 项目描述

1. 外卖 Web App(SPA)
2. 包括 商家，商品，购物车，用户等多个子模块
3. 使用 vue 全家桶+ES6+Webpack 等前段最新最热的技术
4. 采用模块化、组件化、工程化的模式开发

### 技术选型

- 前台数据处理/交互/组件化
  - vue
  - vue-router
  - vuex 应用状态管理
  - mint-ui 组件库构建界面
  - vue-lazyload 图片懒加载
  - 滑动库
    - vue-scroller
    - better-scroll
    - swiper
  - 日期处理：
    - moment
    - date-fns
- 前后台交互
  - mock数据：mockjs 模拟后台数据接口
  - 接口测试：postman
  - ajax请求
    - vue-resource
    - axios
- 模块化
  - ES6
  - babel
- 项目构建/工程化
  - webpack
  - vue-cli
  - eslint
- CSS预编译器
  - stylus

### 前段路由

- 一级路由
  - 首页
    - /site
    - Site.vue
  - 搜索
    - /search
    - Search.vue
  - 订单
    - /order
    - Order.vue
  - 个人
    - /profile
    - Profile.vue
  - 登录
    - /login
    - Login.vue
  - 商家
    - /seller
    - Seller.vue
- 二级路由（商家的）
  - 商家商品
    - /goods
    - Goods.vue
  - 商家评价
    - /ratings
    - /Ratings.vue
  - 商家信息
    - /info
    - Info.vue

- 首页/搜索/订单/个人：显示底部导航
- 登录/商家：不显示底部导航

### API 接口

- 全程：前后台交互API接口
- 重要概念
  - API(接口)
  - 接口文档
  - 对接口
  - 联调
  - 前后台分离
  - mock数据

### 项目 vue 组件

- 重要概念
  - 模块与组件
  - 模块化/组件化/工程化
- vue组件
  - 路由组件：src/pages 下
  - 一般组件：src/components 下
  - APP
    - FooterGuide
    - 路由
      - site
        - HeaderTop
        - SellerList
        - Stars
      - Search
        - HeaderTop
      - Order
        - HeaderTop
      - Profile
        - HeaderTop
      - Login
        - AlerTip
      - Seller
        - SellerHeader
          - Stars
        - 路由
          - SellerGoods
            - CartControl
            - Food
              - RatingSelect
          - SellerRatings
            - RatingSelect
            - Split
            - Stars
          - Seller
            - Split
            - Stars

### 样式/布局/效果

- stylus 编写模块化CSS
- 图标字体
- 移动端1px 边框问题
- 移动端经典的 css sticky footer 布局
- flex 弹性布局

## 应用开发

### 开启项目开发

#### 使用 `vue-cli` 搭建项目

1. [vue-cli](https://github.com/vuejs/vue-cli) 是 vue 官方提供的用于搭建基于 vue+webpack+es6 项目的脚手架工具
2. 操作

```sh
# npm i vue-cli -g
# vue init webpack client
# cd client
# npm install
# npm run dev
访问 localhost:8080
```

#### 项目结构分析

- client
  - build => webpack 相关配置目录（基本不需要修改）
  - config => webpack 相关的配置目录（基本不需要修改）
    - index.js => 指定的**后台服务的端口号**和**静态资源目录** (自动打开浏览器/配置代理)
  - node_modules
  - src => 源码目录
    - main.js 应用入口
  - static => 静态资源目录
  - .babelrc => babel配置文件
  - .editorconfig => 通过编辑器的编码/格式进行一定的配置
  - .eslintignore => eslint 检查忽忽略的配置
  - .eslintrc.js => eslint 检查的配置
  - .gitignore => git 版本管制忽略的配置
  - index.html => 主页面文件
  - package.json => 应用包配置文件
  - README.md => 应用描述说明的 readme 文件

#### 编码测试与打包发布项目

1. 编码测试

`npm run dev`

访问：http://localhost:8080

编码，自动编译打包（HMR），查看结果

2. 打包发布

```sh
# npm run build
# npm i serve -g
# serve dist
```

访问：http://localhost:5000

### 资源准备

#### 相关概念

1. **标注图(设计稿)**：对应界面各个组成元素进行坐标/大小/颜色等进行标签的界面图
2. **切图**：将应用界面的一些静态图形部分，通过PS工具剪裁生成的图片
3. **图片 base64**: 样式中引用的小图片，在 webpack 打包会自动处理转换为样式内部的 base64 编码字符串
4. **2px 与 3px 图**：不同手机的屏幕密度不一样，一般都在 2以上（如 iphone6 为2，iphone6s 为3），为了是适配不同的手机设备，UI设计师为一个图片制作了2x和3x的2套图片（图形一样，但大小不一样）

#### iconfont 字体图标

1. iconfont 介绍

1.1. 意义：使用字体用 HTML 代码以文本的形式直接在网页中画 icon 小图标

1.2 为什么使用 icon 字体图标：使用图标字体可大大减少图标维护工作量

1.3 灵活性：轻松地改变图标的颜色或其他 CSS 效果

1.4 可扩展性：改变图标的大小，就像改变字体大小一样容易

1.5 矢量性：图标是矢量的，与像素无关，缩放图标不会影响清晰度

1.6 兼容性：字体图标支持所有现代浏览器（包括糟糕的IE6）

1.7 本地使用：通过添加定制字体到你的本地系统，可以在各种不同的设计和编辑应用程序中使用它们

2. fonticon使用（本地没有 svg）

2.1 需要依赖网站制作

2.2 [阿里巴巴矢量图](http://www.iconfont.cn)

- 1. 注册账户
- 2. 添加购物和
- 3. 点击购物车，图标添加到项目中（添加至项目按钮）
- 4. 下载到本地使用
  - Font class 按钮显示 css文件的 CDN 地址
  - 下载值本地按钮

3. iconfont 使用（本地有 SVG）

3.1 图标字体：使用IcoMoon 将 SVG 格式的图标转换成图标字体及样式

3.2 进入 [icoMoon 官网](http://icomoon.io)

3.3 点击右下角 【IcoMoon App】进入处理页面

3.4 点击左上角 【Import Icons】，选择 resource\SVG\*.svg， 上传显示到页面

3.5 在页面选择所有 svg, 点击右下角 【Generate Font】生成图标字体样式

3.6 点击左上角 【Preferences】指定 Font-Name 为 sell-icon，点击右下角 【Download】下载到本地 "iconmoon.zip"

3.7 解压 zip包，访问demo.html 测试

3.8 项目需要的是 fonts 和 style.css

4. 页面中引入在线的 iconfont 样式

```sh
# vim idnex.html
  <link rel="stylesheet" href="http://at.alicdn.com/t/font_xxxx.css">
```

### 项目源码目录设计

- api => 与后台交互模块目录
- common => 通用资源目录，如 fonts/img/stylus
- components => 非路由组件目录
- filters => 自定义过滤器模块目录
- mock => 模拟数据接口目录
- pages => 路由组件目录
- router => 路由器目录
- store => 状态管理目录
- App.vue => 应用组件
- main.js => 入口JS

### Stylus

#### 当前主流的三中CSS预编译器

- less
- sass
- stylus

#### 安装 stylus 依赖包

- stylus 包： stylus 转传成 CSS
- stylus-loader 包：webpack 理解 stylus

`npm i stylus stylus-loader --save-dev`

#### 编写样式

```css
<style lang="stylus" rel="stylesheet/stylus">

</style>
```

#### 创建基本stylus 文件

```sh
# mkdir common/stylus
# cd common/stylus
# vim mixins.styl
$green = #02a774
$yellow = #f5a100
$bc = #e4e4d4

// 一像下素边框
bottom-border-1px($color)
  position relative
  border none
  &:after
    content ''
    position absolute
    left 0
    bottom 0
    width 100%
    height 1px
    background-color $color
    transform scaleY(0.5)

// 一像素上边框
top-border-1px($color)
  position relative
  border none
  &:before
    content ''
    position absolute
    left 0
    bottom 0
    width 100%
    height 1px
    background-color $color
    transform scaleY(0.5)

// 根据像素比缩放 1px 像素边框
@media only screen and (-webkit-device-pixel-ratio: 2)
  .border-1px
    &::before
      transform scale(.5)

@media only screen and (-webkit-device-pixel-ratio: 3)
  .border-1px
    &::before
      transform scaleY(.333333)

// 根据像素比来使用 2x图 3x图
bg-image($url)
  background-image url($url + "@2x.png")
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3)
    background-image url($url + "@3x.png")

// 清楚浮动
clearFix()
  *zoom 1
  &::after
    content ''
    display block
    clear both

// 对齐到正中央
alignCenter($width, $height)
  position absolute
  top 50%
  left 50%
  width w = $width
  height h = $height
  margin-left (w/2)
  margin-top (h/2)
  // width $width
  // height $height
  // margin-left -(@width / 2)
  // margin-top -(@height / 2)
```

### Vue 组件化

#### 分析应用的整体 vue 组件结构

- components ---------- 非路由组件目录
  - FooterGuides ---------- 底部组件目录
    - FooterGuide.vues ---------- 底部组件 vue
- pages ---------- 路由组件目录
  - Site ---------- 首页组件目录
    - Site.vue ---------- 首页组件 vue
  - Search ---------- 搜索组件目录
    - Search.vue ---------- 搜索组件目录
  - Order ---------- 订单组件目录
    - Order.vue ---------- 订单组件 vue
  - Profile ---------- 个人组件目录
    - Profile.vue ---------- 个人组件 vue
- App.vue ---------- 应用根组件 vue
- main.js ---------- 应用入口 js

#### 各个 vue 组件的基本代码

```js
<template>
  <div>
    site
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>

```

#### 引入 reset 样式

[reset.css](https://meyerweb.com/eric/tools/css/reset/)

/static/css/reset.css

```css
/**
 * Eric Meyer's Reset CSS v2.0 (http://meyerweb.com/eric/tools/css/reset/)
 * http://cssreset.com
 */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header,
menu, nav, output, ruby, section, summary,
time, mark, audio, video, input {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: normal;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, menu, nav, section {
  display: block;
}

body {
  line-height: 1;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* custom */
a {
  color: #7e8c8d;
  text-decoration: none;
  -webkit-backface-visibility: hidden;
}

li {
  list-style: none;
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-track-piece {
  background-color: rgba(0, 0, 0, 0.2);
  -webkit-border-radius: 6px;
}

::-webkit-scrollbar-thumb:vertical {
  height: 5px;
  background-color: rgba(125, 125, 125, 0.7);
  -webkit-border-radius: 6px;
}

::-webkit-scrollbar-thumb:horizontal {
  width: 5px;
  background-color: rgba(125, 125, 125, 0.7);
  -webkit-border-radius: 6px;
}

html, body {
  width: 100%;
  height: 100%;
}

body {
  -webkit-text-size-adjust: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

/*显示省略号*/
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap
}
```

```sh
# vim /index.html
# vim idnex.html
  <link rel="stylesheet" href="/static/css/reset.css">
  <link rel="stylesheet" href="http://at.alicdn.com/t/font_xxxx.css">
```

#### 移动端

1. viewport

`<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">`

2. 解决点击相应延时0.3s 问题

```html
<script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>
<script>
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}
if(!window.Promise) {
  document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>')
}
</script>
```

### 引入 vue-router

#### 下载 vue-router

```sh
# npm i vue-router --save
```

#### 编码

```sh
# vim router/index.js

import Vue from 'vue'
import Router from 'vue-router'
import Site from '@/pages/Site/Site'
import Search from '@/pages/Search/Search'
import Order from '@/pages/Order/Order'
import Profile from '@/pages/Profile/Profile'

// 生命使用插件
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Site
    },
    {
      path: '/site',
      name: 'site',
      component: Site
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})
```

### FooterGuide 组件

#### FooterGuide 说明

1. 通过编程式导航实现路由的切换显示($router)
2. 通过动态 class 和 $route.path 来实现 tab 样式切换
3. 通过阿里图标库，显示导航图标

### swiper 轮播图

`npm i swiper --save`

### 后台应用

1. 前后台分离的项目：前台应用于后台应用
2. 后台应用负责处理前台应用提交的请求，并给前台应用返回 json 数据
3. 前台应用负责展现数，与用户交互，与后台应用交互

#### 运行后台应用

1. 确保启动 **mongodb 服务**
2. 启动服务器应用: `npm start`

### 封装 ajax 请求函数

```sh
# npm i --save axios
```

### 配置代理实现跨域 ajax 请求

```sh
# vim config/index.js
  // 蒙蔽浏览器可以进行跨域
  proxyTable: {
    '/api': { // 匹配所有已 '/api' 开头的请求路径
      target: 'http://localhost:4000', // 代理目标的基础路径
      // secure: true, // https接口，需要配置这个参数
      changeOrigin: true, // 支持跨域
      pathRewrite: { // 重写路径：去掉路径中开头的'/api'
        '^/api': ''
      }
    }
  }

# vim src/api/http.js
  import {get} from './http'
  const BASE_URL = 'api'
  export const address = (geohash) => get(`${BASE_URL}/position/${geohash}`)
```

### vuex管理状态

```sh
下载 vuex
# npm i --save vuex

定义 state
# vim src/store/state.js
  export default {
    longitude: 116.36867, // 经度
    latitude: 40.10038, // 维度
    address: {}, // 地址信息
    categories: [], // 分类信息
    shops: [] // 商家信息
  }
```

#### 异步数据

- 封装 ajax
  - promise+axios 封装 ajax 请求的函数
  - 封装每个接口对应的请求函数（能根据接口定义ajax 请求函数）
  - 解决ajax 的跨域问题：配置代理
- vuex编码
  - store/index|state|mutations|actions|getters|mutations-types
  - 设计state: 后台获取的数据
  - 实现 actions
    - 定义异步action: async/await
    - 流程：发 ajax 获取数据，commit 给 mutation
  - 实现 mutations: 给状态赋值
  - 实现 index: 创建 store 对象
  - main.js 配置 store
- 组件异步显示数据
  - 在 mounted() 通过 $store.dispatch('actionName') 来异步获取后台数据到state中
  - mapState(['xx'])读取 state中数据到组件中
  - 在模板中显示 xx 的数据
- 模板中显示数据的来源
  - data: 自身的数据（内部改变）
  - props: 外部传入的数据（外部改变）
  - computed: 根据data/props/别的comput/state/getters
- 异步显示轮播图
  - 通过 vuex 获取 foodCategories 数组（发请求，读取）
  - 对数据进行整合计算（一维变为特定的二维数组）
  - 使用 Swiper 显示轮播，如何在界面更新之后创建 Swiper 对象？
    - 使用回调 + $nextTick()
    - 使用 watch + $nextTick()

### 登錄注冊功能

- [容联-云通讯](https://www.yuntongxun.com/)

- `npm i --save mint-ui`

#### 按需打包

```sh
# npm i --save-dev babel-plugin-component
# vim .babelrc
  "plugins": ["transform-runtime", ["component", [
    {
      "libraryName": "mint-ui",
      "style": true
    }
  ]]]

```
