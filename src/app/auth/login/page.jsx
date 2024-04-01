"use client";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import {useRouter} from 'next/navigation'
import {useState} from 'react'

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter()
  const [error, setError] = useState(null)
  
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);

    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    console.log(res)
    if (res.error) {
      setError(res.error)
    } else {
      router.push('/dashboard')
      router.refresh()
    }
  });

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form onSubmit={onSubmit} className="w-1/4">

        {error && (
          <p className="bg-red-500 text-lg text-white p-3 rounded mb-2">{error}</p>
        )}

        <h1 className="text-slate-200 font-bold text-4xl mb-4">Login</h1>

        <label htmlFor="email" className="text-slate-200 mb-2 block text-sm font-semibold">
          Email:
        </label>
        <input
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "Email es requerido",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-300 text-black font-bold w-full"
          placeholder="user@email.com"
        />

        {errors.email && (
          <span className="text-red-500 text-xs">{errors.email.message}</span>
        )}

        <label htmlFor="password" className="text-slate-200 mb-2 block text-sm font-semibold">
          Contraseña:
        </label>
        <input
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "Contraseña es requerida",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-300 text-black font-bold w-full"
          placeholder="******"
        />

        {errors.password && (
          <span className="text-red-500 text-xs">
            {errors.password.message}
          </span>
        )}

        <button className="w-full bg-red-500 hover:bg-red-700 text-white p-3 rounded-lg mt-2 font-extrabold">
          Login
        </button>
      </form>
    </div>
  );
}
export default LoginPage;