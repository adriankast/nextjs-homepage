import { useEffect, useState } from 'react';
import NewsletterForm from './newsletter-form';

export default function NewsletterModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem('newsletter-popup-seen');
    
    if (!hasSeenPopup) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
        setShouldShow(true);
      }, 2000); // Show after 2 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('newsletter-popup-seen', 'true');
  };

  const handleSuccess = () => {
    setTimeout(() => {
      handleClose();
    }, 2000); // Close after 2 seconds on success
  };

  if (!shouldShow) {
    return null;
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          isVisible ? 'opacity-50' : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-md p-6 max-w-md w-full mx-4 z-50 transition-all duration-300 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl leading-none"
          aria-label="Close"
        >
          ×
        </button>

        {/* Content */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Stay Updated! 📧</h2>
          <p className="text-gray-600">
            Subscribe to my newsletter and get the latest insights on programming,
            indie-hacking, and sports delivered to your inbox.
          </p>
        </div>

        <NewsletterForm onSuccess={handleSuccess} />

        <button
          onClick={handleClose}
          className="mt-4 text-sm text-gray-500 hover:text-gray-700 underline"
        >
          No thanks, maybe later
        </button>
      </div>
    </>
  );
}
