import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import jsonData from "../../../MOCK/wilaya_data_v1.json";

import Map from "./Map";

const meta: Meta<typeof Map> = {
  component: Map,
};

export default meta;
type Story = StoryObj<typeof Map>;

const assignColor = (value: number) => {
  if (value <= 50) {
    return "#fff9eb";
  } else if (value <= 100) {
    return "#ebf9ee";
  } else if (value <= 250) {
    return "#cef0d7";
  } else if (value <= 500) {
    return "#a7e4b7";
  } else if (value <= 1000) {
    return "#7ed896";
  } else if (value <= 5000) {
    return "#57cc76";
  } else {
    return "#32c158";
  }
};

// add color rage for each wilaya and add the color to the map
const multipleColor = Object.entries(jsonData).reduce<{ [key: string]: any }>(
  (acc, [wilaya, value]) => {
    acc[wilaya] = { ...value, color: assignColor(value.value) };
    return acc;
  },
  {}
);

export const OneColor: Story = {
  render: () => (
    <Map
      data={jsonData}
      color="#2ab7ca"
      HoverColor="#f4f4f8"
      stroke="#000000"
      hoverStroke="#000000"
    />
  ),
};

export const MultipleColor: Story = {
  render: () => (
    <Map
      data={multipleColor}
      HoverColor="#f4f4f8"
      stroke="#000000"
      hoverStroke="#000000"
    />
  ),
};
