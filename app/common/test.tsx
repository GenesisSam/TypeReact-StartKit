import * as React from "react";
import { Dispatch, connect } from "react-redux";

const styles = require("./test.scss");

interface IProps {
  dispatch: Dispatch<any>;
}

function mapStateToProps(state: any) {
  return {};
}

class Hello extends React.Component<IProps> {
  public componentDidMount() {
    this.props.dispatch({
      type: "HELLO!",
    });
  }

  public render() {
    return <div className={styles.wrapper}>Hello world with typescript</div>;
  }
}

export default connect(mapStateToProps)(Hello);
