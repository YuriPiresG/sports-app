"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ButtonStyled } from "./buttonStyled";
import { DialogForm } from "./dialogForm";
import { useState } from "react";


interface CustomDialogProps {
  isOpen: boolean;
  type: "create" | "update" | "delete" | "info";
  title: string;
  color: string;
  text: string;
}

function description(type: CustomDialogProps["type"]) {
  switch (type) {
    case "create":
      return {
        message:
          "Preencha os campos abaixo para criar uma nova atividade física.",
      };
    case "update":
      return {
        message: "Preencha os campos abaixo para atualizar a atividade física.",
      };
    case "delete":
      return {
        message: "Tem certeza que deseja excluir a atividade física?",
      };
    case "info":
      return {
        message: "Detalhes da atividade física.",
      };
  }
}

const CustomDialog = ({ title, color, text, type }: CustomDialogProps) => {

  const [open, setOpen] = useState(false);


  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const { message } = description(type);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <ButtonStyled color={color} text={text} onClick={handleOpen} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {message && <DialogDescription>{message}</DialogDescription>}
        {type === "create" && (
          <DialogForm onClose={handleClose} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
