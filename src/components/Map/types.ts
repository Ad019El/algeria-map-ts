export type  DefaultType = {
  value : number,
  color? : string
}
export interface IMapProps<T = DefaultType> {
  height?: string;
  width?: string;
  color?: string;
  stroke?: string;
  hoverStroke?: string;
  HoverColor?: string;
  data: { [key: string]: T };
  onWilayaClick?: (wilaya: string, value: DefaultType) => void;
  getHoverContent?: (record : DefaultType) => string;
  hoverContentStyle? : React.CSSProperties,
  getHoverContentStyle? : (record : any) => React.CSSProperties
}
