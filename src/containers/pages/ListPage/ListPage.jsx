import React, { Component } from "react";
import { connect } from "react-redux";
import ListMovies from "../../../components/organisms/ListMovies";
import { fetch_list_sg } from "../../../redux/actions/movieAction";
import PagePaper from "../../templates/PagePaper";
import _ from "lodash";

export class ListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.handleRefresh();
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(`this.props.query`, this.props.query);
    if (this.props.query !== prevProps.query) {
      this.handleRefresh();
    }
  }

  handleRefresh = () => {
    this.handleFetch({ refresh: true });
  };

  handleMore = () => {
    this.handleFetch({ refresh: false });
  };

  handleFetch = ({ refresh }) => {
    const { fetch_list_sg } = this.props;
    fetch_list_sg({ refresh });
  };

  render() {
    const { list, loading_refresh, meta, loading_more } = this.props;
    return (
      <PagePaper>
        <ListMovies
          loading={loading_refresh}
          loadingMore={loading_more}
          data={list}
          handleMore={this.handleMore}
          withLoadMore={meta.total_page > meta.page}
          noData={_.isEmpty(list) && loading_refresh === false}
        />
      </PagePaper>
    );
  }
}

const mapState = ({ movieReducer }) => ({
  list: movieReducer.list,
  current: movieReducer.current,
  loading_refresh: movieReducer.loading_refresh,
  loading_more: movieReducer.loading_more,
  query: movieReducer.query,
  meta: movieReducer.meta,
});

const mapDispatch = {
  fetch_list_sg,
};

export default connect(mapState, mapDispatch)(ListPage);
