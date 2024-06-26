import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../components/ui/form"

import { zodResolver } from "@hookform/resolvers/zod"
import { DialogClose } from "../components/ui/dialog"
import { useForm } from "react-hook-form"
import { Button } from "../components/ui/button"
import { toast } from "../components/ui/use-toast"
import { Input } from "../components/ui/input"
import { z } from "zod"

import axios from "axios"

const FormSchema = z.object({
    codigo: z.coerce.number({ message: "Esse campo aceita somente números" }).min(3, { message: "Mínimo 3 caracteres" }),
    nome: z.string().min(1, { message: "Mínimo 1 caractere" }),
    descricao: z.string().min(1, { message: "Mínimo 1 caractere" }),
    valor: z.coerce.number({ message: "Esse campo aceita somente números" }).min(1, { message: "Mínimo 1 caractere" }),
})

export function InputForm({ refetch }: { refetch: any }) {
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
                toast({
                    title: "Produto cadastrado",
                })
                refetch()
            }
        })
    }

    return (

        <div className="w-auto flex justify-center">

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                    <FormField
                        control={form.control}
                        name="codigo"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Codigo</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
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
                                <FormMessage />
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
                                <FormMessage />
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
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="flex">
                        <Button className="bg-emerald-700 mr-auto" type="submit">Cadastrar</Button>

                        <DialogClose asChild>
                            <Button className="bg-red-500">Fechar</Button>
                        </DialogClose>
                    </div>

                </form>
            </Form>
        </div>
    )
}
