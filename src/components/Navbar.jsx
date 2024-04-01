import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function Navbar() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <nav className="flex justify-between items-center bg-white text-black  px-6 py-6 font-bold ">
      <h1 className="text-xl font-bold">AprendeX</h1>

      <ul className="flex gap-x-2">
        {!session?.user ? (
          <>
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/auth/login">Iniciar Sesión</Link>
            </li>
            <li>
              <Link href="/auth/register">Registrarse</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/dashboard">Productos</Link>
            </li>
            <li>
              <Link href="/api/auth/signout">Salir</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;