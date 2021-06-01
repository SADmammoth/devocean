import React, { useCallback } from 'react';

import _ from 'lodash';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import { useRecoilValueLoadable } from 'recoil';

import StateMonade from '../../../helpers/components/StateMonade';
import { featureAccessState_array } from '../../../recoil/states/featureAccessState';
import ExpandableToolBar from '../../generic/ExpandableToolBar';
import ToolBar from '../../generic/ToolBar';

import styles from './FeatureDependentToolbar.styles';

const useStyles = createUseStyles(styles);

function FeatureDependentToolbar({ expandable, items, props }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const features = useRecoilValueLoadable(
    featureAccessState_array(Object.keys(_.omit(items, ['all']))),
  );

  const renderItems = useCallback(() => {
    if (features.state !== 'hasValue') return;
    const renderedItems = [...(items.all || [])];
    Object.entries(_.omit(items, ['all'])).forEach(
      ([feature, allowedItems]) => {
        if (features.contents[feature].hasAccess) {
          renderedItems.push(...allowedItems);
        }
      },
    );

    return renderedItems;
  }, [features, items]);

  return (
    <StateMonade state={features.state} onError={() => features.contents}>
      {expandable ? (
        <ExpandableToolBar items={renderItems()} {...props} />
      ) : (
        <ToolBar items={renderItems()} {...props} />
      )}
    </StateMonade>
  );
}

FeatureDependentToolbar.propTypes = {};

export default FeatureDependentToolbar;
