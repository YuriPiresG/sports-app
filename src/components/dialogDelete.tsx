import React, { useEffect, useState } from "react";
import { deleteSportById, getSportById } from "../../actions/actions";
import { Sport } from "./sportsTable";
import { ButtonStyled } from "./buttonStyled";
import CustomDialog from "./customDialog";

interface DialogDetailsProps {
  onClose: () => void;
  id: string | undefined;
}

export const DialogDelete = ({ onClose, id }: DialogDetailsProps) => {
  const handleDelete = (id: string | undefined) => {
    console.log("Deleting sport with id: ", id);
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
