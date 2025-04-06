"use server"
import { GoogleGenerativeAI } from "@google/generative-ai"

export async function identifyWeed(formData: FormData) {
  try {
    const imageFile = formData.get("image") as File
    if (!imageFile) {
      throw new Error("No image provided")
    }
   
    const imageBytes = await imageFile.arrayBuffer();
    
 
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "")
    
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })
    
    const imageData = [...new Uint8Array(imageBytes)]
    const imagePart = {
      inlineData: {
        data: Buffer.from(imageData).toString("base64"),
        mimeType: imageFile.type,
      },
    }
    
  
    const prompt = `
      Analyze this image of a weed and provide the following information in JSON format:
      {
        "name": "Common name of the weed",
        "scientificName": "Scientific name (Latin)",
        "description": "Detailed description of the weed",
        "characteristics": ["Key characteristic 1", "Key characteristic 2", "Key characteristic 3", "Key characteristic 4", "Key characteristic 5"],
        "controlMethods": ["Control method 1", "Control method 2", "Control method 3", "Control method 4", "Control method 5"],
        "impact": "Description of how this weed affects crops"
      }
      
      Return only the raw JSON object without any markdown formatting, code blocks, or additional text.
    `
  
    const result = await model.generateContent([prompt, imagePart])
    const response = await result.response
    let text = response.text()
    
    text = text.replace(/```json\n?|\n?```/g, '').trim()
  
    try {
      return JSON.parse(text)
    } catch (e) {
      console.error("Failed to parse JSON response:", text)
      
      const match = text.match(/\{[\s\S]*\}/)
      if (match) {
        try {
          return JSON.parse(match[0])
        } catch (nestedError) {
          console.error("Second parse attempt failed:", nestedError)
        }
      }
      
      return { //parsing err
        name: "Analysis Error",
        scientificName: "",
        description: "The AI couldn't properly analyze this image. Please try with a clearer image of a weed.",
        characteristics: [],
        controlMethods: [],
        impact: "Unable to determine impact.",
      }
    }
  } catch (error) {
    console.error("Error in weed identification:", error)
    throw new Error("Failed to identify weed")
  }
}

