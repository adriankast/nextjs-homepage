import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string;
  email?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    // Validate email
    if (!email || !email.includes('@')) {
      return res.status(400).json({ message: 'Invalid email address' });
    }

    // Example implementation: Log to console
    // In a real implementation, you would:
    // 1. Store in a database
    // 2. Send to an email service (Mailchimp, SendGrid, etc.)
    // 3. Add to your mailing list
    console.log(`Newsletter signup: ${email}`);
    console.log(`Timestamp: ${new Date().toISOString()}`);

    // Simulate a delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Example: You can integrate with services like:
    // - Mailchimp API
    // - SendGrid
    // - ConvertKit
    // - Your own database
    
    // For now, we'll just return success
    return res.status(200).json({ 
      message: 'Successfully subscribed to newsletter',
      email 
    });
  } catch (error) {
    console.error('Newsletter signup error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
