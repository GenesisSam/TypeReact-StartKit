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
    return (
      <div className={styles.wrapper}>
        {Notification
          ? "Can use Notification API"
          : "Can't use Notification API "}
        <button>Notification!</button>
      </div>
    );
  }

  private onClick = () => {
    Notification.requestPermission(status => {
      if ((Notification as any).permission !== status) {
        console.log("Different noti permission!: ", status);
      }
    });
  };
}

export default connect(mapStateToProps)(Hello);
