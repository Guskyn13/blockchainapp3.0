import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 35rem;
  width: 27rem;
  color: white;
  border: 1px solid #282b2f;
  display: flex;
  flex-direction: column;
`;

const Selector = styled.div`
  height: 5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Option = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    background-color: #111214;
  }
`;

const TransferModal = () => {
    const [action, setAction] = useState('send');

    const selectedStyle = {
        color: '#3773f5',
    }

    const unselectedStyle = {
        border: '1px solid #282b2f',
    }

  return (
    <Wrapper>
      <Selector>
        <Option style={action === 'send' ? selectedStyle : unselectedStyle } onClick={() => setAction('send')}>
          <p>send</p>
        </Option>

        <Option style={action === 'recieve' ? selectedStyle : unselectedStyle } onClick={() => setAction('recieve')}>
          <p>receive</p>
        </Option>
      </Selector>
    </Wrapper>
  );
};

export default TransferModal;
