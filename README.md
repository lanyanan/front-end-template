# front-end-template

##### 项目背景

> 前端react架构项目

##### 技术架构

- 打包工具webpack

- 前端view层使用react

- react的状态管理采用redux

- react的异步解决方案为使用saga

- react的组件分为container components 和 视图组件

- 视图组件可采用storybook可视话开发

- 路由采用react-router

##### 项目目录

- src
	- js
		- components  存放view视图组件
		- reducer	  存放各个容器组件的reducer
		- actions	  存放各个容器组件的action
		- container   存放容器组件
		- router      存放路由
		- saga        用来进行异步action的处理
		- store       用来生成存放数据的顶层组件
		- index.js    定义项目的入口文件
	- img
	- css
		- style.css
	- libs
- dist
- webpack.config.js
- packjson.json


