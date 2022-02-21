(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{424:function(t,s,a){"use strict";a.r(s);var e=a(16),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("如何使用 vuepress 搭建一个简单的博客呢？")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("使用 vuepress 初始化项目")])]),t._v(" "),a("li",[a("p",[t._v("配置 mini 主题")])])]),t._v(" "),a("h2",{attrs:{id:"创建并进入一个新目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建并进入一个新目录"}},[t._v("#")]),t._v(" 创建并进入一个新目录")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" vuepress-starter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" vuepress-starter\n")])])]),a("h2",{attrs:{id:"使用包管理器进行初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用包管理器进行初始化"}},[t._v("#")]),t._v(" 使用包管理器进行初始化")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" init -y\n")])])]),a("p",[t._v("输出结果如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/5120964/150900330-4b6d69f4-1fa7-4eed-9c4d-765bb7017466.png",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"将-vuepress-安装在本地"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将-vuepress-安装在本地"}},[t._v("#")]),t._v(" 将 vuepress 安装在本地")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -D vuepress\n")])])]),a("h2",{attrs:{id:"创建第一篇文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建第一篇文档"}},[t._v("#")]),t._v(" 创建第一篇文档")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" docs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'# Hello VuePress'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" docs/README.md\n")])])]),a("h2",{attrs:{id:"在-package-json-中添加一些-scripts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-package-json-中添加一些-scripts"}},[t._v("#")]),t._v(" 在 "),a("code",[t._v("package.json")]),t._v(" 中添加一些 scripts")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"docs:dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress dev docs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"docs:build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress build docs"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"在本地启动服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在本地启动服务器"}},[t._v("#")]),t._v(" 在本地启动服务器")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run docs:dev\n")])])]),a("p",[t._v("运行输出结果如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/5120964/150904984-c8dd356b-6820-4499-a79f-923b60d288a3.png",alt:"image"}})]),t._v(" "),a("p",[t._v("浏览器打开 localhost:8080 显示如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/5120964/150905169-3871fee9-9ee6-4308-9485-ce822c36191b.png",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"安装-vuepress-theme-mini"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-vuepress-theme-mini"}},[t._v("#")]),t._v(" 安装 vuepress-theme-mini")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i vuepress-theme-mini -D\n")])])]),a("h2",{attrs:{id:"添加主题配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加主题配置"}},[t._v("#")]),t._v(" 添加主题配置")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// docs/.vuepress/config.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'简单博客'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("discription")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'通过 vuepress 搭建的简单博客'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("theme")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mini'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("themeConfig")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("siteName")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'我的博客'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("smoothScroll")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("lastUpdated")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Last Updated'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("author")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lucky8jx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("navbar")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("nav")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("text")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'首页'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("link")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("text")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'归档'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("link")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/archive/'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"修改之前创建的第一篇文档-docs-readme-md"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改之前创建的第一篇文档-docs-readme-md"}},[t._v("#")]),t._v(" 修改之前创建的第一篇文档 "),a("code",[t._v("docs/README.md")])]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token front-matter-block"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token front-matter yaml language-yaml"}},[t._v("layout: Pager")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])])]),a("p",[t._v("在本地重新启动服务器，所得结果如下:")]),t._v(" "),a("img",{attrs:{width:"588",alt:"1643092589",src:"https://user-images.githubusercontent.com/5120964/150924385-46b6736f-d908-44ef-8b37-911d56a67866.png"}}),t._v(" "),a("h2",{attrs:{id:"新增一篇文章-docs-post-it-xxx-md"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新增一篇文章-docs-post-it-xxx-md"}},[t._v("#")]),t._v(" 新增一篇文章 "),a("code",[t._v("docs/post/it/xxx.md")])]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token front-matter-block"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token front-matter yaml language-yaml"}},[t._v("date: 2022-01-21\ntitle: vscode 常用快捷方式")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n\n以下是我收集到的，我个人感觉比较常用和好用的一些 vscode 快捷方式。\n\n主要包括：\n\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" 主命令框\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" 编辑器与窗口管理\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" 代码编辑\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- more --\x3e")]),t._v("\n....\n")])])]),a("p",[t._v("在本地重新启动服务器，所得结果如下:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/5120964/150926381-e38b5c0a-c591-48e9-839f-4d1575241435.png",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"添加归档页面-docs-archive-readme-md"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加归档页面-docs-archive-readme-md"}},[t._v("#")]),t._v(" 添加归档页面 "),a("code",[t._v("docs/archive/README.md")])]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token front-matter-block"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token front-matter yaml language-yaml"}},[t._v("layout: Archive\npostsDir: ^/posts/.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])])]),a("p",[t._v("重启本地服务器，结果如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/5120964/150927067-81d1cd0f-0ed2-4658-820d-3a12dbbefbd3.png",alt:"image"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);