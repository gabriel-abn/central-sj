import { Entity } from "./common/Entity";

type MoradoresProps = {
  id: string;
  nome: string;
  email: string;
  idade: number;
  telefone: string;
  cpf: string;
  dataNascimento: string;
  curso: string;
  semestreEntrada: string;
  semestreAtual: string;
  previsaoFormatura: string;
};

export class Moradores extends Entity<MoradoresProps> {
  private constructor(public props: MoradoresProps) {
    super(props.id, props);
  }

  public getID(): string {
    return this.props.id;
  }

  public create(props: MoradoresProps): Moradores {
    return new Moradores({ ...props });
  }
}
