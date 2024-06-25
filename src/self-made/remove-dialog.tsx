import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./../components/ui/dialog"

import { Button } from "./../components/ui/button"
import { toast } from "../components/ui/use-toast"

import axios from "axios"
import del from "../assets/delete.svg"



function DelteButton({ id, refetch }: { id: string, refetch: any }) {


    async function onSubmit(id: string) {

        axios.delete("http://localhost:3000/src/Products.php", { data: { id: id }, headers: { "Authorization": "***" } }).then((response) => {
            console.log(response);
            if (response.data == 'sucesso' || response.status == 200) {
                toast({
                    title: "Produto deletado",
                })
                refetch()
            }
        })
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">
                    <img src={del} alt="prodcuts" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Deletar produto</DialogTitle>
                    <DialogDescription>
                        Esse produto será deletado permanentemente.
                    </DialogDescription>
                </DialogHeader>

                <DialogFooter className="sm:justify-start">

                    <Button className="mr-auto" type="button" variant="destructive" onClick={() => onSubmit(id)}>
                        Apagar
                    </Button>

                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Fechar
                        </Button>
                    </DialogClose>

                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default DelteButton