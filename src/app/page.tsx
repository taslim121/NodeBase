
import { caller, trpc } from "@/trpc/server";
import { getQueryClient } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Client } from "./client";
import { Suspense } from "react";

const page =  async () =>{
  const queryClient= getQueryClient();

  void queryClient.prefetchQuery(trpc.getUsers.queryOptions());
  return (
  <div className="min-h-screen min-w-screen flex items-center justify-center">
    <HydrationBoundary state = {dehydrate(queryClient)}>
      <Suspense fallback ={<div>Loading...</div>}>
        <Client />
      </Suspense>
    </HydrationBoundary>
  </div>);
};

export default page;