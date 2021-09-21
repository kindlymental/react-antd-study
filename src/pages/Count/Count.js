import { Component } from "react";
import { Card, Select, Input, Button } from "antd";

const { Option } = Select;

class Count extends Component {
  state = {
    count: 0,

    selectValue: 0,
    selectList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  };

  handleChange = (value) => {
    this.setState({
      selectValue: Number(value),
    });
  };

  render() {
    return (
      <Card style={{ margin: "0 20px" }}>
        <div>
          求和结果为：
          <Input
            style={{ width: 300 }}
            placeholder="求和结果为："
            value={this.state.count}
            disabled
          ></Input>
        </div>

        <Select
          defaultValue="请选择"
          style={{ width: 120, marginTop: 30 }}
          onChange={this.handleChange.bind(this)}
        >
          {this.state.selectList.map((item) => {
            return (
              <Option key={item} value={item}>
                {item}
              </Option>
            );
          })}
        </Select>

        <Button style={{marginLeft: 8}} onClick={() => this.handleClick("sub")}>减</Button>
        <Button style={{marginLeft: 8}} onClick={() => this.handleClick("add")}>加</Button>
        <Button style={{marginLeft: 8}} onClick={() => this.handleClick("addAsync")}>异步加</Button>
      </Card>
    );
  }

  handleClick = (type) => {
    const { count, selectValue } = this.state;
    switch (type) {
      case "add":
        this.setState({
          count: count + selectValue,
        });
        break;
      case "sub":
        this.setState({
          count: count - selectValue,
        });
        break;
      case "addAsync":
        setTimeout(() => {
          this.setState({
            count: count + selectValue,
          });
        }, 1000);
        break;
      default:
        break;
    }
  };
}

export default Count;
