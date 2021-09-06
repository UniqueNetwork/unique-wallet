// Copyright 2017-2021 @polkadot/apps, UseTech authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { memo } from 'react';

const AccordionArrow = ({ color = 'white' }: { color: string; }): React.ReactElement => {
  return (
    <svg
      fill='none'
      height='16'
      viewBox='0 0 16 16'
      width='16'
      xmlns='http://www.w3.org/2000/svg'>
      <path d='M13 6L8 11L3 6'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'/>
    </svg>
  );
};

export default memo(AccordionArrow);
