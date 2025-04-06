import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-b from-green-50 to-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-green-800">Contact Us</h2>
        <Card className="max-w-2xl mx-auto bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl font-semibold text-green-700">
              <Mail className="w-6 h-6 mr-2" />
              Get in Touch
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <Input id="name" placeholder="Your Name" className="w-full" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Input id="email" type="email" placeholder="your@email.com" className="w-full" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea id="message" placeholder="Your message here..." className="w-full h-32" />
              </div>
              <Button type="submit" className="w-full flex items-center justify-center">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
        <div className="mt-12 text-center">
          <p className="text-md text-gray-700">
            Have questions or need support? Our team is here to help you get the most out of our AI-powered weed detection solution.
          </p>
        </div>
      </div>
    </section>
  );
}

