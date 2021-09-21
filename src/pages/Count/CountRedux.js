import { Component } from "react";
import { Card, Select, Input, Button, Collapse } from "antd";
import store from "../../redux/store";
import { createAddAction, createSubAction } from "../../redux/count_action";
import CountContainer from "../CountReactRedux/CountContainer"; // 容器组件

const { Option } = Select;
const { Panel } = Collapse;

class CountRedux extends Component {
  state = {
    selectValue: 0,
    selectList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  };

  handleChange = (value) => {
    this.setState({
      selectValue: Number(value),
    });
  };

  componentDidMount() {
    // 需要监听store的值得改变，store.getState()不会自动刷新页面
    store.subscribe(() => {
      this.setState({});
    });
  }

  render() {
    return (
      <Card style={{ margin: "0 20px" }}>
        <Collapse defaultActiveKey={["1"]}>
          <Panel header="redux测试" key="1">
            <Card style={{ margin: "0 20px" }}>
              <div>
                计算器（Redux) 求和结果为：
                <Input
                  style={{ width: 300 }}
                  placeholder="求和结果为："
                  value={store.getState()}
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

              <Button
                style={{ marginLeft: 8 }}
                onClick={() => this.handleClick("add")}
              >
                加
              </Button>
              <Button
                style={{ marginLeft: 8 }}
                onClick={() => this.handleClick("sub")}
              >
                减
              </Button>
              <Button
                style={{ marginLeft: 8 }}
                onClick={() => this.handleClick("addAsync")}
              >
                异步加
              </Button>
            </Card>
          </Panel>
        </Collapse>

        {/* react-router库测试 */}
        <Collapse style={{ marginTop: 30 }} defaultActiveKey={["1"]}>
          <Panel header="react-redux测试" key="1">
            {/* store使用react-redux的Provider传递，这里不需要写 */}
            <CountContainer></CountContainer>
          </Panel>
        </Collapse>
      </Card>
    );
  }

  handleClick = (type) => {
    const { selectValue } = this.state;
    switch (type) {
      case "add":
        store.dispatch(createAddAction(selectValue));
        break;
      case "sub":
        store.dispatch(createSubAction(selectValue));
        break;
      case "addAsync":
        setTimeout(() => {
          store.dispatch(createAddAction(selectValue));
        }, 1000);
        break;
      default:
        break;
    }
  };
}

export default CountRedux;
