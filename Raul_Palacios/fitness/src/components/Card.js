import React from "react";
import "./styles/Card.css";
import circleImg from "../images/circles.png";

class Card extends React.Component {
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
    const { title, description, img, leftColor, rightColor } = this.props;
    return (
      <div
        className="card mx-auto Fitness-Card"
        style={{
          backgroundImage: `url(${circleImg}), linear-gradient(to right, ${leftColor}, ${rightColor})`,
        }}
      >
        <div className="card-body">
          <div className="row center">
            <div className="col-6">
              <img className="float-right Fitness-Image" src={img} />
            </div>
            <div className="col-6 Fitness-Card-Info">
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
