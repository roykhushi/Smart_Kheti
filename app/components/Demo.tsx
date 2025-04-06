// import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, Leaf, Building, DollarSign } from 'lucide-react'

export default function Demo() {
  return (
    <section id="demo" className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-green-800">See It In Action</h2>
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 mb-12">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl font-semibold text-green-700">
              <Play className="w-6 h-6 mr-2" />
              Interactive Demo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video max-h-full bg-gray-200 rounded-lg flex items-center justify-center mb-6">
              {/* <p className="text-xl text-gray-600">Interactive Demo Placeholder</p> */}
              <video className="w-full" src="./robotic_arm.mp4" autoPlay controls></video>
            </div>
            {/* <Button size="lg" className="w-full">Try Live Demo</Button> */}
          </CardContent>
        </Card>
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center text-green-700">Real-World Use Cases</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-semibold text-green-700">
                  <Leaf className="w-5 h-5 mr-2" />
                  Precision Agriculture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Optimize weed management in large-scale farms with pinpoint accuracy, reducing herbicide use and improving crop health.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-semibold text-green-700">
                  <Building className="w-5 h-5 mr-2" />
                  Greenhouse Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Automate weed detection and removal in controlled environments, ensuring optimal growing conditions for high-value crops.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-semibold text-green-700">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Cost Reduction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Significantly reduce labor costs and increase efficiency for small-scale farmers through automated weed management.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

