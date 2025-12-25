import { redirect } from "next/navigation";
import LandingPage from "@/components/landing-page";
import { getOptionalSession } from "@/lib/auth-utils";

const Page = async () => {
  const session = await getOptionalSession();

  // If authenticated, redirect to workflows
  if (session) {
    redirect("/workflows");
  }

  return <LandingPage />;
};

export default Page;
