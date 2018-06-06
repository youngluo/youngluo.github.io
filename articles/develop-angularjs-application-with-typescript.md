---
sidebar: false
---

# 用 TypeScript 开发 AngularJS 应用

> 考虑到一些老的项目仍在使用 AngularJS 1.x 开发，而 Angular 2+ 优先使用 TypeScript 开发，所以打算使用 TypeScript 来开发 AngularJS 1.x 的应用，希望能够对以后升级到 Angular 2+ 有所帮助。

其实使用 TypeScript 开发和使用 ES6 开发基本是一致的，关键是我们可以使用更好的特性、更简洁的语法来进行代码层面的优化。这篇文章主要介绍了在代码实践方面的一些心得。

## 模块

我们可以将各个功能模块进行分组，使用一个包含 `.module()` 的外壳来进行包装，把 module 的 name 属性 export 出去。

示例:

pages 模块定义

``` ts
import angular = require('angular')

export default angular
    .module('pages', [])
    .name
```

在项目的入口文件 index.ts 中引用 pages 模块

``` ts
import angular = require('angular')
import pages from './pages'

angular.module('app', [pages])
angular.bootstrap(document, ['app'])
```

## 组件

AngularJS 1.5+ 提供了 component 方法，弥补了基于组件层面开发的不足，该方法接收两个参数，第一个是组件名称，第二个是定义组件的配置项（本质上是简化版的指令定义对象）。

示例：

``` ts
// home.component.ts

import ctrl from './controller'
import html from './index.html'
import './index.scss'

export default {
    template: html,
    controller: ctrl
}
````

在 pages 模块中注册组件

``` ts
import angular = require('angular')
import Home from './home'

export default angular
    .module('pages', [])
    .component('home', Home)
    .name
```

组件的定义我是直接将配置项导出，把 html 模板文件和 controller 分离到单独的文件中进行开发；一个完整的组件还需要管理自己的样式，我们可以将它 import 进来，和模板文件一起通过 webpack 来进行打包管理。

## controller 和 service

controller 和 service 方法的第二个参数都是接收一个构造函数，所以可以直接 export 一个 class。

service.ts 实现

``` ts
export default class LogService {
    info(info) {
        console.log(info)
    }
}
```

controller.ts 实现

``` ts
export default class HomeCtrl {}
```

在 pages 模块中注册 service

``` ts
import log from '../services/log.service'

export default angular
    .module('pages', [])
    .component('home', Home)
    .service('log', log)
    .name
```

由于 controller 是直接在组件中使用的，所以不再需要在 module 下注册。

## directive 和 factory

directive 和 factory 的使用方式也是一致的（前提是 factory 返回一个对象），都是接收一个工厂函数；唯一不同的是，directive 必须返回一个指令定义对象，而 factory 可以返回任何数据类型。

directive.ts 实现

``` ts
export default class TipDirective {
    template = template
    restrict = 'A' // 1.5+版本建议都使用'A'，只做一些增强交互效果的操作
    scope = {};

    link (scope) {}
}
```

在 module 中定义

``` ts
import tip from 'directive.ts'

export default angular
    .module('pages', [])
    .directive('tip', () => new tip()) // 通过new来返回一个实例对象
    .name
```

## 依赖注入处理

关于依赖注入的处理，我们可以通过静态属性来帮助实现注入，下面以在 controller 中的使用为例。

``` ts
export default class TodoListCtrl {
    static $inject = ['log']

    constructor(private log) {
        this.log.info('info')
    }
}
```

## 类型声明文件获取

在 TypeScript 2.0 以上的版本，可通过 NPM 获取第三方库的类型声明文件。大多数情况下，类型声明包的名字与它们 NPM 包的名字相同，但是有 `@types/` 前缀。你也可以在[这里](http://microsoft.github.io/TypeSearch/)查找你需要的库。

例如

``` bash
npm install --save @types/angular
```

使用

``` ts
import angular = require('angular')
```

## 最后

以上是对近期使用 TypeScript 开发 AngularJS 1.x 应用的简单总结，如有错误，请及时指正。
示例项目地址[https://github.com/youngluo/angularjs-ts-boilerplate](https://github.com/youngluo/angularjs-ts-boilerplate)

## 参考文章

- [Angular 1.x 和 ES6 的结合](https://github.com/xufei/blog/issues/29)
- [AngularJS 1.x with TypeScript (or ES6) Best Practices](https://codepen.io/martinmcwhorter/post/angularjs-1-x-with-typescript-or-es6-best-practices)
