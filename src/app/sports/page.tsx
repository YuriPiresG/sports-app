import CustomDialog from "@/components/customDialog";
import { SportsTable } from "@/components/sportsTable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getSports } from "../../../actions/actions";

export default async function SportsDash() {
  const sports = await getSports();

  return (
    <div className="flex flex-col items-center h-screen w-screen">
      <h1 className="text-6xl p-4 self-start">SportsApp</h1>
      <div className="self-end mr-[12rem] mb-2">
        <CustomDialog
          isOpen={true}
          type="create"
          title="Criar Atividade Física"
          color="blue"
          text="Criar Atividade Física"
        />
      </div>
      <ScrollArea className="w-[80%] rounded-md border overflow-auto">
        <SportsTable sports={sports} />
      </ScrollArea>
    </div>
  );
}
