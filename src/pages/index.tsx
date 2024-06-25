import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../components/ui/form"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "../components/ui/button"
import { toast } from "../components/ui/use-toast"
import { Input } from "../components/ui/input"
import { z } from "zod"

import Cookies from 'universal-cookie';

import axios from "axios"
import { useNavigate } from "@tanstack/react-router"


const FormSchema = z.object({
    nome: z.string(),
    senha: z.string(),
})

export function Index() {

    const navigate = useNavigate()

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            nome: "",
            senha: "",
        },
    })

    function onSubmit(fields: z.infer<typeof FormSchema>) {

        console.log(fields)

        axios.defaults.withCredentials = false;

        axios.post("http://localhost:3000/src/Users.php", fields).then((response) => {
            console.log(response);

            if (response.data == 'sucesso') {

                const cookies = new Cookies();
                cookies.set('Login', fields.nome, { path: '/', expires: new Date(Date.now() + 86400000) });
                console.log(cookies.get('Login'));

                toast({
                    title: "Login realizado",
                })

                navigate({ to: "/app/home" })
            }
        })
    }

    return (

        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                    <FormField
                        control={form.control}
                        name="nome"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nome</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="senha"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Senha</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Login</Button>
                </form>
            </Form>
        </div>


    )
}
