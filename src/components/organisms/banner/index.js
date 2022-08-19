import React from 'react';
import { colors } from '../../../configs';
import { Label } from '../../atoms';
import Wrapper from './style';

const Index = () => {
  return (
    <Wrapper>
      <Label
        className="component_title"
        size={{ sm: 2, md: 2 }}
        color={colors.primary}
        weight={700}
      >
        Konsultasi dengan Dokter Spesialis
      </Label>
      <Label color={colors.dark2}>
        Dapatkan solusi untuk masalah kesehatan Anda dari dokter spesialis yang
        berpengalaman
      </Label>
    </Wrapper>
  );
};

export default Index;
