import { onValue, extratoRef, DataSnapshot } from '../services/DB';
import { useState, useEffect, useContext } from 'react';
import { Item } from './listItem';
import styled from 'styled-components';
import AppContext from '../context/AppContext'

interface listItemProp {
  id: string, 
  data: {
    value: string,
    date: string,
    typeAction: string,
    nota: string
  }
}
interface StateFunction {
  setCurrentBalance: (value: number) =>  void
}

namespace style {
  export const list = styled.section`
    display: flex;
    flex-direction: column-reverse;
    gap: 15px;
    margin: 30px auto; 
  `;
}

export const List = () => {

  const [ list, setList ] = useState<listItemProp[]>([]);
  const { setCurrentBalance } = useContext(AppContext) as StateFunction;

  useEffect(() => {

    const onDBChange = (snapshot: DataSnapshot) => {

      if(snapshot.exists()){

        const arry = Object.entries(snapshot.val())

        // adiciona os elementos de DB no estado list, e atualiza o estado currentBalance
        let currBalance = 0;
        const newList = arry.map(([id, data]: [string, any]) => {
          const { value, typeAction } = data as { value: string; typeAction: string };
          typeAction === 'deposito' ? currBalance += Number(value) : currBalance -= Number(value);
          return { id, data };
        });

        setList(newList);
        setCurrentBalance(currBalance);

      } else {

        setList([])
        setCurrentBalance(0)
      }
    }

    const unsubscribe = onValue(extratoRef, onDBChange);

    return () => {
      unsubscribe();
    }

  }, [])

  return (

    <style.list>

      {list.map(e => <Item key={e.id} id={e.id} data={e.data} />)}

    </style.list>
  )
}