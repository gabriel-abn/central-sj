import { Tarefa, TarefaProps } from "@domain/index";

export class CreateTarefaUseCase {
  constructor() {}

  async execute(tarefa: TarefaProps) {
    let res: Tarefa;
    try {
      res = await Tarefa.create(tarefa);
      return res;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
