export enum StatusEnum {
  CONCLUIDO = "CONCLUIDO",
  EM_ANDAMENTO = "EM ANDAMENTO",
  ATRASADO = "ATRASADO",
  EM_ESPERA = "EM ESPERA",
  NAO_INICIADO = "NAO INICIADO",
}

export type TarefaProps = {
  id: string;
  nome: string;
  responsavel: string;
  dataConclusao: string;
  dataCriacao: string;
  status: string;
};
