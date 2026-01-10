import { useState } from 'react';

interface NewsletterFormProps {
  onSuccess?: () => void;
  className?: string;
}

export default function NewsletterForm({ onSuccess, className = '' }: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Example implementation using a form submission service
      // This works with static sites. You can integrate with:
      // 1. Formspree (https://formspree.io)
      // 2. Netlify Forms
      // 3. Basin (https://usebasin.com)
      // 4. Mailchimp API directly
      // 5. Any other email service API
      
      // For this example, we'll simulate success after a delay
      // Replace this with your actual service integration
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Log to console for demonstration
      console.log('Newsletter signup:', email);
      
      setStatus('success');
      setMessage('Thanks for subscribing!');
      setEmail('');
      
      if (onSuccess) {
        onSuccess();
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={status === 'loading'}
            className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent-7 disabled:bg-gray-100"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-2 bg-accent-7 text-white font-bold rounded hover:bg-gray-700 disabled:bg-gray-400 transition-colors"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
        {message && (
          <p
            className={`text-sm ${
              status === 'success' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
