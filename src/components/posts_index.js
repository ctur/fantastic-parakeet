import React, { Component } from 'react';

class PostsIndex extends Component {

  type() {
    callIt = 'in type';
    return callIt;
  }
  render() {
    return (
      <div>
        Posts Index
      </div>
    )
  }
}

// Used shortcut here rather than mapStateToProps which is identical
export default connect(null, { fetchPosts })(PostsIndex);
