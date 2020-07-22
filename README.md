<h1 align="center">
  🚩 Theme-Provider
</h1>

<div align="center">

Wrapper of Context for Theme.

[![Version][version-badge]][package]

</div>

<p align="center" >
  <kbd>
    <img src="docs/assets/theme_demo.gif" title="Scroll Demo" float="center">
  </kbd>
  <br>
  <em>Theme-Provider example app.</em>
</p>

## Usage

**Note: You must be using React Native 0.60.0 or higher to use the most recent version of `react-native-theme-provider`.**

```bash
yarn add react-native-theme-provider
```
OR FROM GIT
```bash
yarn add https://github.com/rabiloo/react-native-theme-provider.git
```

```jsx
import {ThemeContainer, DefaultThemeConfig} from 'react-native-theme-provider';

const App = () => (
    <ThemeContainer
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
        <YourApp />
    </ThemeContainer>
)
```

## Are you using Glide already using an AppGlideModule?

-   [Are you using Glide already using an AppGlideModule?](docs/app-glide-module.md) (you might have problems if you don't read this)

## Are you using Proguard?

If you use Proguard you will need to add these lines to `android/app/proguard-rules.pro`:

```
-keep public class com.dylanvann.fastimage.* {*;}
-keep public class com.dylanvann.fastimage.** {*;}
-keep public class * implements com.bumptech.glide.module.GlideModule
-keep public class * extends com.bumptech.glide.module.AppGlideModule
-keep public enum com.bumptech.glide.load.ImageHeaderParser$** {
  **[] $VALUES;
  public *;
}
```

## Properties

### `source?: object`

Source for the remote image to load.

---

### `source.uri?: string`

Remote url to load the image from. e.g. `'https://facebook.github.io/react/img/logo_og.png'`.

---

### `source.headers?: object`

Headers to load the image with. e.g. `{ Authorization: 'someAuthToken' }`.

---

### `source.priority?: enum`

-   `FastImage.priority.low` - Low Priority.
-   `FastImage.priority.normal` **(Default)** - Normal Priority.
-   `FastImage.priority.high` - High Priority.

---

### `source.cache?: enum`

-   `FastImage.cacheControl.immutable` - **(Default)** - Only updates if url changes.
-   `FastImage.cacheControl.web` - Use headers and follow normal caching procedures.
-   `FastImage.cacheControl.cacheOnly` - Only show images from cache, do not make any network requests.

---

### `resizeMode?: enum`

-   `FastImage.resizeMode.contain` - Scale the image uniformly (maintain the image's aspect ratio) so that both dimensions (width and height) of the image will be equal to or less than the corresponding dimension of the view (minus padding).
-   `FastImage.resizeMode.cover` **(Default)** - Scale the image uniformly (maintain the image's aspect ratio) so that both dimensions (width and height) of the image will be equal to or larger than the corresponding dimension of the view (minus padding).
-   `FastImage.resizeMode.stretch` - Scale width and height independently, This may change the aspect ratio of the src.
-   `FastImage.resizeMode.center` - Do not scale the image, keep centered.

---

### `onLoadStart?: () => void`

Called when the image starts to load.

---

### `onProgress?: (event) => void`

Called when the image is loading.

e.g. `onProgress={e => console.log(e.nativeEvent.loaded / e.nativeEvent.total)}`

---

### `onLoad?: (event) => void`

Called on a successful image fetch. Called with the width and height of the loaded image.

e.g. `onLoad={e => console.log(e.nativeEvent.width, e.nativeEvent.height)}`

---

### `onError?: () => void`

Called on an image fetching error.

---

### `onLoadEnd?: () => void`

Called when the image finishes loading, whether it was successful or an error.

---

### `style`

A React Native style. Supports using `borderRadius`.

---

### `fallback: boolean`

If true will fallback to using `Image`.
In this case the image will still be styled and laid out the same way as `FastImage`.

---

### `tintColor?: number | string`

If supplied, changes the color of all the non-transparent pixels to the given color.

## Static Methods

### `FastImage.preload: (source[]) => void`

Preload images to display later. e.g.

```js
FastImage.preload([
    {
        uri: 'https://facebook.github.io/react/img/logo_og.png',
        headers: { Authorization: 'someAuthToken' },
    },
    {
        uri: 'https://facebook.github.io/react/img/logo_og.png',
        headers: { Authorization: 'someAuthToken' },
    },
])
```

## Supported React Native Versions

This project only aims to support the latest version of React Native.\
This simplifies the development and the testing of the project.

If you require new features or bug fixes for older versions you can fork this project.


## Licenses
MIT