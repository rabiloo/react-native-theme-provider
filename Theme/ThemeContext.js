import React, {useState, useEffect} from 'react';
import {Appearance} from 'react-native';
import PropTypes from "prop-types"

import {ThemeService, DefaultThemeConfig} from './ThemeService';
import {ThemeLocal} from './ThemeLocal';

const ThemeContext = React.createContext({Colors: {}});
/**
 *
 * @param {*} data Colors:{light:{}, dark:{}}
 * * @param {*} initialThemeCode dark, light,...
 */
function ThemeContainer({
  children,
  data,
  initialThemeCode = DefaultThemeConfig.light,
  cache,
  onThemeDone,
}) {
  const [Colors, setColors] = useState(() => {
    if (initialThemeCode === DefaultThemeConfig.base_device) {
      //{dark,light, null}
      let colorScheme = Appearance.getColorScheme();
      if (colorScheme === null) {
        colorScheme = DefaultThemeConfig.light;
      }
      return data[colorScheme];
    }
    return data[initialThemeCode];
  });
  useEffect(() => {
    ThemeService.onChange({key: 'ThemeContainer'}, (themeCode) => {
      setColors(data[themeCode]);
      if (cache) {
        const currentCode = ThemeService.getThemeCode();
        ThemeLocal.save(currentCode);
      }
    });
    Appearance.addChangeListener(({colorScheme = DefaultThemeConfig.light}) => {
      const themeCode = ThemeService.getThemeCode();
      if (
        themeCode === DefaultThemeConfig.base_device &&
        themeCode !== colorScheme
      ) {
        ThemeService.set({themeCode: colorScheme});
      }
    });

    if (cache) {
      const checkThemeLocal = async () => {
        const mode = await ThemeLocal.get();
        console.log('mode', mode);
        if (mode) {
          ThemeService.set({themeCode: mode});
        } else {
          ThemeService.set({themeCode: DefaultThemeConfig.base_device});
        }
        if (onThemeDone) {
          onThemeDone();
        }
      };
      checkThemeLocal();
    }
  }, []);

  return (
    <ThemeContext.Provider value={{Colors}}>{children}</ThemeContext.Provider>
  );
}

ThemeContainer.propTypes = {
  children: PropTypes.element,
  data: PropTypes.object,
  initialThemeCode: PropTypes.string,
  cache: PropTypes.bool,
  onThemeDone: PropTypes.func
};

export {ThemeContext, ThemeContainer};
