import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const photoReference = searchParams.get('ref');
  const maxWidth = searchParams.get('maxwidth') || '800';
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!photoReference || !apiKey) {
    return new NextResponse('Bad Request or Missing API Key', { status: 400 });
  }

  try {
    const googleUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${encodeURIComponent(
      maxWidth
    )}&photo_reference=${encodeURIComponent(photoReference)}&key=${apiKey}`;

    const res = await fetch(googleUrl, {
      next: { revalidate: 86400 }, // Cache 24 hours
    });

    if (!res.ok) {
      return new NextResponse('Failed to fetch image', { status: res.status });
    }

    const contentType = res.headers.get('content-type') || 'image/jpeg';
    const buffer = await res.arrayBuffer();

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400, stale-while-revalidate=43200',
      },
    });
  } catch (error) {
    console.error('Places photo proxy error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
