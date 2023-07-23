import { Link } from "react-router-dom";
import styled from "styled-components"

export default function SuccessPage(props) {
    const { object, object2, object3, name, setName, cpf, setCPF, selectSeatNumber, setSelectSeatNumber, selectSeat, setSelectSeat} = props;

    function clean(){
        setName('')
        setCPF('')
        setSelectSeatNumber([])
        setSelectSeat()
    }
    

    const seats = selectSeatNumber.map(seat => 
        <p key={seat}>Assento {seat}</p>
    )

    return (
        <PageContainer>
            <h1>Pedido feito <br /> com sucesso!</h1>

            <TextContainer data-test="movie-info">
                <strong><p>Filme e sessão</p></strong>
                <p>{object.title}</p>
                <p>{object2.date} - {object3}</p>
            </TextContainer>

            <TextContainer data-test="seats-info">
                <strong><p>Ingressos</p></strong>

                {seats}
                
            </TextContainer>

            <TextContainer data-test="client-info">
                <strong><p>Comprador</p></strong>
                <p>Nome: {name}</p>
                <p>CPF: {cpf}</p>
            </TextContainer>

            <Link to='/' data-test="go-home-btn">
                <Button onClick={clean}>Voltar para Home</Button>
            </Link>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    color: #293845;
    margin: 30px 20px;
    padding-bottom: 120px;
    padding-top: 70px;
    a {
        text-decoration: none;
    }
    button {
        margin-top: 50px;
    }
    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #247A6B;
    }
`
const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
    strong {
        font-weight: bold;
        margin-bottom: 10px;
    }
`
const Button = styled.button`
    height: 42px;
    width: 225px;
    border-radius: 3px;
    background-color: #E8833A;
    color: #ffffff;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.04em;
    text-align: center;
    border: none;
`