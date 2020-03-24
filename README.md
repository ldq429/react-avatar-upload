<!--
 * @Author: DaQing Lu
 * @Date: 2020-03-20 20:42:04
 * @LastEditors: DaQing Lu
 * @LastEditTime: 2020-03-24 18:06:38
 * @Description: file content
 -->
# base64的图片上传 适用于头像上传
上传base64的单张图片 可用来做 头像上传

基于 react 的 头像上传, [在线 demo](https://ldq429.github.io/AvatarUpload/)

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
对于标签云可以设置一些自定义属性，具体如下：

| 属性 | 说明 | 类型 | 默认值
| --- | --- | --- | -- |
| getImg | function（必传） | 方法 | 该方法获取base64的img


## License
MIT
