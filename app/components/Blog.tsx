import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Zap, BookOpen } from 'lucide-react'

export default function Blog() {
  return (
    <section id="blog" className="bg-gradient-to-b from-green-50 to-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-green-800">Blog & Research</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-semibold text-green-700">
                <FileText className="w-5 h-5 mr-2" />
                Latest Research Paper
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold mb-2">Advancements in AI-Driven Weed Detection Algorithms</h3>
              <p className="text-gray-600 mb-4">Exploring cutting-edge techniques in machine learning for improved accuracy in weed identification.</p>
              <Link href="#" className="text-green-600 hover:text-green-800 font-semibold">
                Read Paper →
              </Link>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-semibold text-green-700">
                <Zap className="w-5 h-5 mr-2" />
                Product Update
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold mb-2">New Features in Our Latest Software Release</h3>
              <p className="text-gray-600 mb-4">Discover the enhanced capabilities and improved user interface in our newest version.</p>
              <Link href="#" className="text-green-600 hover:text-green-800 font-semibold">
                Read Update →
              </Link>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-semibold text-green-700">
                <BookOpen className="w-5 h-5 mr-2" />
                Best Practices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold mb-2">Optimizing Weed Detection in Various Crop Types</h3>
              <p className="text-gray-600 mb-4">Learn how to fine-tune our system for maximum efficiency across different agricultural scenarios.</p>
              <Link href="#" className="text-green-600 hover:text-green-800 font-semibold">
                Read Article →
              </Link>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 text-center">
          <Link href="#" className="inline-block bg-green-700 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors duration-300">
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  )
}

