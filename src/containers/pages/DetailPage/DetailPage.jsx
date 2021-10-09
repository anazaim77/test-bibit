import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import DetailMovie from "../../../components/organisms/DetailMovie";
import { fetch_detail_sg } from "../../../redux/actions/movieAction";
import PagePaper from "../../templates/PagePaper";

export class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.handleRefresh();
    // console.log(`this.props`, this.props);
  }

  handleRefresh = () => {
    this.handleFetch({});
  };

  handleFetch = ({ params = {} }) => {
    const { fetch_detail_sg, match } = this.props;
    // console.log(`list.meta`, list.meta);

    this.setState({ loadMore: true });
    fetch_detail_sg({ params: { ...params, i: match.params.id } });
  };

  render() {
    const { current, loading_refresh } = this.props;

    return (
      <PagePaper title={"Detail"}>
        <DetailMovie loading={loading_refresh} data={current} />
      </PagePaper>
    );
  }
}

const mapState = ({ movieReducer }) => ({
  list: movieReducer.list,
  current: movieReducer.current,
  loading_refresh: movieReducer.loading_refresh,
});

const mapDispatch = {
  fetch_detail_sg,
};

export default compose(withRouter, connect(mapState, mapDispatch))(DetailPage);
