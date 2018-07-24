# meituan

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



项目基于Vue全家桶，模仿美团外卖移动端制作。

实现页面：
	首页：数据mock美团原生移动端，实现了导航菜单和附近商家；
	地址页：实现了地址搜索，地址选择和右侧字母选择，滚动基于better-scroll插件实现。
	商店详情页：实现了商品分类展示，商家公告，选择商品数量等。
	评价页：实现了商家等级展示，复用了star组件。