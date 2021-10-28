import { $append, $el, $qs, $setCss } from "fxdom";
import { go, pipe, strMap } from "fxjs";

const app = $qs("#root") || $el('<div id="root"></div>');

const Tasks$ = {};
Tasks$.tmpl = (tasks) => `
  <div class="tasks">
    ${strMap(
      (task) => `
      <div class="task">
        <div class="content"><span>${task.content}</span></div>
        <div class="status"><span>${task.status}</span></div>
      </div>
    `,
      tasks
    )}
  </div>
`;

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

export { showGreeting, Tasks$ };
