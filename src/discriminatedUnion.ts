export type BadShape = {
  kind: string;
  radius?: number;
  width?: number;
  height?: number;
  size?: number;
};

export type goodShape =
  | { kind: 'circle'; radius: number }
  | { kind: 'rectangle'; width: number; height: number }
  | { kind: 'square'; size: number };
