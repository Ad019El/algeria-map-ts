import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import jsonData from "../../../MOCK/wilaya_data_v1.json";

import Map from "./Map";

const meta: Meta<typeof Map> = {
  component: Map,
};

export default meta;
type Story = StoryObj<typeof Map>;

const data = jsonData;
console.log(data);

export const OneColor: Story = {
  render: () => (
    <Map
      data={data}
      color="#2ab7ca"
      HoverColor="#f4f4f8"
      stroke="#000000"
      hoverStroke="#000000"
    />
  ),
};
