import React, { Component } from "react";
import Like from "./common/like";
import { Link } from "react-router-dom";
import Table from "./common/table";

class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },

    {
      key: "like",
      content: (movie) => (
        <Like isLiked={movie.liked} onLike={() => this.props.onLike(movie)} />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie._id)}
          className="btn btn-danger btn-sm "
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;
    return (
      <Table
        sortColumn={sortColumn}
        onSort={onSort}
        data={movies}
        columns={this.columns}
      />
    );
  }
}

export default MoviesTable;
