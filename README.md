<!--
 * @Author: DaQing Lu
 * @Date: 2020-03-20 20:42:04
 * @LastEditors: DaQing Lu
 * @LastEditTime: 2020-03-24 18:29:54
 * @Description: file content
 -->
# base64的图片上传 适用于头像上传
上传base64的单张图片 可用来做 头像上传



![](https://img.shields.io/badge/npm-6.14.2-orange.svg) 
![](https://img.shields.io/github/issues/ldq429/react-avatar-upload.svg) 
![](https://img.shields.io/github/forks/ldq429/react-avatar-upload.svg) 
![](https://img.shields.io/github/stars/ldq429/react-avatar-upload.svg) 
![](https://img.shields.io/github/license/ldq429/react-avatar-upload.svg)




基于 react 的 头像上传, [在线 demo](https://ldq429.github.io/react-avatar-upload/)

## Installation

```bash
npm install react-avatar-upload --save
```

## Usage

```javascript
import React from 'react';
import Avatar from 'react-avatar-upload';

class Demo extends React.Component {
  getImg = (img) => {
    console.log(img);
  };
  render() {
    return (<Avatar getImg={getImg} />)
  }
}
```

## API


| 属性 | 说明 | 类型 | 默认值
| --- | --- | --- | -- |
| getImg | function（必传） | 方法 | 该方法获取base64的img


## License
MIT
