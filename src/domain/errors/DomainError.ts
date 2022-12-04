export class DomainError extends Error {
  private errors: string[] = [];
  public message: string;

  constructor(message: string[]) {
    super();
    message.forEach((element) => {
      this.errors.push(element);
    });
  }
}
