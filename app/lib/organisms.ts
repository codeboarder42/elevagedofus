export interface PieData {
  name: string;
  value: number;
}

export interface PieChartCompProps {
  data: PieData[];
  colors: { [key: string]: string };
}

export interface BarData {
  name: string;
  [key: string]: number | string;
}

export interface BarChartCompProps {
  data: BarData[];
  colors: { [key: string]: string };
}
