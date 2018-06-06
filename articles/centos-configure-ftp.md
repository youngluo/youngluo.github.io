---
sidebar: false
---

# centos 配置 ftp

最近在学习 linux 下的服务器配置，在 linux 下设置 ftp ，所以在网上查找了一些资料，综合各路大神的经验总结了自己在 centos6.5 下的配置过程。

## 更新 yum 源

``` bash
yum check-update
yum update
```

## 安装 vsftp

``` bash
yum install vsftpd -y
```

## 添加 ftp 帐号和目录

``` bash
useradd -d /home/www/ -s /sbin/nologin user1
```

## 添加 user1 用户

``` bash
# 指定 user1 用户的主目录为 /home/www
-d /home/www/

# 限制 user1 用户不能远程登录，只能进行 ftp
-s /sbin/nologin
```

## 更改用户相应的权限设置

``` bash
# 更改用户 user1 的主目录为 /home
usermod -d /home user1

# 恢复用户 uer1
usermod -s /sbin/bash user1
```

## 修改账户密码

``` bash
passwd user1
```

## 配置 vsftp

编辑 vsftp 配置文件：

``` bash
vi /etc/vsftpd/vsftpd.conf
```

将配置文件中 `anonymous_enable=YES` 改为 `anonymous_enable=NO` 禁止匿名访问。

限制用户只能访问 `/home/www`，不能访问其他路径：

``` bash
# 限制访问自身目录
chroot_list_enable=YES

# 指定用户列表文件，该文件用于控制哪些用户可以切换到用户家目录的上级目录，每个用户名一行
chroot_list_file=/etc/vsftpd/chroot_list
```

以上操作可有以下几种搭配：

* 当 `chroot_list_enable=YES` `chroot_local_user=YES` 时，在 `/etc/vsftpd/chroot_list` 文件中列出的用户，可以切换到其他目录；未在文件中列出的用户，不能切换到其他目录。

* 当 `chroot_list_enable=YES` `chroot_local_user=NO` 时，在 `/etc/vsftpd/chroot_list` 文件中列出的用户，不能切换到其他目录；未在文件中列出的用户，可以切换到其他目录。

* 当 `chroot_list_enable=NO` `chroot_local_user=YES` 时，所有的用户均不能切换到其他目录。

* 当 `chroot_list_enable=NO` `chroot_local_user=NO` 时，所有的用户均可以切换到其他目录。

## 设置开机启动 vsftpd ftp 服务

``` bash
chkconfig vsftpd on

# 启动 vsftp 服务并测试登录

# 启动服务
service vsftpd start

# 重启服务
service vsftpd restart

# 停止服务
service vsftpd stop
```

## 相关问题解决

如果登录 ftp 后，不能上传文件和创建文件夹，需要设置写入权限

``` bash
# 设置 /home 目录下的所有文件及子目录的文件具备读、写、可执行权限
chmod -R 777 /home

# 是递归遍历子目录
-R
```
