import TranslateForm from "../components/translate-form/translate-form";

export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center">
      <div className="flex flex-col space-y-3">
        <h1 className="font-extrabold text-3xl">Translate your text</h1>
        <TranslateForm />
      </div>
    </main>
  );
}
