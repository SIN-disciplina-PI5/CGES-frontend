import Image from "next/image";
import DocumentFormGroup from "@/components/DocumentFormComponents/DocumentFormGroup";
import DocumentFormSubGroup from "@/components/DocumentFormComponents/DocumentFormSubGroup";
import DocumentFormTitle from "@/components/DocumentFormComponents/DocumentFormTitle";
import DocumentFormWrapper from "@/components/DocumentFormComponents/DocumentFormWrapper";
import Table from "@/components/DocumentFormComponents/Table";

const RelatorioAtividadeDoEstagiario = () => {
  return (
    <DocumentFormWrapper>
      <div className="w-full flex justify-center">
        <Image src={"/logo.png"} alt="Logo da CGES" width={300} height={400} />
      </div>
      <DocumentFormTitle title="Relatório de Atividades do Estagiário" />
      <DocumentFormGroup title="Identificação do Estagiário">
        <div className="mb-5">
          <p>Nome: Sicrano Estagiário</p>
          <p>Curso: Sistemas para internet</p>
          <p>Telefone: 81 99999-9999</p>
          <p>Email: aluno@unicap.br</p>
        </div>
      </DocumentFormGroup>

      <DocumentFormGroup title="Caracterização">
        <DocumentFormSubGroup title="Unidade Concedente">
          <p></p>
        </DocumentFormSubGroup>
        <DocumentFormSubGroup title="Supervisor">
          <div className="mb-5">
            <p>Nome: Fulado</p>
            <p>Cargo: Supervisor</p>
            <p>Telefone: 81 96666-5555</p>
            <p>Email: fulano@mail.com </p>
          </div>
        </DocumentFormSubGroup>

        <DocumentFormSubGroup title="Relatório Semestral de Atividades">
          <div className="w-full flex gap-10 justify-center items-center">
            <span>período de </span> <input type="date" name="" id="" />
            <span>a </span> <input type="date" name="" id="" />
          </div>
        </DocumentFormSubGroup>

        <DocumentFormSubGroup title="Natureza do Estágio">
          <div className="flex flex-col text-red-fg font-semibold">
            <label>
              <input
                type="radio"
                name="NaturezaEstagio"
                id=""
                className="mr-2"
              />
              Obrigatório
            </label>
            <label>
              <input
                type="radio"
                name="NaturezaEstagio"
                id=""
                className="mr-2"
              />
              Não Obrigatório
            </label>
          </div>
        </DocumentFormSubGroup>
      </DocumentFormGroup>

      <DocumentFormGroup title="Plano de Atividades">
        <Table />
        <DocumentFormSubGroup title="No caso de atividades previstas e não realizadas, indique o motivo:">
          <div className="flex flex-col text-red-fg font-semibold">
            <label>
              <input
                type="radio"
                name="motivoAtvNaoRealizadas"
                id=""
                className="mr-2"
              />
              falta de tempo
            </label>
            <label>
              <input
                type="radio"
                name="motivoAtvNaoRealizadas"
                id=""
                className="mr-2"
              />
              falta de conhecimento
            </label>
            <label>
              <input
                type="radio"
                name="motivoAtvNaoRealizadas"
                id=""
                className="mr-2"
              />
              mudança no Plano de Atividades
            </label>
            <label>
              <input
                type="radio"
                name="motivoAtvNaoRealizadas"
                id=""
                className="mr-2"
              />
              subistituição por outra atividade
            </label>
            <div className="flex flex-col">
              <label>
                <input
                  type="radio"
                  name="motivoAtvNaoRealizadas"
                  id=""
                  className="mr-2"
                />
                Outro motivo. Qual?
              </label>
              <textarea name="" id="" cols={30} rows={10} />
            </div>
          </div>
        </DocumentFormSubGroup>

        <DocumentFormSubGroup title="Realizou atividades não previstas no Plano de Atividades?">
          <div className="flex flex-col text-red-fg font-semibold">
            <label>
              <input
                type="radio"
                name="realizouAtvNaoPrevistas"
                id=""
                className="mr-2"
              />
              Sim
            </label>
            <label>
              <input
                type="radio"
                name="realizouAtvNaoPrevistas"
                id=""
                className="mr-2"
              />
              Não
            </label>
          </div>
        </DocumentFormSubGroup>
      </DocumentFormGroup>

      <DocumentFormGroup title="Avaliação de Estágio">
        <DocumentFormSubGroup title="Relação teoria/prática">
          <div className="flex flex-col text-red-fg font-semibold">
            <div className="mb-5 flex flex-col">
              <p>O estágio foi desenvolvido em sua área de formação?</p>
              <label>
                <input
                  type="radio"
                  name="NaturezaEstagio"
                  id=""
                  className="mr-2"
                />
                Sim
              </label>
              <label>
                <input
                  type="radio"
                  name="NaturezaEstagio"
                  id=""
                  className="mr-2"
                />
                Não
              </label>
            </div>
            <div className="mb-5 flex flex-col">
              <p>
                Você teve oportunidade de aplicar conhecimentos adquiridos no
                seu Curso?
              </p>
              <label>
                <input
                  type="radio"
                  name="NaturezaEstagio"
                  id=""
                  className="mr-2"
                />
                Sim
              </label>
              <label>
                <input
                  type="radio"
                  name="NaturezaEstagio"
                  id=""
                  className="mr-2"
                />
                Não
              </label>
            </div>
            <div className="mb-5 flex flex-col">
              <p>
                As atividades desenvolvidas contribuíram para a sua formação
                profissional?
              </p>
              <label>
                <input
                  type="radio"
                  name="NaturezaEstagio"
                  id=""
                  className="mr-2"
                />
                Sim
              </label>
              <label>
                <input
                  type="radio"
                  name="NaturezaEstagio"
                  id=""
                  className="mr-2"
                />
                Não
              </label>
            </div>
          </div>
        </DocumentFormSubGroup>

        <DocumentFormSubGroup title="Qual conceito você atribui ao seu estágio?">
          <div className="mb-5 flex flex-col">
            <label>
              <input
                type="radio"
                name="conceitoEstagio"
                id=""
                className="mr-2"
              />
              Excelente
            </label>{" "}
            <label>
              <input
                type="radio"
                name="conceitoEstagio"
                id=""
                className="mr-2"
              />
              Muito Bom
            </label>{" "}
            <label>
              <input
                type="radio"
                name="conceitoEstagio"
                id=""
                className="mr-2"
              />
              Bom
            </label>{" "}
            <label>
              <input
                type="radio"
                name="conceitoEstagio"
                id=""
                className="mr-2"
              />
              Regular
            </label>{" "}
            <label>
              <input
                type="radio"
                name="conceitoEstagio"
                id=""
                className="mr-2"
              />
              Insuficiente
            </label>
          </div>
        </DocumentFormSubGroup>

        <DocumentFormSubGroup title="Comentários e sugestões:">
          <div className="flex flex-col mb-5">
            <textarea name="" id="" cols={30} rows={10} />
          </div>
        </DocumentFormSubGroup>
      </DocumentFormGroup>
    </DocumentFormWrapper>
  );
};

export default RelatorioAtividadeDoEstagiario;
