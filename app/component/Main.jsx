import { Link } from "@remix-run/react"

const Main = () => {
  return (
    <nav className='mt-20 fixed z-10'>
        <ul className="flex flex-col ">
            <Link to={"#"} className="bg-white relative w-full"><img src="img/facebook.svg" alt="Facebook"className='h-10  hover:h-11 text-white' /></Link>
            <Link to={"#"} className=""><img src="img/twitter.svg" alt="Twitter" className='h-10 hover:h-11' /></Link>
            <Link to={"#"} className=""><img src="img/linkedin.svg" alt="Linkdlin" className='h-10 hover:h-11' /></Link>
            <Link to={"#"} className=""><img src="img/pinterest.svg" alt="pinterest" className='h-10 hover:h-11' /></Link>
            <Link to={"#"} className=""><img src="img/gmail.svg" alt="Correo" className='h-10  hover:h-11' /></Link>
            <Link to={"#"} className=""><img src="img/share.svg" alt="Compartir"  className='h-10 hover:h-11'/></Link>
        </ul>
    </nav>
  )
}

export default Main