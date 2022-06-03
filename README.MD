[See it in action](https://creative-monstera-a891f1.netlify.app/#/menu/sign-in)

This is a simple project that calls the Reddit r/images API and displays a list of cards. The two components are 'Background-component' and 'item-component'. the Background maps through the data received form Reddit and generates the same number of 'items'.

## Getting the component

In your Ionic project install this npm package
[initial-components-ori](https://www.npmjs.com/package/initial-components-ori)

```bash
npm install initial-components-ori
```

## Using the custom component

Inside `main.ts` add the import

```tsx
import { defineCustomElements } from 'initial-components-ori/loader';
```

and below...

```tsx
defineCustomElements(window);
```

Inside the `module.ts` folder of the page where you would like to use the component add

```tsx
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
---
@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, StencilPageRoutingModule],
  declarations: [StencilPage],
 --> schemas: [CUSTOM_ELEMENTS_SCHEMA],<--
})
```

To use this component, just use it like any other HTML element, and include a valid reddit url

```html
<background-component urls="https://www.reddit.com/r/Images.json?raw_json=1"> </background-component>
```

## Thanks
