import { Entity } from "./common/Entity";
import { DomainError } from "./errors/DomainError";
import { StatusEnum, TarefaProps } from "./types/TarefaTypes";

export class Tarefa extends Entity<TarefaProps> {
  private constructor(public props: TarefaProps) {
    super(props.id, props);
  }

  public getID(): string {
    return this.props.id;
  }

  public setResponsavel(req: string[]) {
    req.forEach((morador) => {
      this.props.responsavel.push(morador);
    });
  }

  public setTarefaStatus(status: StatusEnum) {
    this.props.status = status;
  }

  public setTarefaAsDone() {
    this.props.status = StatusEnum.CONCLUIDO;
    this.props.dataConclusao = new Date(Date.now()).toISOString();
  }

  public static create(props: TarefaProps): Tarefa {
    var errors: string[] = [];
    if (props.dataCriacao < props.dataConclusao) {
      errors.push("data de conclusao invalida");
    }

    if (!props.responsavel) {
      errors.push("sem responsavel para tarefa");
    }

    if (errors.length > 0) {
      throw new DomainError(errors);
    }

    return new Tarefa({ ...props });
  }
}
