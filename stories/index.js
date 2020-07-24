// import React from 'react';
// import { storiesOf } from '@storybook/react';
// import { Button } from '@storybook/react/demo';
//
// storiesOf('Button', module)
//   .add('with Text', () => <Button>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button>
//       <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//       </span>
//     </Button>
//   ));

import React from "react";
import { storiesOf } from "@storybook/react";
import { Ellipsis, Ring, Ripple } from "../src";

storiesOf("Spinners", module)
  .add("Ellipsis", () => <Ellipsis />)
  .add("Ring", () => <Ring />)
  .add("Ripple", () => <Ripple />);
