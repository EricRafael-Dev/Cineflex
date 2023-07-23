import styled from "styled-components"
import HomePage from "./pages/HomePage/HomePage"
import SeatsPage from "./pages/SeatsPage/SeatsPage"
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react"

export default function App() {

    const [object, setObject] = useState({});
    const [object2, setObject2] = useState({});
    const [object3, setObject3] = useState(undefined);
    const [name, setName] = useState('');
    const [cpf, setCPF] = useState('');
    const [selectSeatNumber, setSelectSeatNumber] = useState([]);
    const [selectSeat, setSelectSeat] = useState([]);

    return (
        <>
            
            <NavContainer>CINEFLEX</NavContainer>
            
           <BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
                <Route path="/sessoes/:idFilme" element={<SessionsPage />}/>
                <Route path="/assentos/:idSessao" element={<SeatsPage object={object} setObject={setObject} object2={object2} setObject2={setObject2} object3={object3} setObject3={setObject3} name={name} setName={setName} cpf={cpf} setCPF={setCPF} selectSeatNumber={selectSeatNumber} setSelectSeatNumber={setSelectSeatNumber} selectSeat={selectSeat} setSelectSeat={setSelectSeat} />}></Route>
                <Route path="/sucesso" element={<SuccessPage object={object} setObject={setObject} object2={object2} setObject2={setObject2} object3={object3} setObject3={setObject3} name={name} setName={setName} cpf={cpf} setCPF={setCPF} selectSeatNumber={selectSeatNumber} setSelectSeatNumber={setSelectSeatNumber} selectSeat={selectSeat} setSelectSeat={setSelectSeat} />}></Route>
                  
			</Routes>
		    </BrowserRouter>

        </>
    )
}

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    a {
        text-decoration: none;
        color: #E8833A;
    }
`
