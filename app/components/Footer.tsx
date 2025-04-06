import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Smart Kheti</h3>
            <p>Revolutionizing agriculture with AI and IoT</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#home">Home</Link></li>
              <li><Link href="#about">About</Link></li>
              <li><Link href="#technology">Technology</Link></li>
              <li><Link href="#products">Products</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="#support">Documentation</Link></li>
              <li><Link href="#support">FAQs</Link></li>
              <li><Link href="#contact">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><Link href="#">Twitter</Link></li>
              <li><Link href="#">LinkedIn</Link></li>
              <li><Link href="#">GitHub</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-700 text-center">
          <p>&copy; 2025 Smart Kheti. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

