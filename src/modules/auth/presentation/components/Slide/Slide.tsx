import React from 'react';
import {
  FlexContainer,
  SpacingContainer,
} from '@shared/presentation/components/Container';
import {DeviceDimensions} from '@shared/presentation/utils/device';
import {Text} from '@shared/presentation/components/Text';
import {Icon} from '@shared/presentation/components/Icon';
import {Image} from '@shared/presentation/components/Image';
import {IconAssets} from '@shared/presentation/utils/icons';
import {ItemSlide} from '@modules/auth/domain/slide.data';
import {Indicator} from '../Indicator';

interface SlideProps {
  item: ItemSlide;
  currentSlideIndex: number;
  goToNextSlide: () => void;
}
const Slide: React.FC<SlideProps> = ({
  item,
  currentSlideIndex,
  goToNextSlide,
}) => {
  return (
    <FlexContainer width={DeviceDimensions.Width}>
      <FlexContainer height={DeviceDimensions.Height * 0.2}>
        <SpacingContainer paddingHorizontal={20}>
          <Text size="HeadlineSmall" weight="bold">
            {item.title}
          </Text>
          <SpacingContainer marginVertical={10}>
            <Text size="BodyMedium">{item.subtitle}</Text>
          </SpacingContainer>
          <Icon
            name="arrow-right-bold"
            mode="button"
            size={20}
            onPress={goToNextSlide}
          />
          <Indicator currentSlideIndex={currentSlideIndex} />
        </SpacingContainer>
      </FlexContainer>

      <FlexContainer
        height={DeviceDimensions.Height * 0.8}
        mode="row"
        justifyContent="center"
        alignItems="flex-end">
        <Image
          width={DeviceDimensions.Width}
          height={DeviceDimensions.Height * 0.75}
          source={IconAssets.Step1}
        />
      </FlexContainer>
    </FlexContainer>
  );
};

export default Slide;
