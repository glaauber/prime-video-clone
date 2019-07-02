import React, { Component } from "react";

import { Container } from "./styles";

import Image01 from "../../assets/slider/home-slider-1.jpg";
import Image02 from "../../assets/slider/home-slider-2.jpg";
import Image03 from "../../assets/slider/home-slider-3.jpg";

export default class Slider extends Component {
  state = {
    currentImg: 0,
    imgs: [
      {
        alt: "Image 1",
        src: Image01
      },
      {
        alt: "Image 2",
        src: Image02
      },
      {
        alt: "Image 3",
        src: Image03
      }
    ]
  };

  showPrevImage = () => {
    if (this.state.currentImg !== 0) {
      const newImg = this.state.currentImg - 1;
      this.setState({ currentImg: newImg });
    } else this.setState({ currentImg: this.state.imgs.length - 1 });
  };

  showNextImage = () => {
    if (this.state.currentImg !== this.state.imgs.length - 1) {
      const newImg = this.state.currentImg + 1;
      this.setState({ currentImg: newImg });
    } else this.setState({ currentImg: 0 });
  };

  render() {
    return (
      <Container>
        <div id="controls">
          <div className="prev-button" onClick={this.showPrevImage} />
          <div className="next-button" onClick={this.showNextImage} />
          <div id="indicators">
            {this.state.imgs.map((value, i) =>
              i === this.state.currentImg ? (
                <div key={i} className="indicator active" />
              ) : (
                <div
                  key={i}
                  className="indicator"
                  onClick={() => this.setState({ currentImg: i })}
                />
              )
            )}
          </div>
        </div>
        <img
          src={this.state.imgs[this.state.currentImg].src}
          alt={this.state.imgs[this.state.currentImg].alt}
        />
      </Container>
    );
  }
}
