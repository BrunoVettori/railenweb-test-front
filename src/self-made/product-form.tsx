"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "../components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "../components/ui/form"
import { Input } from "../components/ui/input"
import axios from "axios"
import { DialogClose } from "../components/ui/dialog"

const FormSchema = z.object({
    codigo: z.coerce.number().min(3),
    nome: z.string(),
    descricao: z.string(),
    valor: z.coerce.number().min(1),
})

export function InputForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            codigo: 0,
            nome: "",
            descricao: "",
            valor: 0,
        },
    })

    async function onSubmit(fields: z.infer<typeof FormSchema>) {

        axios.post("http://localhost:3000/src/Products.php", fields).then((response) => {
            console.log(response);
            if (response.data == 'sucesso' || response.status == 200) {
                console.log("sucesso")
            }
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="codigo"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Codigo</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="nome"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nome</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="descricao"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Descrição</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="valor"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Valor</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <DialogClose asChild>
                    <Button className="bg-emerald-700" type="submit">Cadastrar</Button>

                </DialogClose>


            </form>
        </Form>
    )
}
