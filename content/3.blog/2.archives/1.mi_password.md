---
title: 无法设置开机密码 😰 (解决方案)
description: 刷机有风险, 请不要像我这样随随便便给主力机刷机()
icon: material-symbols:folder-outline-rounded

badges:
  - value: 2025-07-11
    icon: material-symbols:nest-clock-farsight-analog-outline-rounded
    target: _blank

authors:
  - name: Rwagsu
    username: Rwagsu
    avatar: https://www.github.com/Rwagsu.png
    to: https://github.com/Rwagsu
    target: _blank
---

以前遇到过, 正好今天搞博客, 记录下()

::alert{type="warning" icon="lucide:triangle-alert"}
该设置仅适用于已解锁 BootLoader 设备.
::

## 症状
手机设置开机密码, 输入完后点击确定按钮变灰, 然后没有任何响应.

## 原因
frp 分区损坏.

## 修复方法
格式化 frp 分区即可解决问题.

老样子, 备份文件!

这里就不给出具体方案了(

因为我把 Bug 修了就没用过了(

要是我搞错给个删库指令就死定拉 (＃°Д°)