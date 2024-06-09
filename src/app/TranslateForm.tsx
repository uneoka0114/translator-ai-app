"use client";

import { useFormState, useFormStatus } from "react-dom";
import { translate } from "./_actions/translate";

const initialState = {
  message: "",
};

export default function TranslateForm() {
  const [state, formAction] = useFormState(translate, initialState);
  const { pending } = useFormStatus();

  return (
    <form action={formAction} className="flex flex-col">
      <input
        type="text"
        name="language"
        placeholder="language"
        className="text-black"
      />
      <input type="text" name="text" placeholder="text" />
      <button type="submit" disabled={pending}>
        {pending ? "Translating..." : "Translate"}
      </button>
      <p className="text-red-500">{state.message}</p>
    </form>
  );
}
