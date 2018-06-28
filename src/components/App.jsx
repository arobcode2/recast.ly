class App extends React.Component {
  //this is an App component
  constructor(props) {
    super(props);
    
    this.state = {index: 0, videos: exampleVideoData};

    this.handleVideoTitleClick = this.handleVideoTitleClick.bind(this);
  }

  handleVideoTitleClick(e) {
    //console.log(e.currentTarget.textContent);
    var count = 0;
    var videoIndex = 0;
    for (let video of this.state.videos) {
      if (video.snippet.title === e.currentTarget.textContent) {
        videoIndex = count;
      }
      count++;
    }
    this.setState({
      index: videoIndex
    });
  }

  render() {
    //console.log(this.videos[this.index]);
    return <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em></h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><h5><em><VideoPlayer video={this.state.videos[this.state.index]}/></em></h5></div>
        </div>
        <div className="col-md-5">
          <div><h5><em><VideoList videos={this.state.videos}cb={this.handleVideoTitleClick}/></em></h5></div>
        </div>
      </div>
    </div>;
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;