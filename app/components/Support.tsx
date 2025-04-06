import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, HelpCircle, Users } from 'lucide-react'

export default function Support() {
  return (
    <section id="support" className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-green-800">Support & Resources</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-semibold text-green-700">
                <FileText className="w-6 h-6 mr-2" />
                Documentation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="text-green-600 hover:text-green-800 font-semibold flex items-center">
                    <span className="mr-2">→</span> User Manual
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-green-600 hover:text-green-800 font-semibold flex items-center">
                    <span className="mr-2">→</span> Installation Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-green-600 hover:text-green-800 font-semibold flex items-center">
                    <span className="mr-2">→</span> API Documentation
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-semibold text-green-700">
                <HelpCircle className="w-6 h-6 mr-2" />
                FAQs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Find answers to commonly asked questions about our AI-powered weed detection system.
              </p>
              <Link href="#" className="text-green-600 hover:text-green-800 font-semibold flex items-center">
                <span className="mr-2">→</span> View Frequently Asked Questions
              </Link>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-semibold text-green-700">
                <Users className="w-6 h-6 mr-2" />
                Community Forum
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Join our community to share experiences, get help from other users, and stay updated on the latest features.
              </p>
              <Button className="w-full">Join Forum</Button>
            </CardContent>
          </Card>
        </div>
        
        
      </div>
    </section>
  )
}

