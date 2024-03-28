import styled from 'styled-components';
import { Provider } from './context/provider';
import { Header } from './components/header';
import { Display } from './components/display';
import { Form } from './components/form';
import { List } from './components/list';

namespace style {
  export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
  'Header'
  'display'
  'form'
  'historic';
  `;
}

export function App() {
  return (

    <Provider>

      <style.Main>
        <Header/>
        <Display/>
        <Form/>
        <List/>
      </style.Main>

    </Provider>
  )
}