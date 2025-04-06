import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import About from './components/About'
import Technology from './components/Technology'
import Demo from './components/Demo'
import Results from './components/Results'
import Products from './components/Products'
import Support from './components/Support'
import Blog from './components/Blog'
import Contact from './components/Contact'
<<<<<<< HEAD
=======
import WeedIdentifier from './components/WeedIdentifier'
>>>>>>> b5235b3 (final changes)

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HomePage />
        <About />
        <Technology />
        <Demo />
<<<<<<< HEAD
=======
        <WeedIdentifier />
>>>>>>> b5235b3 (final changes)
        <Results />
        <Products />
        <Support />
        <Blog />
        <Contact />
        {/* <Team /> */}
      </main>
      <Footer />
    </div>
  )
}

