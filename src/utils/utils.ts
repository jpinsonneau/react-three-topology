import { Item } from '../models';

export function flatten(items: Item[]) {
  let flattened: Item[] = [];
  flattened = flattened.concat(items);
  items.forEach(i => {
    flattened = flattened.concat(flatten(i.children));
  });
  return flattened;
}