import { useEffect, useState } from "react";
import { getSportById } from "../../actions/actions";
import CustomDialog from "./customDialog";
import { Sport } from "./sportsTable";

interface DialogDetailsProps {
  onClose: () => void;
  id: string | undefined;
}

export const DialogDetails = ({ id }: DialogDetailsProps) => {
  const [sports, setSports] = useState<Sport>();
  useEffect(() => {
    if (id) {
      getSportById(id)
        .then((data) => {
          setSports(data);
        })
        .catch((error) => {
          console.error("Failed to fetch sports data", error);
        });
    }
  }, [id]);

  if (!sports) return null;

  return (
    <div className="grid grid-cols-2 gap-2 bg-white p-4 text-center justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">Nome:</h1>
      <p className="mb-4">{sports.name}</p>
      <hr className="col-span-2" />

      <h1 className="text-2xl font-bold mb-4">Descrição: </h1>
      <p className="mb-4">
        {sports.description.length > 100
          ? sports.description.substring(0, 100) + "..."
          : sports.description}
      </p>
      <hr className="col-span-2" />

      <h1 className="text-2xl font-bold mb-4">Tipo:</h1>
      <p className="mb-4">{sports.type}</p>
      <hr className="col-span-2" />
      <h1 className="text-2xl font-bold mb-4">Regras:</h1>
      <p className="mb-4">
        {sports.rules ? sports.rules.substring(0, 100) : "Sem regras"}
      </p>
      <CustomDialog
        id={sports.id}
        isOpen={true}
        type="delete"
        title="Deletar Atividade Física"
        color="red"
        text="Deletar Atividade Física"
      />
      <CustomDialog
        id={sports.id}
        isOpen={true}
        type="update"
        title="Atualizar Atividade Física"
        color="yellow"
        text="Atualizar Atividade Física"
      />
    </div>
  );
};
