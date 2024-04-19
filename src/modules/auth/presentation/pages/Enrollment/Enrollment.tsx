import React, {useRef, useState} from 'react';
import {FlatList, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {slides} from '@modules/auth/domain/slide.data';
import {Container} from '@shared/presentation/components/Container';
import {DeviceDimensions} from '@shared/presentation/utils/device';
import {ItemSlide} from '@modules/auth/domain/slide.data';
import {Slide} from '@modules/auth/presentation/components/Slide';
import {AuthRoutesName} from '@modules/auth/domain/routes-names';
import {AuthStackParamList} from '@modules/auth/domain/navigation';

type EnrollmentScreenNavigationProps = StackScreenProps<
  AuthStackParamList,
  AuthRoutesName.Enrollment
>;

const Enrollment: React.FC<EnrollmentScreenNavigationProps> = ({
  navigation,
}) => {
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
    } else {
      navigation.replace(AuthRoutesName.Login);
    }
  };

  return (
    <Container>
      <FlatList<ItemSlide>
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
        renderItem={({item}) => (
          <Slide
            item={item}
            key={item.id}
            currentSlideIndex={currentSlideIndex}
            goToNextSlide={goToNextSlide}
          />
        )}
      />
    </Container>
  );
};

export default Enrollment;
