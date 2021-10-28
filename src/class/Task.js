class Task {
  constructor(content, status) {
    this.content = content;

    if (status !== 'pending' && status !== 'inProgress' && status !== 'completed') {
      throw new Error('inappropriate status')
    }
    this.status = status;
  }
}

export default Task;
