import styled from 'styled-components';
import AppContext from '../context/AppContext';
import { useContext } from 'react';
import { Utils } from '../utils/utils';


namespace style {
  export const DisplayStyle = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 200px;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

    .icon {
      width: 35px;
      height: 35px;
    }

    .info {

    }
  `;

  export const DIV = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    .bg {
      width: 100%;
      height: 200px;
      background-color: #F3F1EA;
    }

    .bg2 {
      width: 100%;
      height: 100px;
      background-color: #fff;
      margin-bottom: 50px;
    }
  `;
}

export const Display = () => {

  const { currentBalance } = useContext(AppContext) as { currentBalance: number };

  return (

    <style.DIV>
      <div className="bg"></div>
      <style.DisplayStyle>
        <img src="icons/pig.svg" alt="pig-icon" className="icon"/>
        <div className="info">
          <p>Saldo atual:</p>
          <h1>{Utils.formatCurrency(currentBalance)}</h1>
        </div>
      </style.DisplayStyle>
      <div className="bg2"></div>
    </style.DIV>

  )
}