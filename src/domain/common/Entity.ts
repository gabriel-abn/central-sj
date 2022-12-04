export abstract class Entity<T> {
  constructor(private id: string, protected props: T) {
    this.id = id;
    this.props = props;
  }

  public abstract getID(): string;
}
