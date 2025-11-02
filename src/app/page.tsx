import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import prisma from "@/lib/db";

const page =  async () =>{
  const users = await prisma.user.findMany();
  return (
  <div className="min-h-screen min-w-screen flex items-center justify-center">
    <ButtonGroup>
      <Button variant="outline">
      Active
    </Button>
    <Button variant="outline">
      Report
    </Button>
    </ButtonGroup>
    <div>{JSON.stringify(users)}</div>
  </div>);
};

export default page;