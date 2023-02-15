import './App.css';
import LeftMenu from "./Components/LeftMenu";
import {Col,Row,Space} from 'antd';
function App() {
  return (
    <div>
      <Row>
        <Col span={6}>
          <LeftMenu/>
        </Col>
        <Col span={2}/>
        <Col span={16}>

        </Col>
      </Row>
    </div>
  );
}

export default App;
