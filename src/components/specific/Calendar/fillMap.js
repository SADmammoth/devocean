import { elementsTypes } from '@sadmammoth/react-dnd';

export default function fillMap(
  map,
  columns,
  rows,
  defaultDropAreaClassName,
  hiddenClassName,
) {
  const fullMap = [];
  const hidden = [];
  let found;
  let foundHidden;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < columns; x++) {
      // foundHidden = findByIndex(hidden, x, y);
      // if (foundHidden) {
      //   fullMap.push(foundHidden);
      //   continue;
      // }
      found = findByIndex(map, x, y);
      if (found) {
        fullMap.push(found);
        // if (found.height && found.height > 1) {
        //   for (let i = y + 1; i < y + found.height; i++) {
        //     console.log(x, i);
        //     hidden.push({
        //       type: elementsTypes.hidden,
        //       className: hiddenClassName,
        //       index: { x, y: i },
        //     });
        //   }
        // }
      } else {
        fullMap.push({
          type: elementsTypes.dropArea,
          className: defaultDropAreaClassName,
          index: { x, y },
          key: '' + x + y,
        });
      }
    }
  }

  return fullMap;
}

function findByIndex(map, x, y) {
  return map.find(
    ({ index: { x: candX, y: candY } }) => x === candX && y === candY,
  );
}
