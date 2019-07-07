import styled from "styled-components";

import NextIcon from "../../assets/next.svg";

export const Container = styled.section`
  /* height: 205px; */
  display: flex;
  align-items: flex-start;
  padding-left: 50px;
  margin-top: 25px;
  flex-direction: column;
  h1 {
    font-size: 20px;
    padding: 7px;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    span {
      font-size: 13px;
      color: #90dffe;
    }
  }
`;

export const MediaList = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  overflow: hidden;
`;

export const ListItem = styled.div`
  margin-right: 7px;
  &:last-child {
    opacity: 0.3;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const CoverWrapper = styled.div`
  img {
    width: 306px;
    height: 172px;
    border-radius: 3px;
  }

  #next-icon {
    position: absolute;
    height: 25px;
    width: 25px;
    z-index: 7;
    background: url(${NextIcon}) no-repeat;
    margin: 75px 15px;
    /* background-size: 25px 25px; */
  }
`;
