# front-end-template

##### 项目背景

> 前端react架构项目

### 技术架构

- 打包工具webpack

- 前端view层使用react

- react的状态管理采用redux

- react的异步解决方案为使用saga

- react的组件分为container components 和 视图组件

- 视图组件可采用storybook可视话开发

- 路由采用react-router


### 目录结构

	├── README.md                       项目介绍
	├── webpack.config.js               webpack的配置页面
	├── package.json                    项目依赖包
	├── src                             源码目录    
	│   ├── index.js                        入口文件
	│   ├── path                            请求地址配置目录
	│   ├── css                             样式资源 
	│   ├── images                          图片资源
	│   ├── pages                           页面资源
	│   ├── routes                          路由目录
	│   ├── store                           应用级数据（state）
	│   ├── actions                         所有actions存放
	│   ├── containers                      容器组件
	│   ├── components                      视图组件库           
	│   ├── reducer                         所有的reducer存放


	                                       


