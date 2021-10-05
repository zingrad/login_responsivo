

import { GlobalStyle } from "./styles/global";
import {Card,Painel} from "./styles/style"
import Logo from "./assets/logo.svg"
import Background from "./assets/background.svg"
import Notebook from "./assets/notebook.svg"
export function App() {
  return (
    
   <>
     <GlobalStyle />
      <Card>
      <Painel>
        <img  src={Logo} alt="" />
      <h3>Bem vindo ao <span>Painel</span></h3>
      </Painel>
      <img className="fundo" src={Background} />
      <img className="notebook" src={Notebook} />
      <input type="text" className="input1" placeholder="Digite seu e-mail"/>
      <input type="text" placeholder="Digite sua senha" />
       <button type="button">Acessar</button>
       
       </Card>
       </>

       
  );
}

