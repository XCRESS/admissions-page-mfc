import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    course: 'bsc',
    message: ''
  })
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Let Netlify handle the form data
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": "admission-application",
        ...formData
      }).toString()
    })
      .then(() => {
        setFormSubmitted(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          education: '',
          course: 'bsc',
          message: ''
        })
      })
      .catch((error) => {
        alert("Error submitting form: " + error)
      })
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto py-3 px-4 sm:px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img 
              src="/logo.jpg" 
              alt="Mewar Flying Club Logo - Aircraft Maintenance Training Institute" 
              className="h-12 sm:h-16" 
              width="64"
              height="64"
              loading="eager"
            />
            <div>
              <h1 className="text-blue-900 text-lg sm:text-xl font-bold leading-tight">MEWAR FLYING CLUB</h1>
              <p className="text-red-600 text-xs sm:text-sm">Associated with Mewar University</p>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-blue-900 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-blue-900 hover:text-red-600 font-medium">Home</a>
            <a href="#courses" className="text-blue-900 hover:text-red-600 font-medium">Courses</a>
            <a href="#admissions" className="text-blue-900 hover:text-red-600 font-medium">Admissions</a>
            <a href="#contact" className="text-blue-900 hover:text-red-600 font-medium">Contact</a>
          </nav>
          
          {/* Desktop Apply Now Button */}
          <a href="#apply-now" className="hidden md:block bg-red-600 text-white px-4 py-2 rounded-md font-medium hover:bg-red-700 transition">Apply Now</a>
        </div>
        
        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t py-2 px-4 shadow-lg">
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-blue-900 hover:text-red-600 font-medium py-2" onClick={toggleMobileMenu}>Home</a>
              <a href="#courses" className="text-blue-900 hover:text-red-600 font-medium py-2" onClick={toggleMobileMenu}>Courses</a>
              <a href="#admissions" className="text-blue-900 hover:text-red-600 font-medium py-2" onClick={toggleMobileMenu}>Admissions</a>
              <a href="#contact" className="text-blue-900 hover:text-red-600 font-medium py-2" onClick={toggleMobileMenu}>Contact</a>
              <a href="#apply-now" className="bg-red-600 text-white px-4 py-2 rounded-md font-medium hover:bg-red-700 transition text-center" onClick={toggleMobileMenu}>Apply Now</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="py-8 sm:py-12 bg-gradient-to-r from-blue-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">Launch Your Aviation Career</h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-red-600 mb-6">Admissions Open for 2025-2026</h2>
            <p className="text-gray-700 mb-8 text-base sm:text-lg">Join Mewar Flying Club's prestigious Aircraft Maintenance programs and become a certified aviation professional. Limited seats available!</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#apply-now" className="bg-red-600 text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition text-base sm:text-lg text-center sm:text-left">Apply Now</a>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  // Direct download from Google Drive
                  const link = document.createElement('a');
                  link.href = 'https://drive.google.com/uc?export=download&id=1_oEncQlnsvDGt_P8O8DANxLq65HSqeuQ';
                  link.download = 'Mewar_Flying_Club_Prospectus_2025.pdf';
                  link.target = '_blank';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="border-2 border-blue-900 text-blue-900 px-6 py-3 rounded-md font-medium hover:bg-blue-900 hover:text-white transition text-base sm:text-lg text-center sm:text-left"
                title="Download our detailed course prospectus"
              >
                Download Prospectus
              </button>
            </div>
          </div>
          
          {/* Application Form */}
          <div id="apply-now" className="md:w-1/2 bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">Begin Your Journey Today</h2>
            <p className="text-red-600 mb-6"><span className="font-bold">HURRY!</span> Only 60 seats available for the batch of 2025-26</p>
            
            {formSubmitted ? (
              <div className="text-center py-8">
                <div className="text-green-600 text-5xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Thank You!</h3>
                <p className="text-gray-700 mb-4">Your application has been received. Our counselor will contact you shortly.</p>
                <button 
                  onClick={() => setFormSubmitted(false)}
                  className="bg-blue-900 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-800 transition"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form 
                name="admission-application" 
                method="POST" 
                data-netlify="true"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="admission-application" />
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-1">Full Name*</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-1">Email Address*</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-1">Phone Number*</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="education" className="block text-gray-700 mb-1">Educational Qualification*</label>
                    <input 
                      type="text" 
                      id="education" 
                      name="education"
                      value={formData.education}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      placeholder="12th with PCM" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="course" className="block text-gray-700 mb-1">Interested Course*</label>
                    <select 
                      id="course" 
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      required
                    >
                      <option value="bsc">B.Sc. (Hons) Aircraft Maintenance (3 Years)</option>
                      <option value="diploma">Diploma in Aircraft Maintenance (1 Year)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-1">Message (Optional)</label>
                    <textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="3" 
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-red-600 text-white py-3 rounded-md font-medium hover:bg-red-700 transition text-base sm:text-lg"
                  >
                    Reserve Your Seat Now
                  </button>
                  
                  <p className="text-sm text-gray-500">By submitting this form, you'll get priority access to counseling sessions.</p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Course Section */}
      <section id="courses" className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-8 sm:mb-12">Our Elite Aviation Programs</h2>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* BSc Course */}
            <div className="md:w-1/2 bg-blue-50 rounded-lg p-6 sm:p-8 shadow-md border-t-4 border-blue-700">
              <div className="text-blue-700 text-xl sm:text-2xl font-bold mb-4">B.Sc. (Hons) Aircraft Maintenance</div>
              <div className="flex flex-col sm:flex-row sm:justify-between mb-6 gap-2">
                <span className="text-gray-700">Duration: <span className="font-semibold">3 Years (6 Semesters)</span></span>
                <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-bold w-max">DGCA/CAR 66 Compliant</span>
              </div>
              <p className="text-gray-700 mb-6">This comprehensive program prepares you for a successful career in the aviation industry with hands-on experience and theoretical knowledge in aircraft maintenance.</p>
              
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Total Credits: 148 (Core Courses, Electives, Skill-based Labs)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Industry-recognized qualification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Practical training with modern equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Placement assistance with leading airlines and MROs</span>
                </li>
              </ul>
              
              <div className="bg-white p-4 rounded-md mb-6">
                <p className="font-semibold text-blue-900">Key Subjects Include:</p>
                <p className="text-gray-700">Aircraft Structure, Aerodynamics, Electrical Fundamentals, Electronic Systems, Gas Turbine Engine, Aircraft Maintenance Practices, and more.</p>
              </div>
              
              <a href="#apply-now" className="block text-center bg-blue-700 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition text-base sm:text-lg">Apply for B.Sc. Program</a>
            </div>
            
            {/* Diploma Course */}
            <div className="md:w-1/2 bg-red-50 rounded-lg p-6 sm:p-8 shadow-md border-t-4 border-red-600">
              <div className="text-red-600 text-xl sm:text-2xl font-bold mb-4">Diploma in Aircraft Maintenance</div>
              <div className="flex flex-col sm:flex-row sm:justify-between mb-6 gap-2">
                <span className="text-gray-700">Duration: <span className="font-semibold">1 Year</span></span>
                <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-bold w-max">Fast-Track Program</span>
              </div>
              <p className="text-gray-700 mb-6">A focused program designed to quickly prepare you with essential skills needed for entry-level positions in aircraft maintenance and repair.</p>
              
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Intensive hands-on training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Covers fundamentals of aircraft systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Industry exposure through workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Fast entry into the workforce</span>
                </li>
              </ul>
              
              <div className="bg-white p-4 rounded-md mb-6">
                <p className="font-semibold text-red-600">Perfect For:</p>
                <p className="text-gray-700">Students who want to quickly enter the aviation maintenance field and gain practical skills that are immediately applicable in the industry.</p>
              </div>
              
              <a href="#apply-now" className="block text-center bg-red-600 text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition text-base sm:text-lg">Apply for Diploma Program</a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-4">Why Choose Mewar Flying Club?</h2>
          <p className="text-center text-gray-700 mb-8 sm:mb-12 max-w-3xl mx-auto">Join an elite institution that's setting new standards in aviation education in India</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-red-600 text-3xl sm:text-4xl mb-4">🛩️</div>
              <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-3">Industry-Standard Facilities</h3>
              <p className="text-gray-700">Access to modern aircraft, components, and tools that mirror real-world aviation environments.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-red-600 text-3xl sm:text-4xl mb-4">👨‍🏫</div>
              <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-3">Expert Faculty</h3>
              <p className="text-gray-700">Learn from seasoned aviation professionals with years of industry experience and technical expertise.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-red-600 text-3xl sm:text-4xl mb-4">🔍</div>
              <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-3">DGCA Compliant Curriculum</h3>
              <p className="text-gray-700">Our programs meet the stringent requirements of the Directorate General of Civil Aviation (DGCA).</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-red-600 text-3xl sm:text-4xl mb-4">🌐</div>
              <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-3">Global Recognition</h3>
              <p className="text-gray-700">Our certifications are recognized internationally, opening doors to opportunities worldwide.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-red-600 text-3xl sm:text-4xl mb-4">💼</div>
              <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-3">Placement Support</h3>
              <p className="text-gray-700">Strong industry connections ensure excellent placement opportunities with leading airlines and MROs.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-red-600 text-3xl sm:text-4xl mb-4">🚀</div>
              <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-3">Booming Industry</h3>
              <p className="text-gray-700">Enter a field with consistent growth and high demand for skilled professionals in India and abroad.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Prospects */}
      <section className="py-12 sm:py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Lucrative Career Opportunities</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-800 p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-bold mb-3">Aircraft Maintenance Engineer</h3>
              <p className="text-blue-100 mb-3">Average Salary: ₹6-12 LPA</p>
              <p>Inspect, maintain, and repair aircraft structures, systems, and components.</p>
            </div>
            
            <div className="bg-blue-800 p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-bold mb-3">Avionics Technician</h3>
              <p className="text-blue-100 mb-3">Average Salary: ₹5-10 LPA</p>
              <p>Specialize in electronic systems, navigation, and communication equipment.</p>
            </div>
            
            <div className="bg-blue-800 p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-bold mb-3">MRO Technical Specialist</h3>
              <p className="text-blue-100 mb-3">Average Salary: ₹7-15 LPA</p>
              <p>Work with Maintenance, Repair, and Overhaul organizations servicing multiple airlines.</p>
            </div>
            
            <div className="bg-blue-800 p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-bold mb-3">Quality Control Inspector</h3>
              <p className="text-blue-100 mb-3">Average Salary: ₹8-16 LPA</p>
              <p>Ensure all maintenance and repairs meet regulatory standards and safety requirements.</p>
            </div>
          </div>
          
          <div className="mt-8 sm:mt-12 text-center">
            <p className="text-lg sm:text-xl mb-6">The aviation industry in India is projected to need over 10,000 aircraft maintenance professionals in the next 5 years.</p>
            <a href="#apply-now" className="inline-block bg-red-600 text-white px-6 sm:px-8 py-3 rounded-md font-medium hover:bg-red-700 transition text-base sm:text-lg">Secure Your Future Now</a>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section id="admissions" className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-8 sm:mb-12">Admission Process</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row mb-8 sm:mb-12">
              <div className="md:w-1/3 flex justify-center mb-4 md:mb-0">
                <div className="h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-red-600 text-white flex items-center justify-center text-2xl sm:text-3xl font-bold">1</div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2">Submit Application</h3>
                <p className="text-gray-700">Fill out the application form on this page with your details. Our counselors will contact you within 24 hours.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row mb-8 sm:mb-12">
              <div className="md:w-1/3 flex justify-center mb-4 md:mb-0">
                <div className="h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-red-600 text-white flex items-center justify-center text-2xl sm:text-3xl font-bold">2</div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2">Document Verification</h3>
                <p className="text-gray-700">Submit your 12th marksheet, ID proof, and other required documents for verification.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row mb-8 sm:mb-12">
              <div className="md:w-1/3 flex justify-center mb-4 md:mb-0">
                <div className="h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-red-600 text-white flex items-center justify-center text-2xl sm:text-3xl font-bold">3</div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2">Counseling Session</h3>
                <p className="text-gray-700">Attend a one-on-one counseling session to understand the program details and career paths.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 flex justify-center mb-4 md:mb-0">
                <div className="h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-red-600 text-white flex items-center justify-center text-2xl sm:text-3xl font-bold">4</div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2">Secure Your Seat</h3>
                <p className="text-gray-700">Complete the admission formalities and fee payment to confirm your seat in the program.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 sm:mt-12 bg-yellow-50 p-6 rounded-lg max-w-4xl mx-auto">
            <div className="flex items-start">
              <div className="text-yellow-500 text-xl sm:text-2xl mr-4 flex-shrink-0">⚠️</div>
              <div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Important Note:</h3>
                <p className="text-gray-700">Admissions are on a first-come-first-serve basis with only 60 seats available for the 2025-26 batch. Early applicants will be given preference.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 sm:py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-8 sm:mb-12">Contact Us</h2>
          
          <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
            <div className="md:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-4">Get in Touch</h3>
                
                <div className="mb-4">
                  <p className="font-semibold text-blue-900">Email:</p>
                  <p className="text-gray-700">admissions@mewarflyingclub.com</p>
                </div>
                
                <div className="mb-4">
                  <p className="font-semibold text-blue-900">Phone:</p>
                  <p className="text-gray-700">98XXXXXXXX</p>
                </div>
                
                <div className="mb-4">
                  <p className="font-semibold text-blue-900">Address:</p>
                  <p className="text-gray-700">Mewar University Campus, NH-79, Gangrar, Chittorgarh, Rajasthan - 312901</p>
                </div>
                
                <div>
                  <p className="font-semibold text-blue-900">Social Media:</p>
                  <div className="flex space-x-4 mt-2">
                    <a href="https://instagram.com/mewarflyingclub" target="_blank" className="text-red-600 hover:text-red-700">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                      </svg>
                    </a>
                    <a href="https://facebook.com/mewarflyingclub" target="_blank" className="text-blue-600 hover:text-blue-700">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                      </svg>
                    </a>
                    <a href="https://twitter.com/mewarflyingclub" target="_blank" className="text-blue-400 hover:text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-blue-900">What are the eligibility criteria?</p>
                    <p className="text-gray-700">12th graduate with Physics, Chemistry, and Mathematics (PCM) and interest in aircraft.</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-blue-900">When do classes start?</p>
                    <p className="text-gray-700">Classes for the 2025-26 batch will begin in August 2025.</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-blue-900">Is hostel facility available?</p>
                    <p className="text-gray-700">Yes, separate hostel facilities for boys and girls are available on campus.</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-blue-900">Are there any scholarships available?</p>
                    <p className="text-gray-700">Merit-based scholarships are available for outstanding students. Details will be shared during counseling.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-2 sm:space-y-0 sm:space-x-2 mb-2">
                <img src="/logo.jpg" alt="Mewar Flying Club Logo" className="h-10" />
                <div>
                  <h3 className="font-bold">MEWAR FLYING CLUB</h3>
                </div>
              </div>
              <p className="text-sm text-blue-200">Associated with Mewar University</p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-blue-200 mb-2">© 2025 Mewar Flying Club. All rights reserved.</p>
              <p className="text-sm text-blue-200">Approved by DGCA and AICTE</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App 