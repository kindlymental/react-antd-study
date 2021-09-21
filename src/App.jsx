import React, { Component, Fragment, lazy, Suspense } from "react";
import { Menu, Icon, Breadcrumb } from "antd";
import { Link, Route, Switch, Redirect } from "react-router-dom";

// import Home from "./pages/Home/Home";
// import TodoList from "./pages/TodoList/TodoList";
// import TodoDetail from "./pages/TodoList/TodoDetail";
// import Count from "./pages/Count/Count";
// import CountRedux from "./pages/Count/CountRedux";  // 测试redux
// import CountReactRedux from './pages/CountReactRedux/CountContainer'  // 测试react-redux容器组件

// 懒加载
const Home = lazy(() => import("./pages/Home/Home"));
const TodoList = lazy(() => import("./pages/TodoList/TodoList"));
const TodoDetail = lazy(() => import("./pages/TodoList/TodoDetail"));
const Count = lazy(() => import("./pages/Count/Count"));
const CountRedux = lazy(() => import("./pages/Count/CountRedux"));
const CountReactRedux = lazy(() =>
  import("./pages/CountReactRedux/CountContainer")
);

const { SubMenu } = Menu;
class App extends Component {
  render() {
    return (
      <Fragment>
        <Menu
          style={{
            width: 256,
            display: "inline-block",
            position: "absolute",
            top: 0,
          }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>后台管理系统</span>
              </span>
            }
          >
            <Menu.ItemGroup key="g1" title="首页">
              <Menu.Item key="1">
                <Link to="/home">首页</Link>
              </Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key="g2" title="我的任务">
              <Menu.Item key="2">
                <Link to="/todolist">任务待办</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/count">计算器</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/countredux">计算器Redux</Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/countreactredux">计算器ReactRedux</Link>
              </Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>

        <div
          style={{
            display: "inline-block",
            width: "calc(100% - 256px)",
            marginLeft: "256px",
          }}
        >
          <Breadcrumb style={{ padding: 20 }}>
            <Breadcrumb.Item href="/home">
              <Icon type="home" />
              <span>首页</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Application</Breadcrumb.Item>
          </Breadcrumb>

          <Switch>
            <Suspense fallback={<span>加载中...</span>}>
              <Route path="/home" component={Home}></Route>
              <Route path="/todolist" component={TodoList}></Route>
              <Route path="/tododetail" component={TodoDetail}></Route>
              <Route path="/count" component={Count}></Route>
              <Route path="/countredux" component={CountRedux}></Route>
              <Route
                path="/countreactredux"
                component={CountReactRedux}
              ></Route>
              <Redirect to="/home"></Redirect>
            </Suspense>
          </Switch>
        </div>
      </Fragment>
    );
  }
}

export default App;
