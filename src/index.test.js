import { showGreeting, Tasks$ } from "index";
import { getByText } from "@testing-library/dom";
import { $appendTo, $el } from "fxdom";
import { go } from "fxjs";
import "@testing-library/jest-dom";
import TaskManager from "./class/TaskManager";
import Task from "./class/Task";

test("hello world 를 표시한다.", () => {
  const container = $el(`<div id="root"></div>`);
  go(container, showGreeting);
  const greeting = getByText(container, "hello world!");
  expect(container).toContainElement(greeting);
});

test("Task 목록을 html로 표시한다.", () => {
  // given
  const taskManager = new TaskManager();

  const pendingTask = new Task("Earn money", "pending");
  const studyTask = new Task("Do study", "inProgress");
  const guitarTask = new Task("Play the guitar", "inProgress");
  const compltetedTask = new Task("Do test", "completed");

  taskManager.add(pendingTask);
  taskManager.add(studyTask);
  taskManager.add(guitarTask);
  taskManager.add(compltetedTask);

  // when
  const container = $el(`<div id="root"></div>`);
  go(taskManager.getTasks(), Tasks$.tmpl, $el, $appendTo(container));

  // then
  const contentByTask = getByText(container, "Earn money");
  expect(container).toContainElement(contentByTask);

  const statusByTask = getByText(container, "completed");
  expect(container).toContainElement(statusByTask);
});
