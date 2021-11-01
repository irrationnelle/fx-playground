import { generateId } from "../helper/generateId";

class Task {
  constructor(content, status) {
    this.id = generateId();

    this.content = content;

    if (
      status !== "pending" &&
      status !== "inProgress" &&
      status !== "completed"
    ) {
      throw new Error("inappropriate status");
    }
    this.status = status;
  }

  modifyContent(newContent) {
    this.content = newContent;
  }
}

export default Task;
