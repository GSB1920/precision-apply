import React, { useState } from 'react'
import { FileText, Briefcase, Sparkles } from 'lucide-react'

function App() {
  const [resume, setResume] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [analysis, setAnalysis] = useState('')
  const [loading, setLoading] = useState(false)

  const handleAnalyze = async () => {
    if (!resume || !jobDescription) {
      alert('Please provide both resume and job description')
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ resume, jobDescription }),
      })

      const data = await response.json()
      setAnalysis(data.analysis)
    } catch (error) {
      console.error('Error:', error)
      alert('Failed to analyze resume. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
            <Sparkles className="text-indigo-600" />
            Precision Apply
          </h1>
          <p className="text-xl text-gray-600">AI-powered resume optimization for job applications</p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <FileText className="text-blue-600" size={28} />
                Your Resume
              </h2>
              <textarea
                value={resume}
                onChange={(e) => setResume(e.target.value)}
                placeholder="Paste your resume content here..."
                className="w-full h-48 p-6 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none text-lg"
              />
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <Briefcase className="text-green-600" size={28} />
                Job Description
              </h2>
              <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Paste the job description here..."
                className="w-full h-48 p-6 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none text-lg"
              />
            </div>

            <button
              onClick={handleAnalyze}
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? 'Analyzing...' : 'Analyze Resume'}
            </button>
          </div>

          {/* Results Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Analysis Results</h2>
            {analysis ? (
              <div className="prose max-w-none">
                <div className="whitespace-pre-wrap text-gray-700 text-lg leading-relaxed">{analysis}</div>
              </div>
            ) : (
              <div className="text-gray-500 text-center py-12">
                <Sparkles className="mx-auto mb-4 text-gray-300" size={64} />
                <p className="text-xl">Your analysis results will appear here</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
