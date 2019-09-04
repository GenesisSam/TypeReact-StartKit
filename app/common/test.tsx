import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const styles = require("./test.scss");

function mapStateToProps(state: any) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ dispatch }, dispatch);
}

interface IProps
  extends ReturnType<typeof mapStateToProps>,
    ReturnType<typeof mapDispatchToProps> {}

class Hello extends React.Component<IProps> {
  public componentDidMount() {
    this.props.dispatch({
      type: "HELLO!"
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello);
