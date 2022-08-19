import React from 'react';
import { colors } from '../../../configs';
import { Label } from '../../atoms';
import Wrapper from './style';

const Index = (props) => {
  const { image, title, subtitle, footer } = props;
  return (
    <Wrapper>
      <div className="component_card">
        <div className="component_card_image">
          <img src={image} alt="" />
        </div>
        <div className="component_card_main">
          <div className="component_header">
            <div className="component_title">
              <Label
                color={colors.dark1}
                size={{ sm: 14, md: 14 }}
                unit="px"
                weight={600}
              >
                {title}
              </Label>
            </div>
            <div className="component_subtitle">
              <Label color={colors.dark2} size={{ sm: 14, md: 14 }} unit="px">
                {subtitle}
              </Label>
            </div>
          </div>
          <div className="component_footer">
            <Label color={colors.primary}>{footer}</Label>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Index;
