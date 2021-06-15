import { useRecoilValue } from 'recoil';

import localeState from '../../recoil/states/localeState';
import useLocale from './useLocale';

export default function useLocalizedNavItems(navItems) {
  const locale = useLocale();
  const localize = (navItems) =>
    navItems.map(({ title, label, menu, ...rest }) => {
      let newLabel = label;
      if (typeof label === 'string') {
        newLabel = locale(label);
      }
      let newTitle = locale(title);

      let newMenu = menu;
      if (menu) {
        newMenu = localize(menu);
      }

      return { title: newTitle, label: newLabel, menu: newMenu, ...rest };
    });

  const localeValue = useRecoilValue(localeState);

  return useMemo(() => localize(navItems), [localeValue, navItems]);
}
