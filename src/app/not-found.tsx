import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { NotFoundSection } from "@/components/sections/not-found";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <NotFoundSection />
      </main>
    </div>
  );
}
