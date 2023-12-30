import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Map from "./Map";

const mockData = {
  Adrar: { value: 120 },
  Alger: { value: 60 },
  Annaba: { value: 10 },
  "Aïn Defla": { value: 30 },
  "Aïn Témouchent": { value: 20 },
  Batna: { value: 40 },
  Biskra: { value: 50 },
  Blida: { value: 70 },
  "Bordj Badji Mokhtar": { value: 80 },
  "Bordj Bou Arreridj": { value: 90 },
  Bouira: { value: 100 },
  Boumerdès: { value: 110 },
  Béchar: { value: 130 },
  Béjaïa: { value: 140 },
  "Béni Abbès": { value: 150 },
  Chlef: { value: 160 },
  Constantine: { value: 170 },
  Djanet: { value: 180 },
  Djelfa: { value: 190 },
  "El Bayadh": { value: 200 },
  "El Meghaier": { value: 210 },
  "El Menia": { value: 220 },
  "El Oued": { value: 230 },
  "El Tarf": { value: 240 },
  Ghardaïa: { value: 250 },
  Guelma: { value: 260 },
  Illizi: { value: 270 },
  "In Guezzam": { value: 280 },
  "In Salah": { value: 290 },
  Jijel: { value: 300 },
  Khenchela: { value: 310 },
  Laghouat: { value: 320 },
  "M'Sila": { value: 330 },
  Mascara: { value: 340 },
  Mila: { value: 350 },
  Mostaganem: { value: 360 },
  Médéa: { value: 370 },
  Naâma: { value: 380 },
  Oran: { value: 390 },
  Ouargla: { value: 400 },
  "Ouled Djellal": { value: 41 },
  "Oum El Bouaghi": { value: 42 },
  Relizane: { value: 483 },
  Saïda: { value: 144 },
  "Sidi Bel Abbès": { value: 45 },
  Skikda: { value: 406 },
  "Souk Ahras": { value: 47 },
  Sétif: { value: 498 },
  Tamanrasset: { value: 49 },
  Tiaret: { value: 50 },
  Timimoun: { value: 51 },
  Tindouf: { value: 52 },
  Tipaza: { value: 53 },
  Tissemsilt: { value: 54 },
  "Tizi Ouzou": { value: 55 },
  Tlemcen: { value: 56 },
  Touggourt: { value: 57 },
  Tébessa: { value: 58 },
};

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

// add color range for each wilaya and add the color to the map
const multipleColor = Object.entries(mockData).reduce<{ [key: string]: any }>(
  (acc, [wilaya, value]) => {
    acc[wilaya] = { ...value, color: assignColor(value.value) };
    return acc;
  },
  {}
);

export const OneColor: Story = {
  render: () => (
    <Map
      data={mockData}
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
