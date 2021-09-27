// Copyright 2017-2021 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Popup from 'semantic-ui-react/dist/commonjs/modules/Popup';

import question from '@polkadot/app-accounts/Accounts/question.svg';

interface Props {
  className?: string;
  content: JSX.Element;
  onClick: () => void;
}

function HelpTooltip ({ className = '', content, onClick }: Props): React.ReactElement<Props> {
  return (
    <Popup
      className={className}
      content={content}
      on={'click'}
      position={'right center'}
      trigger={<img
        alt='question'
        onClick={onClick}
        src={question as string}
        title='Help'
      />}
    />
  );
}

export default React.memo(HelpTooltip);
