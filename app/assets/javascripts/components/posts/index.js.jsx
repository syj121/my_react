var Post = createReactClass({

  render: function() {
    return (
      <div>
        <PostSearch k={this.props.k}  />
        <PostList k={this.props.k} />
      </div>

    );
  }
});

