class Post extends React.Component {
  redirectToShow(id){
    return `/gag/${id}`;
  }

  titlePost(){
    let titlePost = (
      <p><strong>{this.props.post.title}</strong></p>

      /* For links on the title; make the links be clickable throughout content box
      <a
        href={this.redirectToShow(this.props.post.id)}
        className="post-title"
        title={this.props.post.title}>
        {this.props.post.title}
      </a>
      */
    )

    if (this.props.detail) {
      titlePost = this.props.post.title;
    }

    return titlePost
  }

  imageOrGif(){
    let video = this.props.post.media

    if (video) {
      const videoPlayer = (
        <video poster={video.poster} autoPlay loop muted>
          <source src={video.mp4} type="video/mp4" />
          <source src={video.webm} type="video/webm" />
        </video>
      )
      return videoPlayer;
    }

    return <img src={this.props.post.image} alt={this.props.post.title} />;
  }

  render() {
    return (
      <div className="thumbnail content">
           <h5 className={this.props.detail ? '' : 'title-post'}>
             {this.titlePost()}
           </h5>
           {this.imageOrGif()}
      </div>
    );
  }
}

Post.defaultProps = {
  detail: false
};

Post.propTypes = {
  post: React.PropTypes.object.isRequired,
  detail: React.PropTypes.bool
};
