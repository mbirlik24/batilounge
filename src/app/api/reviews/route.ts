import { NextResponse } from 'next/server';

export interface GoogleReview {
  id: string;
  authorName: string;
  profilePhotoUrl?: string;
  rating: number;
  relativeTime: string;
  text: string;
  tag?: string;
  verified: boolean;
}

export interface GooglePhoto {
  url: string;
  width: number;
  height: number;
  attribution?: string;
}

export interface GoogleReviewsData {
  placeName: string;
  formattedAddress: string;
  overallRating: number;
  totalRatingsCount: number;
  reviews: GoogleReview[];
  photos: GooglePhoto[];
  googleMapsUrl: string;
}

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  let placeId = process.env.GOOGLE_PLACE_ID || 'ChIJU3RgEYvhn0ARRzRkoC05-vo';

  const defaultData: GoogleReviewsData = {
    placeName: 'Batı Lounge',
    formattedAddress: 'Alya Evleri, Zekeriyaköy, Tatar Sk. No:3, Sarıyer / İstanbul',
    overallRating: 5.0,
    totalRatingsCount: 5,
    reviews: [
      {
        id: 'g-rev-1',
        authorName: 'Orhan Bayır',
        profilePhotoUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjW8LZKYfsfsmPtw0SpOk0OrtZnEcVNWdif2KilRxGzyU60EKRnz=s128-c0x00000000-cc-rp-mo',
        rating: 5,
        relativeTime: '4 hafta önce',
        text: 'Yeni bir nefes katmış buralara ihtiyaç vardı zaten',
        verified: true,
      },
      {
        id: 'g-rev-2',
        authorName: 'Umut Durmaz',
        profilePhotoUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjXn1o2E8XDDRsRUifvjjpsBYN1LcDzMahOCFprrPd393UVLpyUz=s128-c0x00000000-cc-rp-mo-ba3',
        rating: 5,
        relativeTime: 'geçen hafta içinde',
        text: 'Nargileleri müthiş, ortam ferah ve keyifli. Yeni mekanımız..',
        verified: true,
      },
      {
        id: 'g-rev-3',
        authorName: 'Metin Yurt',
        profilePhotoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocJgG9N0E2WGL2zlbe-f21XqyJnajIalq_c1eMzjhSU-Oqi10Q=s128-c0x00000000-cc-rp-mo',
        rating: 5,
        relativeTime: '2 hafta önce',
        text: 'Nargile içtim çok güzeldi bir nargile gurmesi olarak öneriyorum',
        verified: true,
      },
      {
        id: 'g-rev-4',
        authorName: 'Hasan Dündar',
        profilePhotoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocIvLD36UzpK-wBnPqGASX7OwPPeJSVOszcszbMl2Jprqn2_Iw=s128-c0x00000000-cc-rp-mo',
        rating: 5,
        relativeTime: '2 hafta önce',
        text: 'Yemek yeme fırsatım olmadı ama nargileler çok iyiymiş.',
        verified: true,
      },
      {
        id: 'g-rev-5',
        authorName: 'Semih Beroje',
        profilePhotoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocJovXzIuPuEi-1cbxHjlLwtTUYmCmCRKK_1EYZGj8k25aPZ0w=s128-c0x00000000-cc-rp-mo',
        rating: 5,
        relativeTime: 'bir hafta önce',
        text: 'Servis ve atmosfer harikaydı, Zekeriyaköy\'de kesinlikle tavsiye edeceğim mekan.',
        verified: true,
      },
    ],
    photos: [
      { url: '/images/terrace.jpg', width: 800, height: 600 },
      { url: '/images/vip.jpg', width: 800, height: 600 },
      { url: '/images/steak.jpg', width: 800, height: 600 },
      { url: '/images/dessert.jpg', width: 800, height: 600 },
    ],
    googleMapsUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJU3RgEYvhn0ARRzRkoC05-vo',
  };

  if (!apiKey) {
    return NextResponse.json({
      success: true,
      source: 'fallback',
      data: defaultData,
    });
  }

  try {
    const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews,url,photos,formatted_address&key=${apiKey}&language=tr`;
    const res = await fetch(detailsUrl, { next: { revalidate: 1800 } });

    if (!res.ok) {
      throw new Error(`Google API HTTP error: ${res.status}`);
    }

    const data = await res.json();

    if (data.status !== 'OK' || !data.result) {
      return NextResponse.json({
        success: true,
        source: 'api_fallback_error',
        data: defaultData,
      });
    }

    const result = data.result;

    const fetchedReviews: GoogleReview[] = (result.reviews || [])
      .filter((rev: any) => rev.text && rev.text.trim().length > 0)
      .map((rev: any, index: number) => ({
        id: `google-live-${index}`,
        authorName: rev.author_name || 'Google Kullanıcısı',
        profilePhotoUrl: rev.profile_photo_url || '',
        rating: rev.rating || 5,
        relativeTime: rev.relative_time_description || 'Yakın zamanda',
        text: rev.text,
        verified: true,
      }));

    // Construct live photos using Google Places photo endpoint
    const fetchedPhotos: GooglePhoto[] = (result.photos || []).slice(0, 4).map((p: any) => ({
      url: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${p.photo_reference}&key=${apiKey}`,
      width: p.width || 800,
      height: p.height || 600,
    }));

    return NextResponse.json({
      success: true,
      source: 'google_places_api_live',
      data: {
        placeName: result.name || defaultData.placeName,
        formattedAddress: result.formatted_address || defaultData.formattedAddress,
        overallRating: result.rating || defaultData.overallRating,
        totalRatingsCount: result.user_ratings_total || defaultData.totalRatingsCount,
        reviews: fetchedReviews.length > 0 ? fetchedReviews : defaultData.reviews,
        photos: fetchedPhotos.length > 0 ? fetchedPhotos : defaultData.photos,
        googleMapsUrl: result.url || defaultData.googleMapsUrl,
      },
    });
  } catch (err: any) {
    console.error('Google Places API Fetch Error:', err?.message);
    return NextResponse.json({
      success: true,
      source: 'api_exception_fallback',
      data: defaultData,
    });
  }
}
