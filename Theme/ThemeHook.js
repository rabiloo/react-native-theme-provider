import {useContext} from 'react';
import {ThemeContext} from './ThemeContext';
import {ThemeService, DefaultThemeConfig} from './ThemeService';

function useThemeColor() {
  const {Colors} = useContext(ThemeContext);

  const setThemeCode = ({themeCode = DefaultThemeConfig.base_device}) => {
    ThemeService.set({themeCode});
  };

  return {Colors, setThemeCode};
}
export {useThemeColor};
