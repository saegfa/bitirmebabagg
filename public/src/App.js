import './App.css';
import {Checkbox, Col, Row, Space} from 'antd';
import Card from './Components/UI/Card'
import React,{useState} from "react";
import TextAdder from "./Components/Adders/TextAdder";
import CheckBoxAdder from "./Components/Adders/CheckBoxAdder";
import ButtonAdder from "./Components/Adders/ButtonAdder";
import DateAdder from "./Components/Adders/DateAdder";
import ButtonReturner from "./Components/Returners/ButtonReturner";
import AddressReturner from "./Components/Returners/AddressReturner";

function App() {

  const [dropped, setDropped] = useState([]);

  const onClick = (expense) => {
    const data = {
      id: expense,
      statement: '',
    };
    if (data.id === 1) {
      data.statement = '<text/>'
    }
    setDropped((prevExpenses) => {
      return [data, ...prevExpenses];
    });
  };
  return (
    <div>
      <Row>
        <Col span={1}/>
        <Col span={6}>
          <Card>
            <Space direction="vertical" size="small">
              <Row>
                <Space direction="horizontal" size="middle">
                  <Col span={1}/>
                  <TextAdder onDragEnd={onClick}/>
                  <CheckBoxAdder onDragEnd={onClick}/>
                  <ButtonAdder onDragEnd={onClick}/>
                </Space>

              </Row>
              <Row>
                <Col span={1}/>
                <Col span={6}>
                  <DateAdder onDragEnd={onClick}/>
                </Col>
              </Row>
            </Space>
          </Card>
        </Col>
        <Col span={1}/>
        <Col span={15}>
          <Card>
            <ul>
              <Space direction="vertical" size="small" style={{ display: 'flex' }}>
              {dropped.map((element) => (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {element.id === 1 && <input/>}
                  {element.id === 2 && <Checkbox><input/></Checkbox>}
                  {element.id === 3 && <ButtonReturner/>}
                  {element.id === 4 && '<AddressReturner/>'}
                </div>
              ))}
              </Space>
            </ul>
          </Card>
        </Col>
        <Col span={1}/>
      </Row>
    </div>
  );
}

export default App;

