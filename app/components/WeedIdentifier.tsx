"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Upload, Loader2, AlertCircle } from "lucide-react"
import { identifyWeed } from "../actions/weed-actions"

export default function WeedIdentifier() {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<any | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      const reader = new FileReader()
      reader.onload = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(selectedFile)
      setError(null)
      setResult(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) {
      setError("Please select an image to analyze")
      return
    }

    setLoading(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.append("image", file)

      const response = await identifyWeed(formData)
      setResult(response)
    } catch (err) {
      setError("Failed to analyze the image. Please try again.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="weed-identifier" className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-green-800">Weed Identifier</h2>
        <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          Upload an image of a weed, and our AI will identify it and provide detailed information about its
          characteristics and control methods.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-semibold text-green-700">
                <Upload className="w-6 h-6 mr-2" />
                Upload Weed Image
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-500 transition-colors cursor-pointer">
                  <input type="file" id="weed-image" accept="image/*" onChange={handleFileChange} className="hidden" />
                  <label htmlFor="weed-image" className="cursor-pointer">
                    {preview ? (
                      <div className="relative w-full h-64 mx-auto">
                        <Image src={preview || "/placeholder.svg"} alt="Weed preview" fill className="object-contain" />
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center py-8">
                        <Leaf className="h-12 w-12 text-green-500 mb-2" />
                        <p className="text-sm text-gray-500">Click or drag and drop to upload an image</p>
                        <p className="text-xs text-gray-400 mt-1">Supports: JPG, PNG, WEBP (Max 5MB)</p>
                      </div>
                    )}
                  </label>
                </div>

                {error && (
                  <div className="bg-red-50 text-red-600 p-3 rounded-md flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    {error}
                  </div>
                )}

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={loading || !file}>
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    "Identify Weed"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-semibold text-green-700">
                <Leaf className="w-6 h-6 mr-2" />
                Weed Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <Loader2 className="w-12 h-12 text-green-500 animate-spin mb-4" />
                  <p className="text-gray-500">Analyzing your image...</p>
                </div>
              ) : result ? (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-green-700 mb-2">{result.name}</h3>
                    <p className="text-gray-600 italic mb-4">{result.scientificName}</p>
                    <p className="text-gray-700">{result.description}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-green-700 mb-2">Characteristics</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {result.characteristics.map((char: string, index: number) => (
                        <li key={index}>{char}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-green-700 mb-2">Control Methods</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {result.controlMethods.map((method: string, index: number) => (
                        <li key={index}>{method}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-green-700 mb-2">Impact on Crops</h4>
                    <p className="text-gray-700">{result.impact}</p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <Leaf className="w-12 h-12 text-gray-300 mb-4" />
                  <p className="text-gray-500 mb-2">Upload an image to see weed information</p>
                  <p className="text-xs text-gray-400">
                    Our AI will analyze the image and provide detailed information about the weed
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

