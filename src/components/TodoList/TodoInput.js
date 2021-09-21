import React, { Component } from "react";
import { Row, Col, Button, Input, message } from "antd";

class TodoInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputItem: {
        title: "",
        time: "",
      }
    };
  }

  render() {
    return (
      <div style={{ padding: "30px" }}>
        <Row type="flex" justify="center" align="middle">
          <Col span={8}>
            <Input
              type="text"
              placeholder="请输入内容"
              value={this.state.inputItem.title}
              onChange={(event) => {
                this.handleInputChange('title', event.target.value);
              }}
            />
          </Col>
          <Col style={{marginLeft: '8px'}}>
            <Input
              type="text"
              placeholder="请输入时间"
              value={this.state.inputItem.time}
              onChange={(event) => {
                this.handleInputChange('time', event.target.value);
              }}
            />
          </Col>
          <Col span={4} offset={1}>
            <Button type="primary" onClick={this.handleSubmit.bind(this)}>
              确认提交
            </Button>
          </Col>
        </Row>
      </div>
    );
  }

  // 输入框
  handleInputChange(key, value) {
    let item = this.state.inputItem
    item[key] = value
    this.setState({
      inputItem: item
    })
  }

  // 提交
  handleSubmit() {
      const {handleAddItem} = this.props
      if (!this.state.inputItem.title || !this.state.inputItem.time) {
        message.info('请输入内容！');
        return
      }
      handleAddItem(this.state.inputItem)
      this.setState({
          inputItem: {}
      })
  }
}

export default TodoInput;
