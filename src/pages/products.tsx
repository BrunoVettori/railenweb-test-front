import {
    Table,
    TableBody,
    // TableCaption,
    TableCell,
    // TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "../components/ui/table"

import {
    Dialog,
    DialogClose,
    DialogContent,
    // DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../components/ui/dialog"

import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"

import { useQuery } from "@tanstack/react-query"
import { Button } from "../components/ui/button"

import { InputForm } from "../self-made/product-form"

//icons
// import refresh from "../assets/refresh.svg"
import add from "../assets/add.svg"
// import search from "../assets/search.svg"
import edit from "../assets/edit.svg"
import del from "../assets/delete.svg"

import axios from "axios"

function Products() {

    const { status, data, error } = useQuery({
        queryKey: ['todos'],
        queryFn: () => {
            return axios
                .get("http://localhost:3000/src/Users.php")
                .then(res => res.data)
        },
    })

    if (status === 'pending') {
        return <span>Loading...</span>
    }

    if (status === 'error') {
        return <span>Error: {error.message}</span>
    }

    console.log(data)

    return (
        <div className="absolute top-12 bottom-0 left-24 right-10">
            <div className="mt-16 w-full">

                <div className="w-full flex">
                    <p className="text-3xl text-left"> Produtos</p>

                    <div className="ml-auto ">
                        {/* <Button className="bg-yellow-300 text-black">
                            <img className="mr-2" src={refresh} alt="prodcuts" />
                            Refresh
                        </Button> */}

                        {/* <Button className="ml-5 bg-blue-700">
                            <img className="mr-2" src={search} alt="prodcuts" />
                            Filtrar
                        </Button> */}

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button className="ml-5 bg-emerald-600">
                                    <img className="mr-2" src={add} alt="prodcuts" />
                                    Novo
                                </Button>
                            </DialogTrigger>

                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Novo Produto</DialogTitle>
                                </DialogHeader>

                                <InputForm />

                            </DialogContent>
                        </Dialog>

                    </div>
                </div>

                <div className="mt-6 bg-slate-50 rounded-md">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="text-left">Codigo</TableHead>
                                <TableHead className="text-left">Nome</TableHead>
                                <TableHead className="text-left">Descicao</TableHead>
                                <TableHead className="text-left">Imagem</TableHead>
                                <TableHead className="text-left">Valor</TableHead>
                                <TableHead className="w-10"></TableHead>
                                <TableHead className="w-10"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.map((row: any) => (
                                <TableRow key={row.id}>
                                    <TableCell className="text-left">{row.codigo}</TableCell>
                                    <TableCell className="text-left">{row.codigo}</TableCell>
                                    <TableCell className="text-left">{row.codigo}</TableCell>
                                    <TableCell className="text-left">{row.codigo}</TableCell>
                                    <TableCell className="text-left">{row.codigo}</TableCell>
                                    <TableCell className="text-left w-20">
                                        <Button variant="outline">
                                            <img src={edit} alt="prodcuts" />
                                        </Button></TableCell>
                                    <TableCell className="text-left w-20">
                                        <Button variant="outline">
                                            <img src={del} alt="prodcuts" />
                                        </Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        {/* <TableFooter>
                            <TableRow>
                                <TableCell colSpan={3}>Total</TableCell>
                                <TableCell className="text-right">$2,500.00</TableCell>
                            </TableRow>
                        </TableFooter> */}
                    </Table>
                </div >
            </div>
        </div>
    )
}

export default Products

