import { useNavigate } from "@tanstack/react-router"
import { Button } from "../components/ui/button"

import prodcut from "../assets/product.svg"
import person from "../assets/person.svg"
import home from "../assets/home.svg"

function Layout() {

    const navigate = useNavigate()

    return (

        <div className="absolute top-0 bottom-0 left-0 right-0">

            <div className=" absolute top-0 left-16 right-16 w-auto h-20 flex flex-col justify-center items-center" >

                <p className="mt-2 text-3xl font-sans">Railen Software Company</p>
                <div className=" ml-16 mr-6 mt-3 h-1 w-full bg-emerald-600 rounded-sm" />

            </div>

            <div className="flex flex-row h-full">

                <div className="w-16 h-full flex flex-col items-center" >

                    <Button variant="ghost" className="mt-4  pr-2 pl-2" onClick={() =>
                        navigate({
                            to: '/app/home',
                        })
                    }>
                        <img src={home} alt="home" />
                    </Button>

                    <Button variant="ghost" className="mt-4  pr-2 pl-2" onClick={() =>
                        navigate({
                            to: '/app/products',
                        })
                    }>
                        <img src={prodcut} alt="prodcuts" />
                    </Button>
                    <Button variant="ghost" className="mt-4  pr-2 pl-2" onClick={() =>
                        navigate({
                            to: '/app/users',
                        })
                    }>
                        <img src={person} alt="person" />
                    </Button>

                </div>

                <div className=" mt-6 mb-6 h-auto w-1 bg-emerald-600 rounded-sm" />

            </div>
        </div>

    )

}
export default Layout