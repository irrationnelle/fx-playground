import Task from "./Task";

test("Task has content and status", () => {
  const task = new Task("Do homework", "pending");
  expect(task.content).toMatch("Do homework");
  expect(task.status).toMatch("pending");
});

test("Task 는 pending, inProgress, completed 세가지 status 만을 가진다.", () => {
  const pendingTask = new Task("Earn money", "pending");

  expect(pendingTask.status).toMatch('pending');

  const inProgressTask = new Task("Do study", "inProgress");
  expect(inProgressTask.status).toMatch('inProgress');

  const compltetedTask = new Task("Do test", "completed");
  expect(compltetedTask.status).toMatch('completed');

  const initializingOddTask = () => {new Task("Connect to HotS", "immune")};
  expect(initializingOddTask).toThrowError()
});
