import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Cpu, Database } from 'lucide-react'

export default function Technology() {
  return (
    <section id="technology" className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-green-800">Our Technology</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-semibold text-green-700">
                <Brain className="w-6 h-6 mr-2" />
                AI/ML Models
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                We use state-of-the-art machine learning algorithms for accurate weed identification:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Image classification for weed species identification</li>
                <li>Object detection for precise weed localization</li>
                <li>Deep learning for complex pattern recognition in crop fields</li>
                <li>Predictive analytics for weed growth forecasting</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-semibold text-green-700">
                <Cpu className="w-6 h-6 mr-2" />
                IoT Integration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Our system integrates various IoT sensors to collect real-time data:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>High-resolution cameras for visual data capture</li>
                <li>Temperature and humidity sensors for environmental monitoring</li>
                <li>Soil moisture sensors for precision irrigation insights</li>
                <li>GPS modules for accurate geolocation tagging</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <Card className="bg-green-700 text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl font-semibold">
              <Database className="w-6 h-6 mr-2" />
              Data Pipeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6">
              Our advanced data pipeline ensures seamless flow from sensors to analysis to decision-making:
            </p>
            <div className="relative h-80 bg-white rounded-lg overflow-hidden">
              <Image 
                src="/data_pipeline.jpg" 
                alt="Data Pipeline Diagram" 
                layout="fill"
                objectFit="contain"
                className="p-4"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-r from-green-700 via-transparent to-green-700 flex items-center justify-around text-green-800 font-semibold">
                <div className="text-center">
                  <p className="bg-white rounded px-2 py-1 mb-2">Data Collection</p>
                  <p className="text-xs text-white">IoT Sensors</p>
                </div>
                <div className="text-center">
                  <p className="bg-white rounded px-2 py-1 mb-2">Processing</p>
                  <p className="text-xs text-white">Edge & Cloud</p>
                </div>
                <div className="text-center">
                  <p className="bg-white rounded px-2 py-1 mb-2">Analysis</p>
                  <p className="text-xs text-white">AI/ML Models</p>
                </div>
                <div className="text-center">
                  <p className="bg-white rounded px-2 py-1 mb-2">Action</p>
                  <p className="text-xs text-white">Insights & Control</p>
                </div>
              </div> */}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

