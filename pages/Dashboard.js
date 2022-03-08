import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import { ethers } from "ethers";
import { ThirdwebSDK } from "@3rdweb/sdk";

const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    process.env.NEXT_PUBLIC_METAMASK_PRIVATE_KEY,
    ethers.getDefaultProvider(
      "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
    )
  )
);

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #0a0b0d;
  color: white;
  overflow: hidden;
`;

const MainContainer = styled.div`
  flex: 1;
`;

const Dashboard = ({ address }) => {
  const [sanityTokens, setSanityTokens] = useState([]);
  const [thirdwebTokens, setThirdwebTokens] = useState([]);

  useEffect(() => {
    const getSanityAndThirdwebTokens = async () => {
      const coins = await fetch(
        "https://qzzhunmk.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D'coins'%5D%20%7B%0A%20%20name%2C%0A%20%20usdPrice%2C%0A%20%20contractAddress%2C%0A%20%20symbol%2C%0A%20%20logo%0A%7D"
      );
      const sanityTokens = (await coins.json()).result

      setSanityTokens(sanityTokens)

      setThirdwebTokens(
        sanityTokens.map((token) => sdk.getTokenModule(token.contractAddress))
      );
    };

    return getSanityAndThirdwebTokens();
  }, []);

  return (
    <Wrapper>
      <Sidebar />
      <MainContainer>
        <Header
          address={address}
          sanityTokens={sanityTokens}
          thirdwebTokens={thirdwebTokens}
        />
        <Main
          address={address}
          sanityTokens={sanityTokens}
          thirdwebTokens={thirdwebTokens}
        />
      </MainContainer>
    </Wrapper>
  );
};

export default Dashboard;
