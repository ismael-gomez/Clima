import { Link } from "@remix-run/react"

const Footer = () => {
  return (
    <footer className='bg-footer w-full fixed  bottom-0 px-20 py-5'>
        <section>
            <div>
                <img src="img/logoGris.svg" alt="logo" className='h-7'/>
            </div>
            <div className="pt-5 text-white flex justify-between">
                <nav className="flex gap-10">
                    <ul className="grid gap-5">
                        <Link to={"#"} className="text-xs hover:cursor-pointer">yourweather.co.uk</Link>
                        <Link to={"#"} className="text-xs hover:cursor-pointer">meteored.mx</Link>
                        <Link to={"#"} className="text-xs hover:cursor-pointer">timpo.com</Link>
                        <Link to={"#"} className="text-xs hover:cursor-pointer">tameteo.com</Link>
                        <Link to={"#"} className="text-xs hover:cursor-pointer">tempo.pt</Link>
                    </ul>
                    <ul className="grid">
                        <Link to={"#"} className="text-xs">ilemeteo.net</Link>
                        <Link to={"#"} className="text-xs">daswetter.com</Link>
                        <Link to={"#"} className="text-xs">tempo.com</Link>
                        <Link to={"#"} className="text-xs">meteored.com.ar</Link>
                        <Link to={"#"} className="text-xs">meterored.cl</Link>
                    </ul>

                    <ul className="grid">
                        <Link to={"#"} className="text-xs">Descargar Gratis Android meteored.mx</Link>
                        <Link to={"#"} className="text-xs">Descargar Gratis IOS meteored.mx</Link>
                        <Link to={"#"} className="text-xs">Descargar Gratis Huawei meteored.mx</Link>
                        <Link to={"#"} className="text-xs">Descargar Gratis Windows 10 meteored.mx</Link>
                    </ul>
                </nav>

                <nav>
                    <ul>
                        <Link to={"#"}>facebook</Link>
                        <Link to={"#"}>twiter</Link>
                        <Link to={"#"}>youtube</Link>
                        <Link to={"#"}>instagram</Link>
                        <Link to={"#"}>Linkdlin</Link>
                    </ul>
                </nav>
            </div>
        </section>
    </footer>
  )
}

export default Footer
