import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

const page = () =>{

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
  </div>);
};

export default page;