import { requireAuth } from "@/lib/auth-utils";


const page = async () =>{
  await requireAuth();
  return (
  <div className="min-h-screen min-w-screen flex items-center justify-center">
    proTected Server Component
  </div>);
};

export default page;