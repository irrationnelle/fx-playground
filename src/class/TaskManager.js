import { filter } from "fxjs";

class TaskManager {
  constructor() {
    this.tasks = [];
  }

  add(task) {
    this.tasks = [...this.tasks, task];
  }

  filterStatus(status, tasks) {
    return filter((task) => task.status === status, tasks);
  }

  getTasks(status) {
    return status ? this.filterStatus(status, this.tasks) : this.tasks;
  }

  removeTask(id) {
    this.tasks = filter(task => task.id !== id, this.tasks)
  }
}

export default TaskManager;
