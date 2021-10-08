import React, { Component } from "react";
import { connect } from "react-redux";
import { fetch_list_sg } from "../../../redux/actions/movieAction";

export class ListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetch_list_sg();
  }

  handleRefresh = () => {
    this.handleFetch({ refresh: true });
  };

  handleMore = () => {
    this.handleFetch({ refresh: false });
  };

  handleFetch = ({ params, refresh }) => {
    const { fetch_list_sg, list, current } = this.props;
    // console.log(`list.meta`, list.meta);
    this.setState({ loadMore: true });
    fetch_list_sg({
      refresh,
      params: {
        page: refresh ? 1 : list.meta.page + 1,
        ...params,
      },
      onSuccess: () => {
        setTimeout(() => {
          this.setState({ loadMore: false });
        }, 1000);
      },
    });
  };

  render() {
    return <div>List page</div>;
  }
}

const mapState = ({ movieReducer }) => ({
  list: movieReducer.list,
  current: movieReducer.current,
});

const mapDispatch = {
  fetch_list_sg,
};

export default connect(mapState, mapDispatch)(ListPage);
