import React from "react";
import "./App.css";

function Test({ item, deleteinfo}) {
  return (
    <div>
      <p>{item.name}</p>
      <p>{item.info}</p>
      <button onClick={()=> deleteinfo(item.id)} >删除</button>
      <div>-------------  </div>
    </div>
  );
}

class App extends React.Component {
  state = {
    // 列表数据
    list: [
      {
        id: 1,
        name: "超级好吃的棒棒糖",
        price: 18.8,
        info: "开业大酬宾，全场8折",
      },
      {
        id: 2,
        name: "超级好吃的大鸡腿",
        price: 34.2,
        info: "开业大酬宾，全场8折",
      },
      {
        id: 3,
        name: "超级无敌的冰激凌",
        price: 14.2,
        info: "开业大酬宾，全场8折",
      },
    ],
  };


  //删除的回调函数
  deleteinfo = (msg) => {
    console.log(msg, '----msg')
    this.setState({
      list:this.state.list.filter(item => item.id !== msg)
    })
 
  }

  render() {
    return (
      <div>
        {this.state.list.map((item) => (
          <Test item={item} key={item.id} deleteinfo={this.deleteinfo}></Test>
        ))}
      </div>
    );
  }
}

export default App;
