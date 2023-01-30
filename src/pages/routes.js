import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import DefaultPage from "./DefaultPage";
import GrupoPage from "./GrupoPage";
import GrupoDetailPage from "./GrupoPage/GrupoDetailPage";
import GrupoEditPage from "./GrupoPage/GrupoEditPage";
import GrupoListPage from "./GrupoPage/GrupoListPage";
import GrupoNewPage from "./GrupoPage/GrupoNewPage";
import HomePage from "./HomePage/HomePage";
import LoginPage from "./LoginPage";

const RoutesModule = () => {
   return(
       <BrowserRouter>
        <Routes>
           <Route element = { <DefaultPage/> }  path="/">
            <Route element = { <HomePage/> }  path="" exact />
            <Route path="/grupo" element={<GrupoPage />}>
               <Route path="new" element={<GrupoNewPage />} />
               <Route path="edit/:idGrupo" element={<GrupoEditPage />} />
               <Route path="list" element={<GrupoListPage />} />
               <Route path="detail/:idGrupo" element={<GrupoDetailPage />} />
            </Route>
           </Route>
           <Route element = { <LoginPage/> }  path="/login" exact />
        </Routes>
       </BrowserRouter>
   )
}

export default RoutesModule;