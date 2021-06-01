import { selector, selectorFamily } from 'recoil';

function getItemsByIds(items, ids) {
  return ids.map((id) => {
    return items.find(({ id: candidateId }) => id === candidateId);
  });
}

export default function entriesArrangementSelector(
  baseKey,
  atom,
  requestArrangement,
) {
  return selectorFamily({
    key: baseKey + 'sort',
    get: (sortByField, filters) => async ({ get }) => {
      const items = get(atom);
      const sortedIds = await requestArrangement(sortByField, filters);

      return getItemsByIds(items, sortedIds);
    },
  });
}
