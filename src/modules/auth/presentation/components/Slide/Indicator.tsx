import React from 'react';
import styled from 'styled-components/native';
import {slides} from '@modules/auth/domain/slide.data';

interface IndicatorProps {
  currentSlideIndex: number;
}
const Indicator: React.FC<IndicatorProps> = ({currentSlideIndex}) => {
  return (
    <StyledIndicatorContainer>
      {slides.map((_, index) => {
        const isCurrentSlide = index === currentSlideIndex;
        return <StyledIndicator key={index} isCurrentSlide={isCurrentSlide} />;
      })}
    </StyledIndicatorContainer>
  );
};

const StyledIndicatorContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 20px 0;
`;
const StyledIndicator = styled.View<{isCurrentSlide: boolean}>`
  width: ${({isCurrentSlide}) => (isCurrentSlide ? 20 : 5)}px;
  height: 5px;
  border-radius: 5px;
  margin-right: 10px;
  background-color: ${({isCurrentSlide, theme}) =>
    isCurrentSlide ? theme.colors.primary : theme.colors.border};
`;

export default Indicator;
