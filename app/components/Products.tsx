import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Camera } from 'lucide-react'

export default function Products() {
  return (
    <section id="products" className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-green-800">Our Products</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-semibold text-green-700">
                <Code className="w-6 h-6 mr-2" />
                AI/ML Weed Detection Software
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li>Automated weed identification with high accuracy</li>
                <li>Real-time alerts and comprehensive reporting</li>
                <li>Seamless integration with existing farm management systems</li>
                <li>Customizable detection parameters for various crop types</li>
              </ul>
              
                {/* <Button className="w-full">Learn More</Button> */}
             
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-semibold text-green-700">
                <Camera className="w-6 h-6 mr-2" />
                IoT Devices &amp; Sensors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li>High-resolution camera modules for precise imaging</li>
                <li>Environmental sensors (temperature, humidity, soil moisture)</li>
                <li>Edge computing devices for real-time processing</li>
                <li>Rugged, weather-resistant hardware for field deployment</li>
              </ul>
              {/* <Button className="w-full">View Devices</Button> */}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

