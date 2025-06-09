import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function notFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <Link className="hover:cursor-pointer" href={"/"}>
        <Button>Torna alla pagina principale</Button>
      </Link>
    </div>
  );
}
