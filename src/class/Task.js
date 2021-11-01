import { generateId } from "../helper/generateId";

class Task {
  constructor(content, status) {
    this.id = generateId();

    this.content = content;

    const isValid = this.validateStatus(status);
    if (!isValid) {
      throw new Error("inappropriate status");
    }
    this.status = status;
  }

  validateStatus(status) {
    return !(
      status !== "pending" &&
      status !== "inProgress" &&
      status !== "completed"
    );
  }

  modifyContent(newContent) {
    this.content = newContent;
  }

  modifyStatus(newStatus) {
    const isValid = this.validateStatus(newStatus);
    if (!isValid) {
      throw new Error("inappropriate status");
    }
    this.status = newStatus;
  }
}

export default Task;
