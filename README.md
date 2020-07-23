<h1 align="center">
  🚩 Theme-Provider
</h1>

<div align="center">

Wrapper of Context for Theme.

</div>

<p align="center" >
  <kbd>
    <img src="docs/assets/theme_demo.gif" style="height:500px" title="Theme Demo" float="center">
  </kbd>
  <br>
  <em>Theme-Provider example app.</em>
</p>

## Usage

**Note: You must be using React Native 0.60.0 or higher to use the most recent version of `@rabiloo/react-native-theme-provider`.**

Install AsyncStorage first:
### Follow [react-native-community/async-storage](https://github.com/react-native-community/async-storage)

<br>

```bash
yarn add @rabiloo/react-native-theme-provider
```
OR FROM GIT
```bash
yarn add https://github.com/rabiloo/react-native-theme-provider.git
```

```jsx
- Step 1: Wrapper your App Root 

import {ThemeContainer, DefaultThemeConfig} from '@rabiloo/react-native-theme-provider';

const App = () => (
    <ThemeContainer
      cache={true}
      initialThemeCode={DefaultThemeConfig.dark}
      data={{
        dark: {
          background: 'black',
          text: 'white',
        },
        light: {
          background: 'white',
          text: 'black',
        },
      }}>
        <Demo />
    </ThemeContainer>
)

```
```DefaultThemeConfig : dark, light, base_device (dynamic dark, light based on your phone theme)```
```jsx
- Step 2: use useThemeColor hook to get Colors data

import {useThemeColor, ThemeService} from '@rabiloo/react-native-theme-provider';

const Demo = () => {
  const {Colors, setThemeCode} = useThemeColor();

  return (
      <View
        style={{
          backgroundColor: Colors.background,
          flex:1,
        }}>
        <Text
          style={{color: Colors.text}}
          onPress={() => {
            //get current theme code
            const currentColorScheme = ThemeService.getColorScheme();
            
            // change to what you want
            setThemeCode({
              themeCode: currentColorScheme === 'light' ? 'dark' : 'light',
            });
          }}>
          Change theme
        </Text>
      </View>
  );
};

```
## Properties

### `data?: object`

Source for App Colors.e.g. 
```js
data= {{ dark: {
          background: 'black',
          text: 'white',
        },
        light: {
          background: 'white',
          text: 'black',
        }}
```    
---
### `cache?: boolean`
Save your current theme code to AsyncStorage if ```initialThemeCode !== DefaultThemeConfig.base_device```
 
---
## Supported React Native Versions

This project only aims to support the latest version of React Native.\
This simplifies the development and the testing of the project.

If you require new features or bug fixes for older versions you can fork this project.


## Licenses
MIT