import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CustomDialog from "./customDialog";

export type Sport = {
  id: string;
  name: string;
  description: string;
  rules: string;
  type: string;
};

interface SportsTableProps {
  sports: Sport[] | undefined;
}

export const SportsTable = ({ sports }: SportsTableProps) => {
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
              <TableCell>
                {sport.description.length > 100
                  ? sport.description.substring(0, 100) + "..."
                  : sport.description}
              </TableCell>
              <TableCell className="text-right">
                <CustomDialog
                  id={sport.id}
                  isOpen={true}
                  type="details"
                  title="Ver detalhes"
                  color="green"
                  text="Ver detalhes"
                />
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
};
