import { $append, $el, $qs, $setCss } from "fxdom";
import { go, pipe } from "fxjs";

const app = $qs("#root") || $el('<div id="root"></div>');

const showGreeting = pipe(
  $setCss({
    position: "relative",
    width: "400px",
    height: "400px",
    border: "1px solid red",
  }),
  $append($el(`<span>hello world!</span>`))
);

go(app, showGreeting);

export default showGreeting;
