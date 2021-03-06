import * as React from "react";
import { render } from "@testing-library/react";
import { MenuItem } from "../MenuItem";

const props: Parameters<typeof MenuItem>[0] = {
  stopId: "item",
  stops: [],
  currentId: null,
  register: jest.fn(),
  unregister: jest.fn(),
  move: jest.fn(),
  next: jest.fn(),
  previous: jest.fn(),
  first: jest.fn(),
  last: jest.fn()
};

test("render", () => {
  const { baseElement } = render(<MenuItem {...props}>item</MenuItem>);
  expect(baseElement).toMatchInlineSnapshot(`
    <body>
      <div>
        <button
          id="item"
          role="menuitem"
          tabindex="-1"
        >
          item
        </button>
      </div>
    </body>
  `);
});
