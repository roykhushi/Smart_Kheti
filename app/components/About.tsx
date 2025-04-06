import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Target, Zap } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-green-800">Our Mission</h2>
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-semibold text-green-700">
                <Target className="w-6 h-6 mr-2" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We aim to revolutionize farming through technology, making weed management more efficient, 
                cost-effective, and environmentally friendly. Our goal is to empower farmers with cutting-edge 
                AI and IoT solutions that significantly reduce herbicide use while improving crop yields.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-semibold text-green-700">
                <Zap className="w-6 h-6 mr-2" />
                The Challenge
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Traditional weed management is labor-intensive, costly, and often relies on harmful chemicals. 
                These methods can damage crops, harm beneficial insects, and contribute to environmental degradation. 
                Our AI/ML and IoT solution provides an innovative response to these pressing challenges.
              </p>
            </CardContent>
          </Card>
        </div>
        <Card className="bg-green-700 text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl font-semibold">
              <Leaf className="w-6 h-6 mr-2" />
              How It Works
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Our system combines advanced AI/ML models with IoT sensors to detect weeds in real-time. 
              Here&apos;s a brief overview of our innovative process:
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li>IoT sensors collect real-time data from the field, including high-resolution images and environmental information.</li>
              <li>Our AI algorithms analyze this data, precisely identifying weed species and their locations.</li>
              <li>The system generates targeted treatment plans, optimizing herbicide use or suggesting mechanical removal methods.</li>
              <li>Farmers receive actionable insights through our user-friendly interface, enabling informed decision-making.</li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}


