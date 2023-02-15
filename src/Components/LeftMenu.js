import React from "react";
import Card from "./UI/Card";
import Text from "./Draggables/Text";
import Input from "./Draggables/Input";
import {Col, Row} from "antd";
import CheckBox from "./Draggables/CheckBox";

const LeftMenu = () => {
  return(
    <Card>
      <Row>
        <Col span={7}>
          <Text />
        </Col>
        <Col span={1}/>
        <Col span={7}>
          <Input />
        </Col>
        <Col span={1}/>
        <Col span={7}>
          <CheckBox />
        </Col>
      </Row>
    </Card>
  )
}

export default LeftMenu;