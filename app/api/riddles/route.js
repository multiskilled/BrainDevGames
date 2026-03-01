import { NextResponse } from 'next/server';
import { retryFetch } from '@/lib/utils';

const API_BASE_URL = 'https://api.api-ninjas.com/v1';

async function fetchSingleRiddle(apiKey) {
  const response = await retryFetch(
    `${API_BASE_URL}/riddles`,
    {
      headers: {
        'X-Api-Key': apiKey,
      },
      cache: 'no-store',
    }
  );

  if (!response.ok) {
    return [];
  }

  const data = await response.json();
  return Array.isArray(data) ? data : [];
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '3', 10);
    
    // Validate limit (1-10)
    const validatedLimit = Math.min(Math.max(limit, 1), 10);

    // Check for API key
    if (!process.env.API_NINJAS_KEY) {
      console.error('API_NINJAS_KEY is not set in environment variables');
      return NextResponse.json(
        { error: 'API configuration error' },
        { status: 500 }
      );
    }

    const uniqueRiddles = new Map();
    const maxAttempts = Math.max(validatedLimit * 8, 12);

    for (let attempt = 0; attempt < maxAttempts && uniqueRiddles.size < validatedLimit; attempt++) {
      const batch = await fetchSingleRiddle(process.env.API_NINJAS_KEY);
      for (const riddle of batch) {
        const question = typeof riddle?.question === 'string' ? riddle.question.trim() : '';
        const answer = typeof riddle?.answer === 'string' ? riddle.answer.trim() : '';

        if (!question || !answer) {
          continue;
        }

        const dedupeKey = `${question.toLowerCase()}::${answer.toLowerCase()}`;
        if (!uniqueRiddles.has(dedupeKey)) {
          uniqueRiddles.set(dedupeKey, {
            title: riddle?.title || 'Riddle',
            question,
            answer,
          });
        }

        if (uniqueRiddles.size >= validatedLimit) {
          break;
        }
      }
    }

    const riddles = Array.from(uniqueRiddles.values());

    if (riddles.length === 0) {
      return NextResponse.json(
        { error: 'Failed to fetch riddles from external service' },
        { status: 502 }
      );
    }

    return NextResponse.json(riddles.slice(0, validatedLimit));

  } catch (error) {
    console.error('Riddles API error:', error);
    return NextResponse.json(
      { error: 'Service temporarily unavailable. Please try again later.' },
      { status: 502 }
    );
  }
}
