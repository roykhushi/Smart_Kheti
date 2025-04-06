import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-green-800 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Smart Kheti</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#about">About</Link></li>
            <li><Link href="#technology">Technology</Link></li>
            <li><Link href="#weed-identifier">Weed Identifier</Link></li>
            <li><Link href="#demo">Demo</Link></li>
            <li><Link href="#products">Products</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </nav>
        <Link href="#weed-identifier">
        <Button 
          variant="outline" 
          className="text-green-800 border-green-800 hover:bg-green-700 hover:text-white"
          
        >
          Get Started
        </Button>
        </Link>
        
      </div>
    </header>
  )
}

