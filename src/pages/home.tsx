import { useQuery } from "@tanstack/react-query"
import axios from "axios"

function Home() {
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

    if (status === 'success') {

        return (

            <div className="flex items-center justify-center border-4 border-emerald-600 h-16 w-60 mt-28 rounded-md">
                <h1>
                    Produtos cadastrados: {data.length}
                </h1>
            </div>

        )

    }


    console.log(status)



    return (<h1 className=" mt-20">
        Bem Vindo!
    </h1>)

}

export default Home