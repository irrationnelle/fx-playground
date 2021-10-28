import TaskManager from "./TaskManager";
import Task from "./Task";

test("TaskManager 로 task 를 추가한다.", () => {
  const taskManager = new TaskManager();
  const task = new Task("Do test", "inProgress");
  taskManager.add(task);
  expect(taskManager.getTasks().length).toEqual(1);
});

test("TaskManager 는 추가한 task 와 동일한 task 를 가진 목록을 반환한다.", () => {
  const taskManager = new TaskManager();
  const task = new Task("Do test", "inProgress");
  taskManager.add(task);
  const [latestTask] = taskManager.getTasks();
  expect(latestTask.content).toMatch("Do test");
  expect(latestTask.status).toMatch("inProgress");
});
