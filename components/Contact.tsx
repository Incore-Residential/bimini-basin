"use client";

export function Contact() {
  return (
    <section id="contact" className="bg-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row gap-16 border border-gray-100 shadow-sm">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-light text-bimini-primary mb-6">
              Start Your <span className="font-serif italic text-bimini-secondary">New Chapter</span>
            </h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Ready to experience Bimini Square? Schedule a private tour or contact our leasing team to learn more about our exclusive Lee Health employee offers.
            </p>
            
            <div className="space-y-8">
              <div className="border-l-2 border-bimini-gold pl-6">
                <h4 className="text-sm font-bold text-bimini-primary uppercase tracking-widest mb-2">Visit Us</h4>
                <p className="text-gray-600 font-light">440 Cape Coral Parkway East<br />Cape Coral, FL 33904</p>
              </div>
              <div className="border-l-2 border-bimini-peach pl-6">
                <h4 className="text-sm font-bold text-bimini-primary uppercase tracking-widest mb-2">Call Us</h4>
                <p className="text-gray-600 font-light">(239) 342-4313</p>
              </div>
              <div className="border-l-2 border-bimini-secondary pl-6">
                <h4 className="text-sm font-bold text-bimini-primary uppercase tracking-widest mb-2">Leasing Office Hours</h4>
                <p className="text-gray-600 font-light">Weekdays: 9:00 AM - 6:00 PM<br />Saturday: By Appointment Only<br />Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-bimini-primary focus:border-transparent transition-all outline-none" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-bimini-primary focus:border-transparent transition-all outline-none" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-bimini-primary focus:border-transparent transition-all outline-none" />
              </div>
              <div className="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex items-center h-5">
                  <input id="leeHealth" type="checkbox" className="h-5 w-5 text-bimini-primary focus:ring-bimini-primary border-gray-300 rounded cursor-pointer" />
                </div>
                <label htmlFor="leeHealth" className="ml-3 block text-sm text-gray-600 cursor-pointer select-none">
                  <span className="font-medium text-bimini-primary">Lee Health Employee?</span>
                  <span className="block text-xs mt-0.5">I am interested in exclusive leasing offers.</span>
                </label>
              </div>
              <button type="submit" className="w-full py-4 bg-bimini-primary text-white rounded-lg font-medium hover:bg-bimini-secondary transition-all shadow-lg hover:shadow-xl">
                Request Information
              </button>
            </form>
          </div>
        </div>

        <div className="mt-24 border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="mb-4 md:mb-0">
            &copy; 2025 Bimini Square. All Rights Reserved.
          </div>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-bimini-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-bimini-primary transition-colors">Pet Policy</a>
          </div>
        </div>
      </div>
    </section>
  );
}
