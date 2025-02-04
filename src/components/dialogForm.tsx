"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createSport, updateSport } from "../../actions/actions";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";

export const schema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  description: z.string().min(1, "Descrição é obrigatória"),
  type: z.string().min(1, "Tipo é obrigatório"),
  rules: z.string().optional(),
});

interface DialogFormProps {
  type: "create" | "update";
  onClose: () => void;
  id?: string;
}

export const DialogForm = ({ onClose, type, id }: DialogFormProps) => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      description: "",
      type: "",
      rules: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof schema>) => {
    try {
      switch (type) {
        case "update":
          if (!id) return;
          updateSport(id, values);
          break;
        case "create":
          createSport(values);
          break;

        default:
          break;
      }
      onClose();
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{type == "create" ? "Nome *" : "Nome"}</FormLabel>
              <FormControl>
                <Input placeholder="Nome da atividade física..." {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {type == "create" ? "Descrição *" : "Descrição"}
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Inclua uma descrição para a atividade..."
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{type == "create" ? "Tipo *" : "Tipo"}</FormLabel>
              <FormControl>
                <Input
                  placeholder="Natação, Maratona, Triathlon..."
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rules"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Regras</FormLabel>
              <FormControl>
                <Input
                  placeholder="Inclua uma descrição sobre as regras da atividade..."
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Salvar</Button>
      </form>
    </Form>
  );
};
