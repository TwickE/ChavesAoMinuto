import { Link } from "react-router-dom"

function NotFoundSection() {
  return (
    <section className="mb-20 h-dvh w-full px-4 flex flex-col justify-center items-center gap-4 sm:gap-8">
        <h1 className="text-center text-9xl font-bold text-primary-default">404</h1>
        <h2 className="text-center text-2xl sm:text-5xl font-bold text-gray-900">Oops...!<br></br>Parece que esta página não existe.</h2>
        <Link to="/" className="w-fit text-white bg-primary-default hover:bg-primary-dark font-bold rounded sm:rounded-xl text-xl sm:text-4xl px-6 sm:px-20 py-3 sm:py-8 text-center">Voltar á Página Inicial</Link>
    </section>
  )
}

export default NotFoundSection