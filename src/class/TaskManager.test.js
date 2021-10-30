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

test("TaskManager 는 특정 status 를 가지고 있는 task 만을 가진 목록을 반환한다.", () => {
  const taskManager = new TaskManager();

  const pendingTask = new Task("Earn money", "pending");
  const studyTask = new Task("Do study", "inProgress");
  const guitarTask = new Task("Play the guitar", "inProgress");
  const compltetedTask = new Task("Do test", "completed");

  taskManager.add(pendingTask);
  taskManager.add(studyTask);
  taskManager.add(guitarTask);
  taskManager.add(compltetedTask);

  const inProgressTasks = taskManager.getTasks('inProgress');
  for(const inProgressTask of inProgressTasks) {
    expect(inProgressTask.status).toMatch('inProgress');
  }
})

test("TaskManager 는 tasks 목록에 있는 task 를 삭제하고 최신화된 tasks 목록을 받아올 수 있다.", () => {
  const taskManager = new TaskManager();

  const pendingTask = new Task("Earn money", "pending");
  const studyTask = new Task("Do study", "inProgress");

  taskManager.add(pendingTask);
  taskManager.add(studyTask);

  const taskId = studyTask.id;
  taskManager.removeTask(taskId);

  const tasks = taskManager.getTasks();
  for(const task of tasks) {
    expect(task.content).not.toMatch('Do study');
  }
})
