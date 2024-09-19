# 个人博客

## nvm管理node
- 1.如果已经安装了要先卸载干净nodejs  
进入控制面板找到nodejs卸载，删除  
[![pAFwSEQ.png](https://s21.ax1x.com/2024/08/24/pAFwSEQ.png)](https://imgse.com/i/pAFwSEQ)   
进入系统信息的高级系统设置的环境变量，找到nodejs相关设置，删除  
[![pAFwPCn.png](https://s21.ax1x.com/2024/08/24/pAFwPCn.png)](https://imgse.com/i/pAFwPCn)  
[![pAFwkvV.png](https://s21.ax1x.com/2024/08/24/pAFwkvV.png)](https://imgse.com/i/pAFwkvV)
- 2.安装nvm  
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



