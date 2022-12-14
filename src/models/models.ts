import { Vector3 } from "three";

export type Item = {
  name: string;
  type?: string;
  color?: string;
  namespace?: string;
  parent?: Item;
  children: Item[];
  position?: Vector3;
};

export type Edge = {
  from: Item;
  to: Item;
  size: number;
};

export type Options = {
  edges?: boolean;
  resourceHTML?: boolean;
}