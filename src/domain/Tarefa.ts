import { Entity } from "./common/Entity";
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
    props.status = StatusEnum.NAO_INICIADO;
    return new Tarefa({ ...props });
  }
}
