export interface IMapProps {
  height?: string;
  width?: string;
  color?: string;
  stroke?: string;
  hoverStroke?: string;
  HoverColor?: string;
  data: { [key: string]: { value: number | string; color?: string } };
  onWilayaClick?: (wilaya: string, value: number | string) => void;
  getHoverContent?: (record : any) => string;
  hoverContentStyle? : React.CSSProperties,
  getHoverContentStyle? : (record : any) => React.CSSProperties
}
