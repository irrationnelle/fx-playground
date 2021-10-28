test("TaskManager 로 task 를 추가한다.", () => {
  const taskManager = new TaskManager();
  const task = new Task("Do test", "inProgress");
  taskManager.add(task);
  expect(taskManager.getTasks().length).toEqual(1);
});
