import { test, expect } from "@jest/globals";
import { inferProcedureInput } from "@trpc/server";
import { createInnerTRPCContext } from "../trpc";
import { AppRouter, appRouter } from "../root";

test("hello test", async () => {
  const caller = appRouter.createCaller(
    createInnerTRPCContext({ session: null })
  );

  type Input = inferProcedureInput<AppRouter["example"]["hello"]>;

  const input: Input = {
    text: "test",
  };

  const result = await caller.example.hello(input);

  expect(result).toStrictEqual({ greeting: "Hello test" });
});
