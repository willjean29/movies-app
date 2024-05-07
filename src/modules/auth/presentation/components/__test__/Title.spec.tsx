import { render } from '@testing-library/react-native';
import { Text } from '@shared/presentation/components/Text';
import { ThemeProvider } from 'styled-components/native';
import { darkTheme, lightTheme, Theme } from '@shared/config/theme';

describe('Render title component', () => {
  it('should render title component correctly', () => {
    // Arrange
    const title = 'Find the latest and greatest movies here';
    // Act
    const { getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <Text>{title}</Text>
      </ThemeProvider>,
    );
    // Assert
    expect(getByText(title)).toBeDefined();
  });
});
