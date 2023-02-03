import PaginaPadrao from "componentes/paginaPAdrao";
import RodaPe from "componentes/RodaPe";
import NaoEncontrada from "paginas/NaoEncontrada/NaoEncontrada";
import Posts from "paginas/Posts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./componentes/Menu";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/sobreMin";

//console.log(window.location);



function AppRoute() {
  return (
    <BrowserRouter>

      <Menu/>

      <Routes>

        <Route path={"/"} element={<PaginaPadrao/>}>
            <Route index element={<Inicio/>}/>
            <Route path="sobremim" element={<SobreMim/>}/>
           
        </Route>

        <Route path="posts/:id" element={<Posts/>}/>
        <Route path="*" element={<NaoEncontrada/>}/>
      </Routes>

      {/* 
        Na rota "/" a estrutura a ser renderizada é:

        <PaginaPadrao>
        
          <Inicio/>

        </PaginaPadrao> 

         Na rota "/SobreMin" a estrutura a ser renderizada é:

        <PaginaPadrao>
        
          <SobreMin/>

        </PaginaPadrao>
      
      */}

      <RodaPe/>
    </BrowserRouter>

    
  );
}

export default AppRoute;
