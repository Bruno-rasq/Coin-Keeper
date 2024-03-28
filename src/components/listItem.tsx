import styled from 'styled-components';
import { ref, DB, remove } from '../services/DB';
import { Utils } from '../utils/utils';

interface listItemProps {
  id: string,
  data : {
    value: string,
    date: string,
    typeAction: string,
    nota: string
  }
}

namespace style {
  export const list__item = styled.div`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-areas:
        'icon action btn'
        'icon value  btn'
        'icon nota   btn'
        'date id     id'
      ;
      width: 350px;
      padding: 10px;
      position: relative;
      margin-top: 20px;

      ::after{
        content: '';
        position: absolute;
        bottom: -10px;
        left: 0;
        background-color: lightgray;
        width: 100%;
        height: 2px;

      }

      .icon {
        grid-area: icon;
        width: 50px;
        height: 50px;
        justify-self: left;
        align-self: center;
      }

      .btn {
        grid-area: btn;
        height: 40px;
        width: 50px;
        justify-self: right;
        align-self: center;

      }

      .id {
        grid-area: id;
        font-size: .6rem;
        justify-self: right;
        margin-top: 30px;
      }

      .balance {
        grid-area: value;
      }

      .date {
        grid-area: date;
        font-size: .6rem;
        margin-top: 30px;
      }

      .action {
        grid-area: action;
        font-weight: bold;
      }

      .note {
        grid-area: nota;
        font-size: .7rem;
      }
  `;
}

export const Item = ({ id, data }: listItemProps) => {

  const handleRemove = (id: string) => {
    const ExactLocation = ref(DB, `extrato/${id}`);

    remove(ExactLocation);
  }

  return(
      <style.list__item>

        <img src="icons/coin.svg" alt="coin-icon" className="icon"/>

        <p className="id">{id}</p>
        <p className="balance">{Utils.formatCurrency(Number(data.value))}</p>
        <p className="date">{data.date}</p>
        <p className="action">{data.typeAction}</p>
        <p className="note">NOTA: {data.nota}</p>

        <button onClick={() => handleRemove(id)} className="btn">
          <img src="icons/garbage.svg" alt="garbage-icon"/>
        </button>

      </style.list__item>
  )
}