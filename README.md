# algeria-map-ts

A React component that displays an interactive map of Algeria including all 58 wilayas.

## Demo

You can see a live demo of the component in action at the following link:

[Live Demo](https://codesandbox.io/p/devbox/algeria-map-ts-v9p6zg)

## Installation

This component is available via npm. To install, run the following command:

**npm**

```bash
npm install --save algeria-map-ts
```

**yarn**

```bash
yarn add algeria-map-ts
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

| Prop          | Type                                                            | Description                                                                                                                                                                                                              |
| ------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| color         | string                                                          | Set the default color of the wilayas in the map                                                                                                                                                                          |
| HoverColor    | string                                                          | Set the color of the hovered wilaya                                                                                                                                                                                      |
| stroke        | string                                                          | Set the color of the borders of the wilayas                                                                                                                                                                              |
| hoverStroke   | string                                                          | Set the color of the borders of the hovered wilaya                                                                                                                                                                       |
| height        | string                                                          | Set the occupied height by the map                                                                                                                                                                                       |
| width         | string                                                          | Set the occupied width by the map                                                                                                                                                                                        |
| data          | object                                                          | Sets the data to show in hover or click actions on each wilaya. <br>The keys are fixed, and the values of the keys <br> `value` and `color` if u didn't give a color to a wilaya then the default color will be applied. |
| onWilayaClick | function(key: string, value: string \| number \| boolean): void | The callback function to execute when the wilaya is being clicked                                                                                                                                                        |

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

## Contributing

We warmly welcome contributions from everyone, regardless of their level of expertise.

If you're making a major change, it's a good idea to create an issue first to discuss it.

To start contributing, follow these steps:

1. Fork the repo.
2. Clone your fork: `git clone https://github.com/Ad019El/algeria-map-ts.git`
3. Create your feature branch: `git checkout -b my-new-feature`
4. Make your changes and commit them: `git commit -am 'Add some feature'`
5. Push to the branch: `git push origin my-new-feature`
6. Submit a pull request.

We'll review your pull request as soon as we can. Thanks for your contribution!

## Credits

This project is an enhancement of the original [react-algeria-map](https://github.com/AkliYalaoui/react-algeria-map). The improvements and additional features were contributed by [Ad019El](https://github.com/Ad019El), building upon the foundation laid by the original creators.
