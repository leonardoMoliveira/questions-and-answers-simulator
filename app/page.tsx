'use client';

import { Popover } from '@mantine/core';

// No error
export default function Page() {
  return (
    <Popover>
      <Popover.Target>
        <p>Target</p>
      </Popover.Target>
      <Popover.Dropdown>Dropdown</Popover.Dropdown>
    </Popover>
  );
}