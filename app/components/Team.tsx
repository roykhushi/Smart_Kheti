import Image from 'next/image'

export default function Team() {
  return (
    <section id="team" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-800">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Image 
              src="/placeholder.svg" 
              alt="Team Member" 
              width={200} 
              height={200} 
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Dr. Jane Doe</h3>
            <p>AI Research Lead</p>
          </div>
          <div className="text-center">
            <Image 
              src="/placeholder.svg" 
              alt="Team Member" 
              width={200} 
              height={200} 
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">John Smith</h3>
            <p>IoT Systems Engineer</p>
          </div>
          <div className="text-center">
            <Image 
              src="/placeholder.svg" 
              alt="Team Member" 
              width={200} 
              height={200} 
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Dr. Emily Chen</h3>
            <p>Agricultural Science Advisor</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Our Partners</h3>
          <p>We collaborate with leading universities and agricultural research institutions to continually improve our technology.</p>
        </div>
      </div>
    </section>
  )
}

