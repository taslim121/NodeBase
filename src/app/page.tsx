import { requireAuth } from "@/lib/auth-utils";
import { LogoutButton } from "./logout";


const page = async () =>{
  await requireAuth();
  return (
  <div className="min-h-screen min-w-screen flex items-center justify-center">
    proTected Server Component
    <LogoutButton/>
  </div>);
};

export default page;