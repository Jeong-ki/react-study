import React, { memo } from 'react';

const Try = memo(({ tryInfo }) => {
  return (
      <li>
        <div>{tryInfo.try}</div>
        <div>{tryInfo.reusult}</div>
      </li>
  )
});

export default Try;