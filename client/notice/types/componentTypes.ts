type CoordinatesTuple = {
  x: number;
  y: number;
};
type SizeTuple = {
  width: number;
  height: number;
};
type PositionEnd = 'down' | 'up';
type Position = PositionEnd | 'middle' | 'upper';
type CustomSize = 'small' | 'medium' | 'large';

export enum Languages {
  En = 'en',
  DE = 'de',
}

export type { CoordinatesTuple, SizeTuple, PositionEnd, Position, CustomSize };
