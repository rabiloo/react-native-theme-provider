import {Appearance} from 'react-native';

const DefaultThemeConfig = {
  base_device: 'base_device',
  light: 'light',
  dark: 'dark',
};

const changeListeners = {};

let theme;

const ThemeService = {
  getThemeCode: () => theme,
  getColorScheme: () => {
    let colorScheme = theme;

    if (theme === DefaultThemeConfig.base_device) {
      //colorScheme : {dark,light, null}
      colorScheme = Appearance.getColorScheme();
    }
    //default is light
    if (colorScheme === null) {
      colorScheme = DefaultThemeConfig.light;
    }
    return colorScheme;
  },
  set: ({themeCode}) => {
    theme = themeCode;
    let colorScheme = themeCode;

    if (themeCode === DefaultThemeConfig.base_device) {
      //colorScheme : {dark,light, null}
      colorScheme = Appearance.getColorScheme();
    }
    //default is light
    if (colorScheme === null) {
      colorScheme = DefaultThemeConfig.light;
    }
    Object.keys(changeListeners).forEach((k) =>
      changeListeners[`${k}`](colorScheme),
    );
  },
  onChange: ({key}, cb) => {
    changeListeners[`${key}`] = (themeCode) => cb(themeCode);
  },
};

export {ThemeService, DefaultThemeConfig};
