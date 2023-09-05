import type {NextPage} from 'next'
import React from 'react';
const LivroDados: NextPage=()=>{return (<main>Ola Mundo</main>)}
import styles from '../styles/Home.module.css'
const baseURL='http://localhost:3000/api/livros'
obter()=>{fetch(baseURL).then(response=>{return response.json();}).then(data=>{})}
excluirLivro(codigo:nuumber=)=>{fetch(baseURL,codigo).then(response=>{return "ok"})}
livros:livro[]=[]=useState(booleana)
useEffect(obterLivros;.then(response=>{return livros carregado:true}))
excluir()=>{codigo;excluir;{return carregado:false; <div style=(styles.container)>Head,Menu,<main>Titulo:<table><tr><td><td><td></td></td></td></tr></table></main></div>}}

