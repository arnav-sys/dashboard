import './App.css';
import Card from "./Components/card"
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';
import Graph from './Components/graph';
import BasicTable from './Components/table';
import BasicTable3 from "./Components/table2"
import React,{useState} from "react"
import {order1, order2, order3, order4, order5, order6, order7, order8, order9, order10} from "./data"


function App() {
  return (
    <div className="App">
      <h1 className="main-text">Analytics dashboard</h1>
      <h2  id="text-1">Order Status</h2>
      <div className="Card-Body">
        <Card p1="Today's order - 200" p2="Current Week Order - 450"/>
        <Card p1="Today's order amount-20000" p2="Current weel amount-45000"/>
        <Card p1="MTD order - 400" p2="last month order - 200"/>
        <Card p1="mtd order amount" p2="last month amount - 45000"/>
      </div>
      <Graph className="graph"/>
      <div className="row2">
        <h2 className="text">First Five orders</h2>
        <BasicTable    username={order1.username}
        total_amount={order1.total_amount}
        total_quantity={order1.total_quantity}
        order_number={order1.city}
       order_number2={order2.city}
        total_amount2={order2.total_amount}
        total_quantity2={order2.total_quantity}
        username2={order2.username}
        order_number3={order3.city}
        total_amount3={order3.total_amount}
        total_quantity3={order3.total_quantity}
        username3={order3.username}
        order_number4={order4.city}
        total_amount4={order4.total_amount}
        total_quantity4={order4.total_quantity}
        username4={order4.username}
        order_number5={order5.city}
        total_amount5={order5.total_amount}
        total_quantity5={order5.total_quantity}
        username5={order5.username}
        Title="username" Title2="city" Title3="total amount" Title4="total quantity"/>
        <h2 className="text">Last five orders</h2>
        <BasicTable order_number={order6.city}
        total_amount={order6.total_amount}
        total_quantity={order6.total_quantity}
        username={order6.username} order_number2={order7.city}
        total_amount2={order7.total_amount}
        total_quantity2={order7.total_quantity}
        username2={order7.username}
        order_number3={order8.city}
        total_amount3={order8.total_amount}
        total_quantity3={order8.total_quantity}
        username3={order8.username}
        order_number4={order9.city}
        total_amount4={order9.total_amount}
        total_quantity4={order9.total_quantity}
        username4={order9.username}
        order_number5={order10.city}
        total_amount5={order10.total_amount}
        total_quantity5={order10.total_quantity}
        username5={order10.username}
        Title="user name" Title2="city" Title3="total amount" Title4="total quantity"/>
      </div>
      <div className="row3">
        <BasicTable3 username={order1.username} order_no={order1.order_no} date={order1.date} status={order1.status}
        total_quantity={order1.total_quantity} count={order1.count}/>
      </div>
    </div>
  );
}

export default App;
