import { ShoppingBag, Car, Gift, Armchair, Waves, Flame } from 'lucide-react';
import { Slide } from '@/types/hero';

export const slides: Slide[] = [
  
    {
        watchImage: "/cover/massage_chair_1_1-removebg-preview.png",
        text: "Elevate Your Comfort with a Full-Body Massage Chair",
        subText: "Experience luxurious relaxation anytime, anywhere.",
        bgColor: "from-blue-900 to-blue-700",
        icon: <Armchair className="w-6 h-6" />, // Relaxing seat icon
    },
    {
        watchImage: "/cover/Jacuzzi_1_1-removebg-preview.png",
        text: "Indulge in Spa Perfection with Our Premium Portable Jacuzzi",
        subText: "Transform every day into a rejuvenating escape.",
        bgColor: "from-blue-800 to-blue-600",
        icon: <Waves className="w-6 h-6" />, // Water waves for jacuzzi
    },
    {
        watchImage: "/cover/sauna_1_1-removebg-preview.png",
        text: "Revitalize Your Body with a Private Home Sauna",
        subText: "Immerse yourself in wellness and pure tranquility.",
        bgColor: "from-blue-900 to-blue-700",
        icon: <Flame className="w-6 h-6" />, // Heat/fire for sauna
    },
    {
        watchImage: "/images/watches.png",
        text: "Find Best Product to Shoop Online",
        subText: "Experience the future on your wrist with our premium collection",
        bgColor: "from-blue-900 to-blue-700",
        icon: <ShoppingBag className="w-6 h-6" />,
    },
    {
        watchImage: "/images/car.jpg",
        text: "Buy & Rent Best Cars at Affordable Prices",
        subText: "Drive your dreams with our Auto  service and  spares delivery",
        bgColor: "from-blue-800 to-blue-600",
        icon: <Car className="w-6 h-6" />,

    },
    {
        watchImage: "/images/gifts.jpg",
        text: "Perfect Gifts for Your Loved Ones",
        subText: "Make every moment special with thoughtful presents",
        bgColor: "from-red-900 to-red-700",
        icon: <Gift className="w-6 h-6" />,
    },
];