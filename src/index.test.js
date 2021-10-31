import { render, showGreeting, Tasks$ } from "index";
import { getByText, queryByText } from "@testing-library/dom";
import { $el } from "fxdom";
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

test("Task 목록에서 지워진 task 는 html 에서도 삭제한다.", () => {
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

  const container = $el(`<div id="root"></div>`);
  render("tasks", taskManager.getTasks(), Tasks$.tmpl, container);

  // when
  taskManager.removeTask(studyTask.id);
  render("tasks", taskManager.getTasks(), Tasks$.tmpl, container);

  // then
  const removedTask = queryByText(container, "Do study");
  expect(removedTask).not.toBeTruthy();
});
