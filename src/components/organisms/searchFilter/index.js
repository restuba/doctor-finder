import { Col, Row } from 'antd';
import React from 'react';
import { Input, Label, Select } from '../../atoms';
import Wrapper from './style';

const Index = (props) => {
  const { title, options } = props;
  return (
    <Wrapper>
      <Row gutter={[32, 32]}>
        <Col span={24}>
          <div className="component_filter_form">
            <Row gutter={[20, 20]}>
              <Col span={24}>
                <Label size={{ sm: 16, md: 18 }} unit="px" weight={600}>
                  {title}
                </Label>
              </Col>
              <Col span={24}>
                <Row gutter={[16, 16]}>
                  <Col xs={24} md={8}>
                    <Input placeholder="Keyword" />
                  </Col>
                  <Col xs={24} md={8}>
                    <Select
                      mode="multiple"
                      allowClear
                      showSearch
                      options={options}
                      placeholder="Hospital"
                      style={{ display: 'block' }}
                      maxTagCount={1}
                    />
                  </Col>
                  <Col xs={24} md={8}>
                    <Select
                      mode="multiple"
                      allowClear
                      showSearch
                      options={options}
                      placeholder="Specialization"
                      style={{ display: 'block' }}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Index;
