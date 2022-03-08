import React from "react";
import styled from "styled-components";
import Portfolio from "./Portfolio";
import Promos from "./Promos";

const Wrapper = styled.div`
  display: flex;
  max-height: calc(100vh - 100px);
  overflow: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  & div {
    border-radius: 0.4rem;
  }
`;

const Main = ({ address, sanityTokens, thirdwebTokens }) => {
  return (
    <Wrapper>
      <Portfolio
        address={address}
        sanityTokens={sanityTokens}
        thirdwebTokens={thirdwebTokens}
      />
      <Promos />
    </Wrapper>
  );
};

export default Main;
