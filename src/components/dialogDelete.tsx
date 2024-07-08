import { deleteSportById } from "../../actions/actions";
import { ButtonStyled } from "./buttonStyled";

interface DialogDetailsProps {
  onClose: () => void;
  id: string | undefined;
}

export const DialogDelete = ({ onClose, id }: DialogDetailsProps) => {
  const handleDelete = (id: string | undefined) => {
    if (!id) return;
    deleteSportById(id);
    onClose();
  };
  return (
    <div className="grid grid-cols-2 gap-2">
      <ButtonStyled
        color="red"
        text="Sim, deletar!"
        onClick={() => handleDelete(id)}
      />
      <ButtonStyled color="blue" text="Cancelar" onClick={onClose} />
    </div>
  );
};
