import React from "react";
import "./styles/Card.css";
import circleImg from "../images/circles.png";

class CardUsrs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "https://getwallpapers.com/wallpaper/full/c/f/e/7676.jpg",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        image: "https://getwallpapers.com/wallpaper/full/e/3/a/204906.jpg",
      });
    }, 5000);
  }

  render() {
    const { title, url, thumbnailUrl } = this.props;
    return (
      <div
        className="card mx-auto Fitness-Card"
        style={{
          backgroundImage: `url(${circleImg}), linear-gradient(to right, #35858B, #072227)`,
        }}
      >
        <div className="card-body">
          <div className="row center">
            <div className="col-6">
              <img className="float-right Fitness-Image" src={thumbnailUrl} />
            </div>
            <div className="col-6 Fitness-Card-Info">
              <h1>{title}</h1>
              <p>{url}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardUsrs;
