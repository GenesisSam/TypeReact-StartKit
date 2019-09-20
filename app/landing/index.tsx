import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { FormattedMessage } from "react-intl";
import { IAppState } from "app/rootReducer";

function mapStateToProps(state: IAppState) {
	return {
		...state,
	};
}

function mapDispatchToProps(dispatch: Dispatch) {
	return bindActionCreators({ testAction: () => ({ type: "testAction" }) }, dispatch);
}

interface IProps extends ReturnType<typeof mapStateToProps>, ReturnType<typeof mapDispatchToProps> {}

class Hello extends React.Component<IProps> {
	public componentDidMount() {
		this.props.testAction();
	}

	public render() {
		return (
			<div>
				{Notification ? "Can use Notification API" : "Can't use Notification API "}
				<button>Notification!</button>
				<FormattedMessage id="hello" />
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
	mapDispatchToProps,
)(Hello);
