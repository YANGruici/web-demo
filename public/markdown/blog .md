# 个人博客

## nvm管理node
1.如果已经安装了要先卸载干净nodejs

进入控制面板找到nodejs卸载，删除![img-3.png](C:\Users\Yangruixi\Desktop\web-demo\src\assets\image\img-3.png)  
进入系统信息的高级系统设置的环境变量，找到nodejs相关设置，删除
![img-2.png](C:\Users\Yangruixi\Desktop\web-demo\src\assets\image\img-2.png)  
![img-4.png](C:\Users\Yangruixi\Desktop\web-demo\src\assets\image\img-4.png)  
2.安装nvm  
[nvm官网](https://nvm.uihtm.com/) 官网有教程，记住安装node要***管理员身份运行cmd***
```
查看 nvm 版本： nvm -v
查看可下载的 nodejs 版本： nvm list available 
下载指定版本的 nodejs ： nvm install [nodejs版本号]
卸载指定版本的 nodejs ： nvm uninstall [nodejs版本号]
查看系统上下载过的 nodejs 版本：nvm ls
切换目前使用的 nodejs 版本： nvm use [nodejs版本号]
想了解更多指令可通过 nvm help 指令查看
```

## markdown文件增强
```
npm i -D vuepress-plugin-md-enhance
```
总结学习实现中学到的知识、遇到的困难与解决方法。

