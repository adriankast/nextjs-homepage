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
      // Example implementation: You can replace this with your actual email service
      // For now, we'll simulate an API call
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Thanks for subscribing!');
        setEmail('');
        if (onSuccess) {
          onSuccess();
        }
      } else {
        setStatus('error');
        setMessage('Something went wrong. Please try again.');
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
