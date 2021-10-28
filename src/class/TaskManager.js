class TaskManager {
  constructor() {
    this.tasks = [];
  }

  add(task) {
    this.tasks = [...this.tasks, task];
  }

  getTasks() {
    return this.tasks;
  }
}

export default TaskManager;
