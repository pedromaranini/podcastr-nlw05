// Forma SPA
// Forma SSR
// Forma SSG
// import { useEffect } from "react";

export default function Home(props) {
  // console.log(props.episodes);
  // SPA, Dados carregados somente quando a aplicação é acessada
  // useEffect(() => {
  //   fetch('http://localhost:3333/episodes').
  //     then(response => response.json())
  //     .then(data => console.log(data));
  // }, [])
  
  return (
    <h1>Index</h1> 
  )
}

// SSG (Gerar página estática)

export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()
  
  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}

// SSR (Next)

// export async function getServerSideProps() {
//   const response = await fetch('http://localhost:3333/episodes')
//   const data = await response.json()
  
//   return {
//     props: {
//       episodes: data,
//     }
//   }
// }
