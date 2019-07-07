import React, { Component } from "react";

import { Container, MediaList, CoverWrapper, ListItem } from "./styles";

import VideoImg01 from "../../assets/videos/keep-watching-1.jpg";
import VideoImg02 from "../../assets/videos/keep-watching-2.jpg";
import VideoImg03 from "../../assets/videos/keep-watching-3.jpg";
export default class MediaSection extends Component {
  state = {
    imgs: [
      {
        id: 1,
        url: VideoImg01,
        alt: "House M.D."
      },
      {
        id: 2,
        url: VideoImg02,
        alt: "Mr. Robot"
      },
      {
        id: 3,
        url: VideoImg03,
        alt: "The man in the high Castle"
      },
      {
        id: 4,
        url: VideoImg01,
        alt: "House M.D."
      },
      {
        id: 5,
        url: VideoImg02,
        alt: "Mr. Robot"
      }
    ]
  };

  render() {
    return (
      <Container>
        <header>
          <h1>{this.props.title}</h1>
          {this.props.seeMore && <span>veja mais</span>}
        </header>
        <MediaList>
          {this.state.imgs.map((media, index) =>
            index !== 4 ? (
              <ListItem>
                <CoverWrapper>
                  <img src={media.url} alt={media.alt} />
                </CoverWrapper>
              </ListItem>
            ) : (
              <ListItem>
                <CoverWrapper>
                  <div id="next-icon" />
                  <img src={media.url} alt={media.alt} />
                </CoverWrapper>
              </ListItem>
            )
          )}
        </MediaList>
      </Container>
    );
  }
}
