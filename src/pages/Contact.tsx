
import React from "react";
import Layout from "@/components/Layout";

const Contact: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-12">Contact Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-2">Don't hesitate</h2>
            <h2 className="text-4xl font-bold mb-8">to reach out</h2>
            <p className="text-gray-600 mb-4">
              Fill in the form to connect with me.
            </p>
            <p className="text-gray-600 mb-8">
              I'll get back ASAP, I swear.
            </p>
            
            <div className="space-y-4 mt-12">
              <div className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>ngantruong29@gmail.com</span>
              </div>
              
              <div className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+84 834741359</span>
              </div>
              
              <div className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span>truongngan</span>
              </div>
              
              <div className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>@keatokid</span>
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-6">
              <div>
                <input type="text" placeholder="Your Name" className="contact-input" />
              </div>
              <div>
                <input type="email" placeholder="Email" className="contact-input" />
              </div>
              <div>
                <input type="text" placeholder="Phone" className="contact-input" />
              </div>
              <div>
                <textarea placeholder="Message" rows={5} className="contact-input"></textarea>
              </div>
              <button type="submit" className="contact-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
