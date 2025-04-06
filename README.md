# Smart Kheti - AI-Powered Weed Detection System

Smart Kheti is a cutting-edge agricultural solution that combines AI/ML and IoT technologies to revolutionize weed management in farming. Built with Next.js and modern web technologies, it offers an intelligent system for weed detection and management.

![Smart Kheti Banner](![alt text](image.png))

## Features

- **AI-Powered Weed Detection**: Upload images of weeds for instant identification
- **Machine Learning Analysis**: Get detailed information about weed characteristics and control methods
- **Responsive Design**: Fully responsive web interface built with Tailwind CSS
- **Real-time Processing**: Fast and accurate weed analysis using Google's Generative AI
- **Comprehensive Results**: Detailed insights including scientific names, characteristics, and control methods

## Tech Stack

- **Frontend**: Next.js 15.0, React 19
- **Styling**: Tailwind CSS, shadcn/ui components
- **AI/ML**: Google Generative AI (Gemini 1.5)
- **Type Safety**: TypeScript
- **Code Quality**: ESLint, Next.js configuration

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/smart-kheti.git
cd smart-kheti
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add:
```env
GEMINI_API_KEY=your_google_ai_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
smart-kheti/
├── app/
│   ├── actions/        # Server actions
│   ├── components/     # React components
│   └── layout.tsx      # Root layout
├── components/
│   └── ui/            # Reusable UI components
├── lib/
│   └── utils.ts       # Utility functions
├── public/            # Static assets
└── styles/           # Global styles
```

## Features in Detail

- **Weed Identification**: Upload images of weeds to get instant AI-powered analysis
- **Detailed Information**: Receive comprehensive data about identified weeds
- **Control Methods**: Get actionable insights for weed management
- **Environmental Impact**: Track and optimize herbicide usage
- **Cost Reduction**: Improve farming efficiency through smart detection

## Contributing

We welcome contributions! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---
