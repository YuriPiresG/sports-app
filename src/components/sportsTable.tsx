import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ButtonStyled } from "./buttonStyled";

export type Sport = {
  name: string;
  description: string;
  rules: string;
  type: string;
};

interface SportsTableProps {
  sports: Sport[] | null;
}

export const SportsTable = ({ sports }: SportsTableProps) => {
  console.log(sports);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-80 text-white bg-gray-700">Nome</TableHead>
          <TableHead className="text-white bg-gray-700">Tipo</TableHead>
          <TableHead className="text-white bg-gray-700">Descrição</TableHead>
          <TableHead className="text-right text-white bg-gray-700" />
        </TableRow>
      </TableHeader>
      <TableBody>
        {sports == undefined ? (
          <TableRow>
            <TableCell colSpan={4} className="text-center">
              Nenhuma atividade esportiva encontrada!
            </TableCell>
          </TableRow>
        ) : (
          sports.map((sport, index) => (
            <TableRow
              key={index}
              className={`${
                index % 2 == 0 ? "bg-gray-400" : "bg-gray-200"
              } hover:bg-blue-200`}
            >
              <TableCell className="font-medium">{sport.name}</TableCell>
              <TableCell>{sport.type}</TableCell>
              <TableCell>{sport.description}</TableCell>
              <TableCell className="text-right">
                <ButtonStyled color="green" text="Ver detalhes" />
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
};
