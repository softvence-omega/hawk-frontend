import { connect } from "react-redux";
import { Component } from "react";

type Props = {};

type State = {};

export class Demo extends Component<Props, State> {
  state = {};

  render() {
    return <div>Demo</div>;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
