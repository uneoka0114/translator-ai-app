"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFormState, useFormStatus } from "react-dom";
import { translate } from "../app/_actions/translate";

const initialState = {
  message: "",
};

export default function TranslateForm() {
  const [state, formAction] = useFormState(translate, initialState);
  const { pending } = useFormStatus();

  return (
    <form action={formAction} className="flex flex-col">
      <Input
        type="text"
        name="startingLanguage"
        placeholder="Starting Language"
        className="text-black"
      />
      <Input
        type="text"
        name="endLanguage"
        placeholder="End Language"
        className="text-black"
      />
      <Input type="text" name="text" placeholder="text" />
      <Button type="submit" disabled={pending}>
        {pending ? "Translating..." : "Translate"}
      </Button>
      <p className="text-red-500">{state.message}</p>
    </form>
  );
}
