import React, { Component } from "react";
import { connect } from "react-redux";
import ListMovies from "../../../components/organisms/ListMovies";
import { fetch_list_sg } from "../../../redux/actions/movieAction";
import PagePaper from "../../templates/PagePaper";

export class ListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.handleRefresh();
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
    const { list, loading_refresh, loading_more } = this.props;
    return (
      <PagePaper>
        <ListMovies
          loading={loading_refresh}
          loadingMore={loading_more}
          data={list}
          handleMore={this.handleMore}
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
});

const mapDispatch = {
  fetch_list_sg,
};

export default connect(mapState, mapDispatch)(ListPage);
