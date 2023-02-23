import styled from "styled-components";
import IonIcon from "@reacticons/ionicons";

interface Props {
 readonly type: string;
}

export default function ButtonsTransactions(props: Props) {
 const type = props.type === "income" ? "Receita" : "Despesa";
 const arrow = props.type === "income" ? "arrow-up-outline": "arrow-down-outline"
 return <ButtonsDiv>
    <p>Nova {type}</p>
    <IonIcon name={arrow}></IonIcon>
 </ButtonsDiv>;
}

const ButtonsDiv = styled.div`
font-size: 26px;
color: #FFFFFF;
 width: 430px;
 height: 106px;
 background-color: #d199da;
 border-radius: 6px;
 font-family: "Raleway";
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 0 30px;
 :hover{
    cursor: pointer;
 }
`;
