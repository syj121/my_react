var PostSearch = createReactClass({
  
  //getInitialState －初始化this.state的值，只在组件装载之前调用一次
  getInitialState(){
    return {
      k: ""
    }
  },

  //componentDidMount－只会在装载完成之后调用一次
  componentDidMount(){
    this.setState({k: this.props.k});
  },

  handleChange(event){
    this.setState({k: event.target.value})
  },

  handleClick(event){
    redirect_url(`posts_reacts?k=${this.state.k}`)
  },

  render: function() {
    return (
      <div>
         <input type="text" name="k" value={this.state.k} onChange={this.handleChange} />
         <input type="button" onClick={this.handleClick} value='search'/>
      </div>
    );
  }
});
