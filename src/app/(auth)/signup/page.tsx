import { RegisterForm } from "@/feature/auth/component/register-form"
import { requireUnAuth } from "@/lib/auth-utils"


const page = async() => {
  await requireUnAuth();
  return (
    <div>
        <RegisterForm/> 
    </div>
  )
}

export default page