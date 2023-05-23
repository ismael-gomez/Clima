import { Links, LiveReload, Meta, Outlet, Scripts } from "@remix-run/react";
import stylesheet from "~/tailwind.css"
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./component/Main";


export const meta = () => ([
  {charset: "utf-8"},
  {title: "Clima"},
  {viewport: "width=device-width,initial-scale=1"},
]);

export const links = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App (){
  return(
    <Document>
      <Outlet/>
    </Document>
  )
}

export function Document({children}){
  return(
    <html lang="es">
      <head>
        <Meta/>
        <Links/>
      </head>
      <body>
        <Header/>
        {children}
        <Main/>
        <Footer/>
        <Scripts/>
        <LiveReload/>
      </body>
    </html>
  )
}