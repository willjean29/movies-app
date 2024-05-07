import { FlexContainer } from '@shared/presentation/components/Container';
import { Text } from '@shared/presentation/components/Text';
import styled from 'styled-components/native';
interface TitleProps {
  title: string;
}
const Title: React.FC<TitleProps> = ({ title }) => {
  const words = title.split(' ');
  const length = words.length;
  const isLongTitle = length > 6;
  const mainWordsLength = isLongTitle ? 3 : 2;

  const firsWords = words.slice(0, 2).join(' ');
  const maintWords = words.slice(2, 2 + mainWordsLength).join(' ');
  const lastWords = words.slice(2 + mainWordsLength).join(' ');

  return (
    <FlexContainer mode="row" justifyContent="flex-start" alignItems="center" wrap="wrap">
      <Text size="HeadlineSmall" weight="bold">
        {firsWords}{' '}
      </Text>
      <StyledMainText size="HeadlineSmall" weight="bold">
        {maintWords}{' '}
      </StyledMainText>
      <Text size="HeadlineSmall" weight="bold">
        {lastWords}
      </Text>
    </FlexContainer>
  );
};

const StyledMainText = styled(Text)`
  color: ${({ theme }) => theme.colors.primary};
`;

export default Title;
