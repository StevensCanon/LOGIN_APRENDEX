"use client";
import { Fascinate } from "next/font/google";
import { useForm } from "react-hook-form";
import {useRouter} from 'next/navigation';

function RegisterPage() {
    const { 
        register, 
        handleSubmit,
        formState : {errors},
     } = useForm();
     const Router = useRouter()

    const onSubmit = handleSubmit(async (data) => {

        if (data.password !== data.confirmPassword){
            return alert ("Contraseña no coinciden");
        }

        const res = await fetch('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify({
                    username: data.username,
                    email: data.email,
                    password: data.password,
                }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (res.ok){
            Router.push('/auth/login')
        }

        console.log(errors)
    });

    console.log(errors);


    return (
        <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
                <form onSubmit={onSubmit} className="w-1/4">
                    <h1 className="text-slate-200 font-bold text-4xl mb-4">Registro</h1>
                    
                    <label htmlFor="Nombre" className="text-slate-200 mb-2 block text-sm font-semibold">Nombre de Usuario: </label>              
                    <input
                        type="text"
                        {...register("username", { 
                        required: {
                            value: true,
                            message: 'Usuario es requerido'
                        }
                     })}                   
                        className="p-3 rounded block mb-2 bg-slate-300 text-black w-full font-bold"   
                        placeholder="example854"          
                    />
                    {
                        errors.username && (
                            <span className="text-red-500 text-xs">{errors.username.message}</span>
                        )
                    }

                    <label htmlFor="Correo electronico" className="text-slate-200 mb-2 block text-sm font-semibold">Correo electronico: </label>              
                    <input
                        type="email"
                        {...register("email", { 
                            required: {
                                value: true,
                                message: 'Email es requerido'
                            }
                     })}                   
                        className="p-3 rounded block mb-2 bg-slate-300 text-black w-full font-bold"     
                        placeholder="example@gmail.com"                 
                    />
                    {
                        errors.email && (
                            <span className="text-red-500 text-xs">{errors.email.message}</span>
                        )

                    }


                    <label htmlFor="Password" className="text-slate-200 mb-2 block text-sm font-semibold">Contraseña: </label>              
                    <input
                        type="password"
                        {...register("password", { 
                            required: {
                                value: true,
                                message: 'Contraseña es requerida'
                            }
                     })}                   
                        className="p-3 rounded block mb-2 bg-slate-300 text-black w-full font-bold" 
                        placeholder="******"                     
                    />
                    {
                        errors.password && (
                            <span className="text-red-500 text-xs">{errors.password.message}</span>
                        )

                    }

                    <label htmlFor="Confirmar Password" className="text-slate-200 mb-2 block text-sm font-semibold">Confirmar Contraseña: </label>              
                    <input
                        type="Password"
                        {...register("confirmPassword", { 
                            required: {
                                value: true,
                                message: 'Confirmar es requerido'
                            }
                     })}                   
                        className="p-3 rounded block mb-2 bg-slate-300 text-black w-full font-bold"     
                        placeholder="******"                
                    />
                    {
                        errors.confirmPassword && (
                            <span className="text-red-500 text-xs">{errors.confirmPassword.message}</span>
                        )

                    }
        
                    <button className="w-full bg-red-500 hover:bg-red-700 text-white p-3 rounded-lg mt-2 font-extrabold">Registrar</button>
                </form>
            </div>
    );
}

export default RegisterPage;
