import { Entity } from "./common/Entity";
import { TarefaProps } from "./types/TarefaTypes";

export class Tarefa extends Entity<TarefaProps> {
  private constructor(public props: TarefaProps) {
    super(props.id, props);
  }

  public getID(): string {
    return this.props.id;
  }

  public static create(props: TarefaProps): Tarefa {
    return new Tarefa({ ...props });
  }
}
