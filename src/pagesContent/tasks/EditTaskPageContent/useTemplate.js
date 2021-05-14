import { useEffect, useState } from 'react';

import { useRecoilStateLoadable } from 'recoil';

import templatesState, {
  templatesState_getById,
} from '../../../recoil/states/templatesState';

export default function useTemplate() {
  const templates = useRecoilStateLoadable(templatesState);
  const [currentTemplate, setCurrentTemplate] = useState();

  useEffect(() => {
    if (!currentTemplate && templates[0].state === 'hasValue') {
      setCurrentTemplate(templates[0].contents[0].id);
    }
  }, [templates]);

  const customFieldsRequest = useRecoilStateLoadable(
    templatesState_getById(currentTemplate),
  );

  return {
    template: currentTemplate,
    templateValueOptions: async () => {
      const options = await templates[0].toPromise();

      return options.map(({ id, name }) => {
        return {
          label: name,
          value: id,
        };
      });
    },
    templateOnChange: (name, value) => {
      setCurrentTemplate(value);
    },
    customFields:
      customFieldsRequest[0].contents?.fields?.map((field) => ({
        ...field,
      })) || [],
  };
}
