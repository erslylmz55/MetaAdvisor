import React from 'react';

export default function HomePage() {
  return (
    <main className="min-h-screen font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-yellow-600 text-white py-28 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your Business with
            <span className="block mt-2 text-accent-gold">AI-Powered Insights</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-blue-100">
            MetaAdvisor delivers intelligent recommendations and strategic guidance 
            to accelerate growth and optimize decision-making across your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-lg px-8 py-4 transition">
              Start Free Trial
            </button>
            <button className="bg-white hover:bg-gray-100 text-blue-900 font-semibold rounded-lg px-8 py-4 transition">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Powerful AI Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how MetaAdvisor advanced AI capabilities can revolutionize your business.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-blue-700 mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-blue-900">Intelligent Analytics</h3>
              <p className="text-gray-600">
                Advanced data processing and pattern recognition to uncover hidden opportunities and risks in your metrics.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-yellow-600 mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-blue-900">Strategic Recommendations</h3>
              <p className="text-gray-600">
                Personalized action plans and guidance tailored to your industry and company size.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-blue-900 mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-blue-900">Real-time Monitoring</h3>
              <p className="text-gray-600">
                Continuous monitoring of key metrics with instant alerts and adaptive recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">Why Choose MetaAdvisor?</h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="text-yellow-600 text-2xl font-bold">✓</span>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900">Increase Revenue by 35%</h3>
                  <p className="text-gray-600">Our AI identifies untapped opportunities to optimize revenue streams.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-yellow-600 text-2xl font-bold">✓</span>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900">Reduce Operational Costs</h3>
                  <p className="text-gray-600">Streamline processes and eliminate inefficiencies with data-driven insights.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-yellow-600 text-2xl font-bold">✓</span>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900">Make Faster Decisions</h3>
                  <p className="text-gray-600">Access real-time insights and predictive analytics for confident decisions.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-yellow-600 text-2xl font-bold">✓</span>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900">Scale Intelligently</h3>
                  <p className="text-gray-600">Our AI grows with your business, providing increasingly sophisticated insights.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-700 to-yellow-600 p-8 rounded-2xl text-white">
            <h3 className="text-3xl font-bold mb-6">Ready to Get Started?</h3>
            <p className="mb-6">Join thousands of businesses already using MetaAdvisor to drive growth.</p>
            <button className="bg-white text-blue-900 font-semibold rounded-lg px-6 py-3 hover:bg-gray-100 transition">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-900 text-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Start leveraging AI-powered insights today and watch your business reach new heights.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-yellow-600 hover:bg-yellow-500 text-blue-900 font-semibold rounded-lg px-10 py-4 transition">
            Get Started Now
          </button>
          <button className="bg-transparent border-2 border-yellow-600 hover:bg-yellow-500 hover:text-blue-900 text-white font-semibold rounded-lg px-10 py-4 transition">
            Schedule a Demo
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">MetaAdvisor</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering businesses with AI-driven insights and strategic recommendations.
            </p>
           
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition">📘</a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition">🐦</a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition">💼</a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition">📧</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-yellow-400 transition">Features</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Pricing</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Enterprise</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">API</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-yellow-400 transition">About</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Careers</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Contact</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 MetaAdvisor. All rights reserved.</p>
          <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
            <a href="#" className="hover:text-yellow-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-400 transition">Terms of Service</a>
            <a href="#" className="hover:text-yellow-400 transition">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
