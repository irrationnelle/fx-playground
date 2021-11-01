import Task from "./Task";

test("Task has content and status", () => {
  const task = new Task("Do homework", "pending");
  expect(task.content).toMatch("Do homework");
  expect(task.status).toMatch("pending");
});

test("Task 는 pending, inProgress, completed 세가지 status 만을 가진다.", () => {
  const pendingTask = new Task("Earn money", "pending");

  expect(pendingTask.status).toMatch("pending");

  const inProgressTask = new Task("Do study", "inProgress");
  expect(inProgressTask.status).toMatch("inProgress");

  const compltetedTask = new Task("Do test", "completed");
  expect(compltetedTask.status).toMatch("completed");

  const initializingOddTask = () => {
    new Task("Connect to HotS", "immune");
  };
  expect(initializingOddTask).toThrowError();
});

test("Task 는 자신의 id 를 가진다.", () => {
  const task = new Task(
    "Listen to the new album of Dream Theater",
    "inProgress"
  );
  expect(task.id).toBeTruthy();
});

test("Task 의 content 를 변경할 수 있다..", () => {
  const task = new Task(
    "Listen to the new album of Dream Theater",
    "inProgress"
  );
  const newContent = "Listen to the new album of Dark Tranquillity";
  task.modifyContent(newContent);
  expect(task.content).toMatch(newContent);
});

test("Task 의 status 를 변경할 수 있다..", () => {
  const task = new Task(
    "Listen to the new album of Dream Theater",
    "inProgress"
  );
  const completed = "completed";
  task.modifyStatus(completed);
  expect(task.status).toMatch(completed);
});
