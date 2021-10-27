import Task from "./Task";

test("Task has content and status", () => {
  const task = new Task("Do homework", "pending");
  expect(task.content).toMatch("Do homework");
  expect(task.status).toMatch("pending");
});
