// Copyright 2017-2021 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { useCallback, useEffect, useRef } from 'react';
import Popup from 'semantic-ui-react/dist/commonjs/modules/Popup';

import question from '@polkadot/app-accounts/Accounts/question.svg';

interface Props {
  className?: string;
  content?: JSX.Element;
  popupContentRef?: React.RefObject<HTMLElement> ;
  setIsModalOpen?: () => void;
  isModalOpen?: boolean;
}

function HelpTooltip ({ className = '', content, isModalOpen, popupContentRef, setIsModalOpen }: Props): React.ReactElement<Props> {
  const popupQuestionRef = useRef<HTMLImageElement>(null);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if ((popupQuestionRef.current && !popupQuestionRef.current.contains(event.target as HTMLImageElement)) && (popupContentRef?.current && !popupContentRef?.current.contains(event.target as HTMLElement))) {
      setIsModalOpen && setIsModalOpen();
    }
  }, [popupContentRef, setIsModalOpen]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside, isModalOpen]);

  return (
    <Popup
      className={className}
      content={content}
      on={'click'}
      open={isModalOpen}
      position={'right center'}
      trigger={<img
        alt='question'
        onClick={setIsModalOpen}
        ref={popupQuestionRef}
        src={question as string}
        title='Help'
      />}
    />
  );
}

export default React.memo(HelpTooltip);
