var PostList = createReactClass({

  //getInitialState －初始化this.state的值，只在组件装载之前调用一次
  getInitialState(){
    return {
      k: "",
      posts: []
    }
  },

  //componentDidMount－只会在装载完成之后调用一次
  componentDidMount(){
    get_ajax_data("/posts.json", {k: this.props.k}, (response) =>{
      this.setState({posts: response.data, k: response.k});
    })
  },

  //render －必须要有，组装生成这个组件的HTML结构（使用原生HTML标签或者子组件）
  render: function() {

    //Each child in an array or iterator should have a unique "key" prop
    var posts = this.state.posts.map((post, index) => {
      return (
        <tr key={`tr_${index}`}>
          <td>{post.title}</td>
          <td>{post.user_name}</td>
          <td>{post.published_at}</td>
          <td>
            <div><a href={"/posts/"+post.id+"/show"}>show</a></div>
            <div><a href={`/posts/${post.id}/edit`}>edit</a></div>
          </td>
        </tr>
      )
    });
    return (
      <div className='Ptable'>
        <h1>Posts</h1>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>User name</th>
              <th>Published at</th>
              <th colSpan="3">Opts</th>
            </tr>
          </thead>
          <tbody>{posts}</tbody>
        </table>
      </div>
    );
  }
});
