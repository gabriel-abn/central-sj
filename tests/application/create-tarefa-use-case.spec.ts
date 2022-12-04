import { CreateTarefaUseCase } from "@application/index";
import { StatusEnum, Tarefa, TarefaProps } from "@domain/index";

describe("create tarefa use case", () => {
  it("should create a Tarefa", async () => {
    const suit = new CreateTarefaUseCase();

    const props: TarefaProps = {
      id: "random",
      nome: "random tarefa",
      responsavel: ["Teste"],
      dataConclusao: new Date(Date.now() + 1000),
      dataCriacao: new Date(Date.now()),
      status: StatusEnum.NAO_INICIADO,
    };

    const result = await suit.execute({ ...props });
    expect(result).toBeInstanceOf(Tarefa);
  });
  it("should not create a Tarefa with no Responsavel", async () => {});
  it("should not create a Tarefa with dataConclusao less than dataCriacao", async () => {});
  it("should create Tarefa with status NAO_INICIADO", async () => {});
});
