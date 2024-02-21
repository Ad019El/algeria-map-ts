export interface IMapProps {
  height?: string;
  width?: string;
  color?: string;
  stroke?: string;
  hoverStroke?: string;
  HoverColor?: string;
  data: { [key: string]: { value: number | string; color?: string } };
  onWilayaClick?: (wilaya: string, value: number | string) => void;
}
