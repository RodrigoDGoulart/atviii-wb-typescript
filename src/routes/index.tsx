import { BrowserRouter, Route, Routes } from "react-router-dom";
import Clientes from "../pages/Clientes/clientes";
import ConsumoCliente from "../pages/ConsumoCliente/consumoCliente";
import EditarCliente from "../pages/EditarCliente/editarCliente";
import EditarProduto from "../pages/EditarProduto/editarProduto";
import Home from "../pages/Home/home";
import HomeRelatorio from "../pages/HomeRelatorio/homeRelatorio";
import NovoCliente from "../pages/NovoCliente/novoCliente";
import NovoConsumoCliente from "../pages/NovoConsumoCliente/novoConsumoCliente";
import NovoProduto from "../pages/NovoProduto/novoProduto";
import NovoServico from "../pages/NovoServico/novoServico";
import PerfilCliente from "../pages/PerfilCliente/perfilCliente";
import Produtos from "../pages/Produtos/produtos";
import RelatorioGenero from "../pages/RelatorioGênero/relatorioGenero";
import RelatorioRanking from "../pages/RelatorioRanking/relatorioRanking";
import Servicos from "../pages/Servicos/servicos";

export default function Rotas () {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />

                <Route path='/clientes' element={<Clientes/>} />
                <Route path='/cliente/:id' element={<PerfilCliente />} />
                <Route path='/novo-cliente' element={<NovoCliente/>} />
                <Route path='/editar-cliente/:id' element={<EditarCliente/>} />
                <Route path='/consumo-cliente/:id' element={<ConsumoCliente/>} />
                <Route path='/add-consumo/:id' element={<NovoConsumoCliente/>} />

                <Route path='/produtos' element={<Produtos/>} />
                <Route path='/novo-produto' element={<NovoProduto/>} />
                <Route path='/editar-produto/:id' element={<EditarProduto/>} />

                <Route path='/servicos' element={<Servicos />} />
                <Route path='/novo-servico' element={<NovoServico/>} />
                <Route path='/editar-produto/:id' element={<EditarProduto/>} />

                <Route path='/menu-relatorio' element={<HomeRelatorio/>} />
                <Route path='/relatorio/ranking/:id' element={<RelatorioRanking/>} />
                <Route path='/relatorio/genero' element={<RelatorioGenero/>} />
            </Routes>
        </BrowserRouter>
    )
}