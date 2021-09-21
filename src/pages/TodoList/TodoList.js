import React, { Component } from "react";
import TodoItem from "../../components/TodoList/TodoItem";
import TodoInput from "../../components/TodoList/TodoInput";
import PubSub from "pubsub-js";
import { reqTodoList } from "../../services/login";
import { List, message } from "antd";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputItem: {
        title: "",
        time: "",
      },

      todoList: [],
    };
  }

  componentDidMount() {
    // 请求数据
    const param = {};
    reqTodoList(param).then((res) => {
      if (res && res.status === 200) {
        this.setState({
          todoList: res && res.data.result,
        });
      } else {
        message.error('请求失败！')
      }
    });
  }

  render() {
    return (
      <div>
        <TodoInput handleAddItem={this.handleAddItem.bind(this)}></TodoInput>

        <List
          style={{ margin: "30px 40px" }}
          dataSource={this.state.todoList}
          renderItem={(item) => (
            <List.Item>
              <TodoItem
                key={item.index}
                item={item}
                deleteItem={this.handleDeleteItem.bind(this)}
              ></TodoItem>
            </List.Item>
          )}
          footer={
            <div>
              <b>liuyilan</b> author
            </div>
          }
        ></List>
      </div>
    );
  }

  // 添加
  handleAddItem(item) {
    this.setState(
      {
        todoList: [
          ...this.state.todoList,
          {
            index:
              this.state.todoList[this.state.todoList.length - 1].index + 1,
            ...item
          },
        ]
      },
      () => {
        PubSub.publish("TodoList", {
          name: "lyl",
        });
      }
    );
  }

  // 删除某项
  handleDeleteItem(index) {
    const list = [...this.state.todoList];
    list.forEach((e, i) => {
      if (e.index === index) {
        list.splice(i, 1);
        return;
      }
    });

    this.setState({
      todoList: list,
    });
  }
}

export default TodoList;
