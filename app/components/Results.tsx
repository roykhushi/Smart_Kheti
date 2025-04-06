import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, DollarSign, Clock } from 'lucide-react'

export default function Results() {
  return (
    <section id="results" className="bg-gradient-to-b from-green-50 to-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-green-800">Impact & Results</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-semibold text-green-700">
                <Leaf className="w-6 h-6 mr-2" />
                Environmental Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-500 mb-4">90%</div>
              <p className="text-gray-600">Reduction in herbicide use in pilot studies, promoting sustainable farming practices.</p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-semibold text-green-700">
                <DollarSign className="w-6 h-6 mr-2" />
                Economic Benefits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between mb-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500">30%</div>
                  <p className="text-sm text-gray-500">Cost Reduction</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500">20%</div>
                  <p className="text-sm text-gray-500">Yield Increase</p>
                </div>
              </div>
              <p className="text-gray-600">Farmers reported significant improvements in weed management costs and crop yield.</p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-semibold text-green-700">
                <Clock className="w-6 h-6 mr-2" />
                Efficiency Gains
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-500 mb-4">70%</div>
              <p className="text-gray-600">Reduction in manual labor hours, allowing farmers to focus on other critical tasks.</p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 text-center">
          <p className="text-md text-gray-700">
            Our AI-powered weed detection system has shown remarkable results across various agricultural settings, 
            demonstrating significant improvements in sustainability, profitability, and operational efficiency.
          </p>
        </div>
      </div>
    </section>
  )
}

