import styled from "styled-components";
import IonIcon from "@reacticons/ionicons";

interface Props {
 readonly type: string;
 readonly transactions: {
  id: string;
  value: number;
  description: string;
  type: string;
  dateTransaction: string;
 }[];
}

interface ColorProps {
 readonly typeColor: string;
}

export default function TotalValues(props: Props) {
 function types(type: string) {
  if (type === "total-income") {
   return "Receitas";
  } else if (type === "total-expense") {
   return "Despesas";
  } else {
   return "Balanço Mensal";
  }
 }

 function icons(type: string) {
  if (type === "total-income") {
   return "add-circle";
  } else if (type === "total-expense") {
   return "remove-circle";
  } else {
   return "bar-chart";
  }
 }

 function colors(type: string) {
  if (type === "total-income") {
   return "#219A2D";
  } else if (type === "total-expense") {
   return "#CC141F";
  } else {
   return "#1C7BEB";
  }
 }

 const incomes = props.transactions.filter((e) => e.type === "income");
 const expenses = props.transactions.filter((e) => e.type === "expense");
 let totalIncome = 0;
 let totalExpense = 0;
 incomes.forEach((e) => (totalIncome += e.value));
 expenses.forEach((e) => (totalExpense += e.value));
 const balance = totalIncome - totalExpense;
 const value = setValue(props.type)
 const type = types(props.type);
 const icon = icons(props.type);
 const color = colors(props.type);

 function setValue(type: string){
    if(type === "total-income"){
        return totalIncome;
    } else if(type === "total-expense"){
        return totalExpense;
    } else {
        return balance;
    }
 }

 return (
  <ValuesDiv typeColor={color}>
   <div className="text-total">
    <p className="text-total-type">{type}</p>
    <p className="text-total-value">R$ {value}</p>
   </div>
   <IonIcon className="icons-total-values" name={icon} />
  </ValuesDiv>
 );
}

const ValuesDiv = styled.div<ColorProps>`
 width: 300px;
 height: 120px;
 background-color: #fff;
 border-radius: 25px;
 font-family: "Raleway";
 display: flex;
 justify-content: space-between;
 align-items: center;
 .text-total {
  font-size: 24px;
  .text-total-type {
   color: #7b7b7b;
   font-weight: 600;
   margin-left: 20px;
   margin-bottom: 20px;
  }
  .text-total-value {
   font-weight: 700;
   margin-left: 20px;
  }
 }
 .icons-total-values {
  color: ${(props) => props.typeColor};
  font-size: 30px;
  margin-right: 30px;
 }
`;
