"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal Container - Centered */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden pointer-events-auto relative flex flex-col max-h-[85vh]"
            >
              <div className="relative p-8 md:p-10 border-b border-gray-100 flex-shrink-0 bg-white z-10">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-bimini-primary"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>

                <h2 className="text-3xl font-light text-bimini-primary">
                  Our Privacy Policy
                </h2>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto p-8 md:p-10 space-y-8 text-bimini-secondary leading-relaxed text-sm md:text-base">
                <p>
                  This Privacy Policy describes how your personal information is collected, used and shared when you visit our site (the "Site").
                </p>

                <section>
                  <h3 className="text-lg font-semibold text-bimini-primary mb-3">Personal Information We Collect</h3>
                  <p className="mb-4">
                    When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, which websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as "Device Information".
                  </p>
                  <p className="mb-2">We collect Device Information using the following technologies:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <span className="font-semibold">"Cookies"</span> are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit <a href="http://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-bimini-primary underline hover:text-bimini-secondary">http://www.allaboutcookies.org</a>.
                    </li>
                    <li>
                      <span className="font-semibold">"Log files"</span> track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages and date/time stamps.
                    </li>
                    <li>
                      <span className="font-semibold">"Web beacons," "tags" and "pixels"</span> are electronic files used to record information about how you browse the Site.
                    </li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-bimini-primary mb-3">How Do We Use Your Personal Information?</h3>
                  <p className="mb-4">
                    When in line with the preferences you have shared with us, we provide you with information or advertising related to our products or services.
                  </p>
                  <p>
                    We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-bimini-primary mb-3">Sharing Your Personal Information</h3>
                  <p className="mb-4">
                    We share your Personal Information with third parties to help us use your Personal Information as described above. We use Google Analytics to help us understand how our customers use the Site — you can read more about how Google uses your Personal Information here: <a href="https://www.google.com/intl/en/policies/privacy/" target="_blank" rel="noopener noreferrer" className="text-bimini-primary underline hover:text-bimini-secondary">https://www.google.com/intl/en/policies/privacy/</a>. You can also opt out of Google Analytics here: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-bimini-primary underline hover:text-bimini-secondary">https://tools.google.com/dlpage/gaoptout</a>.
                  </p>
                  <p>
                    Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-bimini-primary mb-3">Do Not Track</h3>
                  <p>
                    Please note that we do not alter our Site's data collection and use practices when we see a Do Not Track signal from your browser.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-bimini-primary mb-3">Your Rights</h3>
                  <p className="mb-4">
                    If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated or deleted. If you would like to exercise this right, please contact us through the contact information below.
                  </p>
                  <p>
                    Additionally, if you are a European resident we note that we are processing your information to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to the United States.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-bimini-primary mb-3">Data Retention</h3>
                  <p>
                    When you give us your personal information on the Site, we will maintain your Personal Information for our records unless and until you ask us to delete this information. Data that has been removed will be in archives for up to 30 days and then removed automatically.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-bimini-primary mb-3">Minors</h3>
                  <p>
                    The Site is not intended for individuals under the age of 16. If you are under the age of 16, you must ask your parent or guardian before you email the Site, request that we send any information to you or purchase any resources at the Site.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-bimini-primary mb-3">Changes</h3>
                  <p>
                    We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-bimini-primary mb-3">Unsubscribe from Our Mailings and Emails</h3>
                  <p>
                    If you desire to unsubscribe from our mailings or emails, simply click unsubscribe at the bottom of any email or feel free to contact us using the contact information below.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-bimini-primary mb-3">Contact Us</h3>
                  <p>
                    For more information about our privacy practices, if you have questions or if you would like to make a complaint, please contact us using one of the methods provided on our contact page.
                  </p>
                </section>
              </div>
              
              {/* Gold accent line at bottom */}
              <div className="h-2 w-full bg-gradient-to-r from-bimini-gold to-bimini-peach flex-shrink-0" />
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}


