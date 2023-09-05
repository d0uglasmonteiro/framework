import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globais.css'
import type{AppProps}from 'next/app'
import head from 'next/head

function Myapp({Component, pageProps, }:AppProps){
  return (<><head><meta name='viewport'
          content='width=device-width, initial-scale=1'/>
          </head><Component {...pageProps}</>)
}
export default Myapp