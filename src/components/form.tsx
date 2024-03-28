import styled from 'styled-components';
import { useState } from 'react';
import { push, extratoRef } from '../services/DB';
import { Utils } from '../utils/utils';

namespace style { 
  export const  FormStyle = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
    'input1 input1'
    'input2 input2'
    'button1 button2';
    margin: 0 auto;
    gap: 5px;
    width: 300px;
    height: 170px;

    .inp{
      display: inline-block;
      padding: 0 16px 0 12px;
      width: 100%;
      line-height: 30px;
      height: 32px;
      border: 1px solid #dddbda;
      border-radius: 4px;
      background-color: #fff;
      color: rgb(8, 7, 7);
      transition: border .1s linear,background-color .1s linear;
    }

    .inp1 {
      grid-area: input1;
    }

    .inp2 {
      grid-area: input2;
    }

    #btn1 {
      grid-area: button1;
    }

    #btn2 {
      grid-area: button2;
    }

    .btn {
      color: #fff;
      background-color: #3A3C55;
      border: none;
      border-radius: 5px;
      padding: 5px;
    }
  `;

  export const extrato = styled.p`
    text-transform: uppercase;
    font-weight: bold;
    margin: 40px auto 0 auto;
    text-align: center;

  `;
}

export const Form = () => {

  const [input1, setInput1] = useState<string>('')
  const [input2, setInput2] = useState<string>('')

  const add_in_db = (value: string, action: string, nota: string): void => {
    const data = Utils.createData(value, action, nota);

    push(extratoRef, data);
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {

    event.preventDefault();

    const btnClicado = event.currentTarget.id

    btnClicado === 'btn1' ? (

      add_in_db(input1, 'deposito', input2),
      setInput1(''),
      setInput2('')

    ) : (

      add_in_db(input1, 'saque', input2),
      setInput1(''),
      setInput2('')
    )

  }


  return (
    <section>
      <style.FormStyle>

        <input type="text" placeholder="Insira um valor, exm: 10 ou 10.50" 
          className='inp1 inp' value={input1} onChange={(e) => setInput1(e.target.value)}/>

        <input type="text" placeholder="Nota:" 
          className='inp2 inp' value={input2} onChange={(e) => setInput2(e.target.value)}/>

        <button type="submit" className='btn' id='btn1' onClick={handleClick}>Depositar</button>
        <button type="submit" className='btn' id='btn2' onClick={handleClick}>Saquar</button>

      </style.FormStyle>

      <style.extrato>extrato</style.extrato>
    </section>

  )
}