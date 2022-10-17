import {useColorScheme} from 'react-native';
import {DarkTheme, DefaultTheme} from 'react-native-paper';

const FIREHOSE_RED = '#b71c1c';

export default function useTheme() {
  const colorSchema = useColorScheme();

  const baseTheme = colorSchema === 'dark' ? DarkTheme : DefaultTheme;

  const theme = {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
      primary: FIREHOSE_RED,
    },
  };

  return theme;
}
