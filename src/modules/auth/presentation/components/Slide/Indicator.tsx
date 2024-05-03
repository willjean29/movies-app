import React from 'react';
import styled from 'styled-components/native';
import {slides} from '@modules/auth/domain/slide.data';
import {scale} from 'react-native-size-matters';

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
  margin-top: ${() => scale(10)}px;
`;
const StyledIndicator = styled.View<{isCurrentSlide: boolean}>`
  width: ${({isCurrentSlide}) => (isCurrentSlide ? scale(20) : scale(5))}px;
  height: ${() => scale(5)}px;
  border-radius: ${() => scale(5)}px;
  margin-right: ${() => scale(10)}px;
  background-color: ${({isCurrentSlide, theme}) =>
    isCurrentSlide ? theme.colors.primary : theme.colors.border};
`;

export default Indicator;
