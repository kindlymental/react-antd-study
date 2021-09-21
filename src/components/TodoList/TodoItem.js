import React, { Component } from "react";
import PubSub from "pubsub-js";
import { Row, Col, Button } from "antd";
import { withRouter } from 'react-router-dom'

class TodoItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <Row
        style={{ width: "100%" }}
        onClick={() => this.handleJumpDetail(item.index)}
      >
        <Col span={2}>编号：{item.index}</Col>
        <Col
          span={4}
          offset={1}
          dangerouslySetInnerHTML={{
            __html: "任务名称：" + item.title,
          }}
        ></Col>
        <Col span={2} offset={1}>
          时间：{item.time}
        </Col>
        <Col span={2} offset={12}>
          <Button type="primary" onClick={this.handleDeleteItem.bind(this)}>
            删除
          </Button>
        </Col>
      </Row>
    );
  }
  // 删除某项
  handleDeleteItem(e) {
    e.stopPropagation()  // 阻止冒泡
    const { deleteItem, item } = this.props;
    deleteItem(item.index);
  }
  // 跳转详情
  handleJumpDetail(index) {
    this.props.history.push(`/tododetail/${index}`);
  }

  /** 测试pubsub-js */
  componentDidMount() {
    this.token = PubSub.subscribe("TodoList", (_, data) => {
      console.log("----", data);
    });
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }
}

export default withRouter(TodoItem);
