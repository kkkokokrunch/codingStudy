import "./style.css";

var btn = document.createElement("button");
btn.innerHTML = "新增";
document.body.appendChild(btn);

btn.onclick = function () {
  var div = document.createElement("div");
  div.innerHTML = "item";
  document.body.appendChild(div);
};

//如果想对js文件进行hmr
if (module.hot) {
  module.hot.accept('./number', () => { //'./number'是要进行操作的模块
    Number() //要进行的操作
  })
}