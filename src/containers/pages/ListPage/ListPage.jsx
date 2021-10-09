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

  handleFetch = ({ params = {}, refresh }) => {
    const { fetch_list_sg } = this.props;
    // console.log(`list.meta`, list.meta);
    this.setState({ loadMore: true });
    fetch_list_sg({
      refresh,
      params,
    });
  };

  render() {
    const { list } = this.props;
    return (
      <PagePaper>
        <ListMovies data={list} />
      </PagePaper>
    );
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
