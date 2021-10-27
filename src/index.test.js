import showGreeting from "index";
import { getByText } from "@testing-library/dom";
import { go } from "fxjs";
import "@testing-library/jest-dom";

test("hello world 를 표시한다.", () => {
  go(container, showGreeting);
  const greeting = getByText(container, "hello world!");
  expect(greeting).toBeInTheDocument();
});
