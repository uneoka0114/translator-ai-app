import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Translating..." : "Translate"}
    </Button>
  );
}
