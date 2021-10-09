import React, { Component } from "react";
import { connect } from "react-redux";
import AppBarSearch from "../../../components/organisms/AppBarSearch";
import ListMovies from "../../../components/organisms/ListMovies";
import { fetch_list_sg } from "../../../redux/actions/movieAction";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PagePaper from "../../templates/PagePaper";

const theme = createTheme();

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
    const { fetch_list_sg, list, current } = this.props;
    // console.log(`list.meta`, list.meta);
    this.setState({ loadMore: true });
    fetch_list_sg({
      refresh,
      params,
    });
  };

  render() {
    return (
      <PagePaper>
        <ListMovies data={[1, 2, 3, 4, 5, 6, 7, 8]} />
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
