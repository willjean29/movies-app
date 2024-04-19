import {
  Container,
  FlexContainer,
  SpacingContainer,
} from '@shared/presentation/components/Container';
import {Icon} from '@shared/presentation/components/Icon';
import {Image} from '@shared/presentation/components/Image';
import {Text} from '@shared/presentation/components/Text';
import {DeviceDimensions} from '@shared/presentation/utils/device';
import {IconAssets} from '@shared/presentation/utils/icons';
import React, {useRef, useState} from 'react';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  View,
} from 'react-native';

const slides = [
  {
    id: '1',
    title: 'Find the lasted and greatest movie here',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
  },
  {
    id: '2',
    title: 'Achieve Your Goals',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
  },
  {
    id: '3',
    title: 'Increase Your Value',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
  },
];

const Enrollment = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef<FlatList>(null);

  const updateCurrentSlideIndex = (
    e: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / DeviceDimensions.Width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
      ref.current?.scrollToIndex({index: currentSlideIndex + 1});
    }
  };

  const Slide = ({item}: {item: any}) => (
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

  return (
    <Container>
      <FlatList
        data={slides}
        horizontal
        ref={ref}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onMomentumScrollEnd={updateCurrentSlideIndex}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          width: DeviceDimensions.Width * slides.length,
        }}
        renderItem={({item}) => <Slide item={item} key={item.id} />}
      />
    </Container>
  );
};

export default Enrollment;
