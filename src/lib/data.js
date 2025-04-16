export const features = [
    {
        id: 1,
        image: "/image/findGallery (3).png",
        title: "Discover LA's Dining Scene",
        description:
            "Explore the most popular, trending, and hidden gem restaurants across Los Angeles. Whether you're after casual bites or upscale dining, we've got it covered.",
    },
    {
        id: 2,
        image: "/image/findGallery (2).png",
        title: "Find Spots by Vibe & Cuisine",
        description:
            "Search smarter with filters like mood, ambiance, and cuisine. From rooftop vibes to cozy corners, find places that fit your energy and cravings.",
    },
    {
        id: 3,
        image: "/image/findGallery (1).png",
        title: "Real-Time Trends & Hot Picks",
        description:
            "Stay in the loop with what's buzzing. Our Trend Score™ and curated lists keep you updated with new openings, viral hotspots, and crowd favorites.",
    },
]


export const restaurantData = [
    {
        id: 1,
        name: "The Velvet Fork",
        image: "/image/nearby (4).png",
        rating: 4.8,
        reviews: 248,
        tags: ["Trending", "Rooftop", "Romantic"],
        location: "West Hollywood, Los Angeles",
        coordinates: {
            lat: 34.0900,
            lng: -118.3617
        },
        neighborhood: "West Hollywood, Los Angeles",
        hours: "09:00 AM - 10:00 PM (Mon-Fri)",
        priceRange: "$35",
        trendScore: 91,
        bookedThisWeek: "34x",
        contactInfo: {
            address: "4517 Washington Ave, Manchester, Kentucky 39495",
            phone: "(307) 555-0133",
            email: "velvet.fork@example.com",
            website: "http://www.thevelvetfork.com",
        },
        description:
            "Luxe Bistro is a chic Italian-fusion restaurant located in the heart of Downtown Los Angeles. Known for its skyline views, curated cocktails, and vibrant ambiance, it's a go-to spot for golden hour gatherings, intimate dinners, and weekend vibes.",
        extendedDescription:
            "Whether you're savoring flame-charred octopus tacos or sipping mezcal under the stars, Luxe Bistro delivers a distinctly LA dining experience — bold, flavorful, and unforgettable. The restaurant's seasonal menu changes quarterly, ensuring the freshest ingredients and innovative dishes year-round.",
        mapLocation: "/image/map-location.png",
    },
    {
        id: 2,
        name: "Paloma Kitchen",
        image: "/image/nearby (3).png",
        rating: 4.8,
        reviews: 248,
        tags: ["Rooftop", "Italian"],
        location: "Beverly Crest, Los Angeles",
        neighborhood: "Beverly Crest, Los Angeles",
        hours: "09:00 AM - 11:00 PM",
        priceRange: "$$$",
        trendScore: 87,
        bookedThisWeek: "28x",
        contactInfo: {
            address: "8721 Sunset Blvd, Beverly Hills, CA 90210",
            phone: "(213) 555-8899",
            email: "info@palomakitchen.com",
            website: "http://www.palomakitchen.com",
        },
        description:
            "Paloma Kitchen offers authentic Italian cuisine with a modern twist, set in a charming rooftop environment with panoramic views of Los Angeles.",
        extendedDescription:
            "Chef Maria Rossi brings her family recipes from Tuscany, creating a menu that celebrates traditional flavors with contemporary presentation. The restaurant's wine list features exclusive Italian imports and local California selections.",
        mapLocation: "/image/map-location.png",
    },
    {
        id: 3,
        name: "Paloma Kitchen",
        image: "/image/nearby (2).png",
        rating: 4.8,
        reviews: 248,
        tags: ["Rooftop", "Italian"],
        location: "Beverly Crest, Los Angeles",
        hours: "09:00 AM - 11 PM",
    },
    {
        id: 4,
        name: "Paloma Kitchen",
        image: "/image/nearby (1).png",
        rating: 4.8,
        reviews: 248,
        tags: ["Rooftop", "Italian"],
        location: "Beverly Crest, Los Angeles",
        hours: "09:00 AM - 11 PM",
    },
    {
        id: 5,
        name: "Paloma Kitchen",
        image: "/image/nearby (4).png",
        rating: 4.8,
        reviews: 248,
        tags: ["Rooftop", "Italian"],
        location: "Beverly Crest, Los Angeles",
        hours: "09:00 AM - 11 PM",
    },
    {
        id: 6,
        name: "Paloma Kitchen",
        image: "/image/nearby (2).png",
        rating: 4.8,
        reviews: 248,
        tags: ["Rooftop", "Italian"],
        location: "Beverly Crest, Los Angeles",
        hours: "09:00 AM - 11 PM",
    },
    {
        id: 7,
        name: "Paloma Kitchen",
        image: "/image/nearby (3).png",
        rating: 4.8,
        reviews: 248,
        tags: ["Rooftop", "Italian"],
        location: "Beverly Crest, Los Angeles",
        hours: "09:00 AM - 11 PM",
    },
    {
        id: 8,
        name: "Paloma Kitchen",
        image: "/image/nearby (2).png",
        rating: 4.8,
        reviews: 248,
        tags: ["Rooftop", "Italian"],
        location: "Beverly Crest, Los Angeles",
        hours: "09:00 AM - 11 PM",
    },
    {
        id: 9,
        name: "Paloma Kitchen",
        image: "/image/nearby (1).png",
        rating: 4.8,
        reviews: 248,
        tags: ["Rooftop", "Italian"],
        location: "Beverly Crest, Los Angeles",
        hours: "09:00 AM - 11 PM",
    },
    {
        id: 10,
        name: "Paloma Kitchen",
        image: "/image/nearby (4).png",
        rating: 4.8,
        reviews: 248,
        tags: ["Rooftop", "Italian"],
        location: "Beverly Crest, Los Angeles",
        hours: "09:00 AM - 11 PM",
    },
]


// Filter categories
export const neighborhoods = [
    { id: "downtown", label: "Downtown LA (DTLA)" },
    { id: "west-hollywood", label: "West Hollywood", checked: false },
    { id: "santa-monica", label: "Santa Monica", checked: false },
    { id: "venice", label: "Venice", checked: false },
    { id: "silver-lake", label: "Silver Lake", checked: false },
    { id: "hollywood", label: "Hollywood", checked: false },
    { id: "beverly-hills", label: "Beverly Hills", checked: false },
    { id: "koreatown", label: "Koreatown (K-Town)", checked: false },
    { id: "echo-park", label: "Echo Park", checked: false },
    { id: "culver-city", label: "Culver City", checked: false },
    { id: "los-feliz", label: "Los Feliz", checked: false },
    { id: "brentwood", label: "Brentwood", checked: false },
    { id: "malibu", label: "Malibu", checked: false },
    { id: "highland-park", label: "Highland Park", checked: false },
    { id: "pasadena", label: "Pasadena", checked: false },
]

export const cuisines = [
    { id: "italian", label: "Italian", checked: false },
    { id: "japanese", label: "Japanese", checked: false },
    { id: "mexican", label: "Mexican", checked: false },
    { id: "chinese", label: "Chinese", checked: false },
    { id: "indian", label: "Indian", checked: false },
    { id: "french", label: "French", checked: false },
    { id: "thai", label: "Thai", checked: false },
    { id: "mediterranean", label: "Mediterranean", checked: false },
    { id: "korean", label: "Korean", checked: false },
    { id: "vegetarian", label: "Vegetarian", checked: false },
]

export const vibes = [
    { id: "romantic", label: "Romantic", checked: false },
    { id: "trendy", label: "Trendy", checked: false },
    { id: "family-friendly", label: "Family Friendly", checked: false },
    { id: "outdoor-seating", label: "Outdoor Seating", checked: false },
    { id: "casual", label: "Casual", checked: false },
    { id: "luxury", label: "Luxury / Fine Dining", checked: false },
    { id: "late-night", label: "Late-Night", checked: false },
    { id: "live-music", label: "Live Music", checked: false },
    { id: "pet-friendly", label: "Pet-Friendly", checked: false },
    { id: "group-friendly", label: "Group-Friendly", checked: false },
]