import { Col, Row } from 'antd';
import React from 'react';
import { timeoutFunc } from '../../../utils';
import { Input, Label, Select } from '../../atoms';
import Wrapper from './style';

let searchTimeout = 0;
const Index = (props) => {
  const {
    title,
    inputProps,
    selectProps,
    additionalSelectProps,
    onChangeFilter,
  } = props;
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
                    <Input
                      placeholder={inputProps?.placeholder}
                      onChange={(e) => {
                        searchTimeout = timeoutFunc(
                          searchTimeout,
                          () => {
                            onChangeFilter(e.target.value, inputProps?.key);
                          },
                          700
                        );
                      }}
                    />
                  </Col>
                  <Col xs={24} md={8}>
                    <Select
                      mode="multiple"
                      allowClear
                      showSearch
                      options={selectProps?.options || []}
                      placeholder={selectProps?.placeholder}
                      style={{ display: 'block' }}
                      maxTagCount={1}
                      onChange={(data) => {
                        onChangeFilter(data, selectProps?.key);
                      }}
                    />
                  </Col>
                  <Col xs={24} md={8}>
                    <Select
                      mode="multiple"
                      allowClear
                      showSearch
                      options={additionalSelectProps?.options || []}
                      placeholder={additionalSelectProps?.placeholder}
                      style={{ display: 'block' }}
                      onChange={(data) => {
                        onChangeFilter(data, additionalSelectProps?.key);
                      }}
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
