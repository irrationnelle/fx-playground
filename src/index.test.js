import showGreeting from "index";
import { getByText } from "@testing-library/dom";
import { $el } from "fxdom";
import { go } from "fxjs";
import "@testing-library/jest-dom";

test("hello world 를 표시한다.", () => {
  const container = $el(`<div id="root"></div>`);
  go(container, showGreeting);
  const greeting = getByText(container, "hello world!");
  expect(container).toContainElement(greeting);
});
