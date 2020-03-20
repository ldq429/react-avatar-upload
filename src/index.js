/*
 * @Author: DaQing Lu
 * @Date: 2020-03-15 19:03:44
 * @LastEditors: DaQing Lu
 * @LastEditTime: 2020-03-17 18:42:27
 * @Description: file content
 */
import React, {Component} from "react";
import "./css/_myupload.css";

class Upload extends Component {
  constructor(props) {
    super();
    this.state = {
      url: "",
      loading: false
    };
    this.handleClick = function () {
      window.avatar.click();
    };
    this.handleChange = e => {
      this.setState({
        loading: true
      });

      let file = e.target.files[0];
      //首先判断是否是图片
      if (!/image\/\w+/.test(file.type)) {
        alert("上传的不是图片");
        return false;
      }
      //在此限制图片的大小
      var imgSize = file.size;
      //35160  计算机存储数据最为常用的单位是字节(B)
      //在此处我们限制图片大小为2M
      if (imgSize > 2 * 1024 * 1024) {
        alert("上传的图片的大于2M,请重新选择");
        return false;
      }
      // 创建用来读取此文件的对象
      let reader = new FileReader();
      //使用该对象读取file文件
      reader.readAsDataURL(file);
      reader.onload = e => {
        //读取成功后返回的一个参数e，整个的一个进度事件

        //选择所要显示图片的img，要赋值给img的src就是e中target下result里面
        //的base64编码格式的地址
        const url = e.target.result;
        this.setState({
          url,
          loading: false
        });
        this.props.getImg(url);
      };
    };
  }

  render() {
    const {url, loading} = this.state;
    return (
      <>
        {
          url
            ?
            <div onClick={this.handleClick} className='thumbnail'>
              <img src={url} alt="图片加载失败"/>
            </div>
            :
            <div className='upload_box' onClick={this.handleClick}>
              {loading ? <p className='loading'>上传中...</p> : "+"}
            </div>
        }
        <input
          style={{width: 0, height: 0}}
          onChange={this.handleChange}
          type="file"
          id="avatar"
          name="avatar"
          accept="image/png, image/jpeg"
        />
      </>
    );
  }
}

export default Upload;