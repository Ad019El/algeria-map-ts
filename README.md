# react-algeria-map-ts

A React component that displays an interactive map of Algeria including all 58 wilayas.

## Installation

This component is available via npm. To install, run the following command:

```bash
npm install --save algeria-map-ts
```

## Usage

The component is straightforward to use. First, import it, and then use it as a regular React component:

**Example:**

```ts
import { Map } from "react-algeria-map-ts";

<Map
  color="#55E6C1"
  HoverColor="#58B19F"
  stroke="#fff"
  hoverStroke="#218c74"
  height="400px"
  width="400px"
  data={data}
  onWilayaClick={(wilaya, data) => console.log(wilaya, data)}
/>;
```

### Props

| Prop          | Type                                                            | Description                                                                                                                                                                             |
| ------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| color         | string                                                          | Set the color of the wilayas in the map                                                                                                                                                 |
| HoverColor    | string                                                          | Set the color of the hovered wilaya                                                                                                                                                     |
| stroke        | string                                                          | Set the color of the borders of the wilayas                                                                                                                                             |
| hoverStroke   | string                                                          | Set the color of the borders of the hovered wilaya                                                                                                                                      |
| height        | string                                                          | Set the occupied height by the map                                                                                                                                                      |
| width         | string                                                          | Set the occupied width by the map                                                                                                                                                       |
| data          | object                                                          | Sets the data to show in hover or click actions on each wilaya. <br>The keys are fixed, and the values of the keys <br>can be anything you want to show, including `value` and `color`. |
| onWilayaClick | function(key: string, value: string \| number \| boolean): void | The callback function to execute when the wilaya is being clicked                                                                                                                       |

## Data Prop

The `data` prop is an object where each key is the name of the wilaya, and its value is an `object` with `value` and `color` properties. The value represents the data to display, and color is the color of the wilaya.

**Exmaple:**

```js
const data = {
  Adrar: { value: 120, color: "#fff9eb" },
  Alger: { value: 60, color: "#ebf9ee" },
  // ... other wilayas
};
```

Feel free to customize the data object to include the specific values and colors you want for each wilaya.

## TypeScript Support

The component is now fully compatible with TypeScript. Benefit from type checking and improved developer experience.

## Credits

This project is an enhancement of the original [react-algeria-map](https://github.com/AkliYalaoui/react-algeria-map). The improvements and additional features were contributed by [Ad019El](https://github.com/Ad019El), building upon the foundation laid by the original creators.
