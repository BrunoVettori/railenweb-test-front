import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../components/ui/table"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../components/ui/dialog"

import { ScrollArea } from "../components/ui/scroll-area"
import { InputForm } from "../self-made/product-form"
import { EditForm } from "../self-made/edit-form"

import { useQuery } from "@tanstack/react-query"
import { Button } from "../components/ui/button"

import DelteButton from "../self-made/remove-dialog"
import axios from "axios"

//icons
import refresh from "../assets/refresh.svg"
import edit from "../assets/edit.svg"
import add from "../assets/add.svg"

function Products() {
    const { status, data, error, refetch } = useQuery({
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

    console.log(status)

    return (
        <div className="absolute top-12 bottom-0 left-24 right-10">
            <div className="mt-16 w-full">

                <div className="w-full flex">
                    <p className="text-3xl text-left"> Produtos</p>

                    <div className="ml-auto ">
                        <Button className="bg-yellow-300 text-black" onClick={() => refetch()}>
                            <img className="mr-2" src={refresh} alt="prodcuts" />
                            Refresh
                        </Button>

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
                            <DialogContent className="sm:max-w-[390px]">
                                <DialogHeader >
                                    <DialogTitle>Novo Produto</DialogTitle>
                                </DialogHeader>
                                <InputForm refetch={refetch} />
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>

                <div className="mt-6 bg-slate-50 rounded-md">
                    <ScrollArea className="h-[765px] w-auto rounded-md border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="text-left">Codigo</TableHead>
                                    <TableHead className="text-left">Nome</TableHead>
                                    <TableHead className="text-left">Descicao</TableHead>
                                    <TableHead className="text-left">Valor</TableHead>
                                    <TableHead className="w-10"></TableHead>
                                    <TableHead className="w-10"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {data.map((row: any) => (
                                    <TableRow key={row.id}>
                                        <TableCell className="text-left">{row.codigo}</TableCell>
                                        <TableCell className="text-left">{row.nome}</TableCell>
                                        <TableCell className="text-left">{row.descricao}</TableCell>
                                        <TableCell className="text-left">{row.valor}</TableCell>
                                        <TableCell className="text-left w-20">
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <Button variant="outline">
                                                        <img src={edit} alt="prodcuts" />
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent className="sm:max-w-[390px]">
                                                    <DialogHeader >
                                                        <DialogTitle>Atualizar Produto</DialogTitle>
                                                    </DialogHeader>
                                                    <EditForm values={row} refetch={refetch} />
                                                </DialogContent>
                                            </Dialog>
                                        </TableCell>
                                        <TableCell className="text-left w-20">
                                            <DelteButton id={row.id} refetch={refetch}></DelteButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </ScrollArea>
                </div >
            </div>
        </div>
    )
}

export default Products

