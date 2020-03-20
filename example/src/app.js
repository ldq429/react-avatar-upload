import React from "react";
import {render} from "react-dom";
import AvatarUpload from "../../src";
const getImg = img => {
  console.log('img:', img);
}
const App = () => <AvatarUpload getImg={getImg}/>;
render(<App/>, document.getElementById("root"));