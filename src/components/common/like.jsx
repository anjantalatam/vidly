import React, { Component } from "react";
class Like extends Component {
  render() {
    let classLike = "fa fa-heart";
    if (!this.props.isLiked) classLike += "-o";

    return (
      <span
        onClick={this.props.onLike}
        className={classLike}
        style={{ cursor: "pointer" }}
      ></span>
    );
  }
}

export default Like;
