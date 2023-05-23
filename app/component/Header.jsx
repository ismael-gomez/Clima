import { Link } from "@remix-run/react"

const Header = () => {
  return (
    <header className="grid m-auto">
        <div className="bg-white flex items-center justify-between py-3 px-20 gap-5 w-full ">
            <img src="img/logo.svg" alt="logo" className="h-7 hover:cursor-pointer"/>
            <div className="relative border-2 border-search rounded-full flex justify-center items-center gap-2">
                <input type="text" placeholder="El Tiempo en..." className="p-2 rounded-full outline-none border-none relative border-black" />
                <button>
                    <img src="img/search.svg" alt="search" className="hover:cursor-pointer h-5 pr-5 " /> 
                </button>
            </div>
            <div className="flex gap-2">
                {/* <div className="flex items-center rounded-full h-8 justify-center m-auto border-search border-2 hover:cursor-pointer hover:bg-mas ">
                    <img src="img/menor.png" alt="mas" className="h-5 m-3 " />
                </div> */}

                <div className="flex gap-4">
                    <div className="flex p-2 border-search border-2 rounded-md gap-2 justify-center items-center hover:cursor-pointer hover:opacity-80 hover:bg-clima">
                        <img src="img/lluvia.svg" alt="reciente" />
                        <div className="flex flex-col gap-1 ">
                            <p className="text-align-center text-xs font-bold">Municipio</p>
                            <p className="text-xs text-start">Estado </p>
                        </div>
                        <p className="pl-2 text-xl">
                            21°
                        </p>
                        
                    </div>
                    <div className="flex p-2 border-search border-2 rounded-md gap-2 justify-center items-center hover: cursor-pointer hover:opacity-80 hover:bg-clima">
                        <img src="img/calor.svg" alt="pasado" />
                        <div className="flex flex-col gap-1">
                            <p className="text-align-center text-xs font-bold">Mexicali</p>
                            <p className="text-xs text-start">Baja California</p>
                        </div>
                        <p className="pl-2 text-xl">
                            35°
                        </p>
                    </div>
                </div>

                <div className="flex items-center rounded-full h-8 justify-center m-auto border-search border-2 hover:cursor-pointer hover:bg-mas ">
                    <img src="img/mayor.svg" alt="mas" className="h-4 m-2 " />
                </div>
            </div>
        </div>
        <nav className="bg-nav px-20 flex justify-between">
            <ul className="flex justify-center w-full gap-4 p-3 items-center">
                <Link to={"/clima"}  className=" font-arial  hover:cursor-pointer hover:border-b-gray-700 border-transparent border-2 uppercase">Clima</Link>
                <Link to={"/noticias"}  className=" font-arial  hover:cursor-pointer hover:border-b-gray-700 border-transparent border-2 uppercase">Noticias</Link>
                <Link to={"/videos"}  className=" font-arial  hover:cursor-pointer hover:border-b-gray-700 border-transparent border-2 uppercase">Videos</Link>
                <Link to={"/avisos"}  className="  font-arial hover:cursor-pointer hover:border-b-gray-700 border-transparent border-2 uppercase">avisos</Link>
                <Link to={"/radar"}  className=" font-arial  hover:cursor-pointer hover:border-b-gray-700 border-transparent border-2 uppercase">Radar</Link>
                <Link to={"/mapas"}  className="  font-arial hover:cursor-pointer hover:border-b-gray-700 border-transparent border-2 uppercase">Mapas</Link>
                <Link to={"/satelites"}  className="  font-arial hover:cursor-pointer hover:border-b-gray-700 border-transparent border-2 uppercase">Satelites</Link>
                <Link to={"/mundo"} className=" font-arial  hover:cursor-pointer hover:border-b-gray-700 border-transparent border-2 uppercase" >Mundo</Link>
            </ul>

            <div className="flex items-center hover:cursor-pointer bg-white m-2">
                <p className="p-1  text-slate-400">
                    C°
                </p>
            </div>
        </nav>
    </header>
  )
}

export default Header
