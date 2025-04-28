
import ms1_1 from "../public/products/massage_chair_1/massage_chair_1_1.jpg";
import ms1_2 from "../public/products/massage_chair_1/massage_chair_1_2.jpg";
import ms1_3 from "../public/products/massage_chair_1/massage_chair_1_3.jpg";
import ms1_4 from "../public/products/massage_chair_1/massage_chair_1_4.jpg";
import ms1_5 from "../public/products/massage_chair_1/massage_chair_1_5.jpg";

import ms2_1 from "../public/products/massage_chair_2/massage_chair_2_1.jpg";
import ms2_2 from "../public/products/massage_chair_2/massage_chair_2_2.jpg";
import ms2_3 from "../public/products/massage_chair_2/massage_chair_2_3.jpg";
import ms2_4 from "../public/products/massage_chair_2/massage_chair_2_4.jpg";
import ms2_5 from "../public/products/massage_chair_2/massage_chair_2_5.jpg";
import ms2_6 from "../public/products/massage_chair_2/massage_chair_2_6.jpg";

import ms3_1 from "../public/products/massage_chair_3/massage_chair_3_1.jpg";
import ms3_2 from "../public/products/massage_chair_3/massage_chair_3_2.jpg";
import ms3_3 from "../public/products/massage_chair_3/massage_chair_3_3.jpg";
import ms3_4 from "../public/products/massage_chair_3/massage_chair_3_4.jpg";
import ms3_5 from "../public/products/massage_chair_3/massage_chair_3_5.jpg";
import ms3_6 from "../public/products/massage_chair_3/massage_chair_3_6.jpg";


import jz1_1 from "../public/products/Jacuzzi_1/Jacuzzi_1_1.jpg";
import jz1_2 from "../public/products/Jacuzzi_1/Jacuzzi_1_2.jpg";
import jz1_3 from "../public/products/Jacuzzi_1/Jacuzzi_1_3.jpg";
import jz1_4 from "../public/products/Jacuzzi_1/Jacuzzi_1_4.jpg";
import jz1_5 from "../public/products/Jacuzzi_1/Jacuzzi_1_5.jpg";
import jz1_6 from "../public/products/Jacuzzi_1/Jacuzzi_1_6.jpg";
import jz1_7 from "../public/products/Jacuzzi_1/Jacuzzi_1_7.jpg";
import jz2_1 from "../public/products/Jacuzzi_2/Jacuzzi_2_1.jpg";
import jz2_2 from "../public/products/Jacuzzi_2/Jacuzzi_2_2.jpg";
import jz2_3 from "../public/products/Jacuzzi_2/Jacuzzi_2_3.jpg";
import jz2_4 from "../public/products/Jacuzzi_2/Jacuzzi_2_4.jpg";
import jz2_5 from "../public/products/Jacuzzi_2/Jacuzzi_2_5.jpg";
import jz2_6 from "../public/products/Jacuzzi_2/Jacuzzi_2_6.jpg";
import jz2_7 from "../public/products/Jacuzzi_2/Jacuzzi_2_7.jpg";
import jz2_8 from "../public/products/Jacuzzi_2/Jacuzzi_2_8.jpg";

import sauna1_1 from "../public/products/sauna_1/sauna_1_1.jpg";
import sauna1_2 from "../public/products/sauna_1/sauna_1_2.jpg";
import sauna1_3 from "../public/products/sauna_1/sauna_1_3.jpg";
import sauna1_4 from "../public/products/sauna_1/sauna_1_4.jpg";
import sauna1_5 from "../public/products/sauna_1/sauna_1_5.jpg";
import sauna1_6 from "../public/products/sauna_1/sauna_1_6.jpg";
import sauna1_7 from "../public/products/sauna_1/sauna_1_7.jpg";

import sauna2_1 from "../public/products/sauna_2/sauna_2_1.jpg";
import sauna2_2 from "../public/products/sauna_2/sauna_2_2.jpg";
import sauna2_3 from "../public/products/sauna_2/sauna_2_3.jpg";
import sauna2_4 from "../public/products/sauna_2/sauna_2_4.jpg";

import sauna3_1 from "../public/products/sauna_3/sauna_3_1.jpg";
import sauna3_2 from "../public/products/sauna_3/sauna_3_2.jpg";
import sauna3_3 from "../public/products/sauna_3/sauna_3_3.jpg";
import sauna3_4 from "../public/products/sauna_3/sauna_3_4.jpg";
import sauna3_5 from "../public/products/sauna_3/sauna_3_5.jpg";
import sauna3_6 from "../public/products/sauna_3/sauna_3_6.jpg";3
import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Massage chair Zero gravity",
    description:
      "RELX Massage Chair Full Body Massage Chair 【Massage Chair Full Body】12 modes, 5 techniques, 32 airbag points all over the body, 3 levels of airbag pressure, compressing shoulders, arms, feet and buttocks, help relieve body pain. Far infrared heat therapy for the back is best for occasional strains and chronic painful strains.",
    price: "2500",
    originalPrice: "3199",
    images: [ms1_1.src, ms1_2.src, ms1_3.src, ms1_4.src, ms1_5.src],
    rating: 4.8,
    reviews: 101,
    type: "buy",
    colors: ["#A4D549", "#2196F3", "#E91E63", "#9C27B0", "#FF5722"],
    features: [
      "Active Noise Cancellation",
      "Transparency mode",
      "Spatial audio with dynamic head tracking",
      "20 hours of listening time",
      "Comfortable mesh canopy",
    ],
    specifications: {
      "Battery Life": "Up to 20 hours",
      "Bluetooth Version": "5.0",
      "Noise Cancellation": "Active Noise Cancellation (ANC)",
      Weight: "384.8g",
      "Charging Time": "2 hours",
      Warranty: "1 year",
    },
    stock: 5,
  },
  {
    id: 2,
    name: "Greystone Deluxe PureSpa",
    description:
      "Greystone Deluxe PureSpa Bubble Massage Spa Set Outdoor Inflatable Portable Hot Tub, Includes Energy Efficient Spa Cover, Saltwater System Ready, 6 Person, 85in x 28in",
    price: "800",
    originalPrice: "950",
    images: [
      jz1_1.src,
      jz1_2.src,
      jz1_3.src,
      jz1_4.src,
      jz1_5.src,
      jz1_6.src,
      jz1_7.src,
    ],
    rating: 4.8,
    type: "buy",
    reviews: 101,
    colors: ["#A4D549", "#2196F3", "#E91E63", "#9C27B0", "#FF5722"],
    features: [
      "HARD WATER TREATMENT SYSTEM ",
      "HEATED AIR BUBBLE TECHNOLOGY",
      "Spatial audio with dynamic head tracking",
      "ENERGY EFFICIENT SPA COVER ",
      "Comfortable mesh canopy",
    ],
    specifications: {
      Commodation: "Designed to fit up to 6 people",
      Dimensions: "85 x 28 and inner dimensions: 65 x 28;",
      "Noise Cancellation": "Active Noise Cancellation (ANC)",
      "water capacity": "290 gallons",
      "Charging Time": "2 hours",
      "water temperature": "68-104 degrees Fahrenheit",
    },
    stock: 15,
  },
  {
    id: 3,
    name: "Oslo Spa",
    description:
      "Indulgent Hydromassage Experience: Relax and rejuvenate with 120 soothing bubble jets and 8 powerful hydro jets, delivering a luxurious at-home spa experience that melts away stress and tension.",
    price: "3230",
    originalPrice: "4399",
    images: [
      jz2_1.src,
      jz2_2.src,
      jz2_3.src,
      jz2_4.src,
      jz2_5.src,
      jz2_6.src,
      jz2_7.src,
      jz2_8.src,
    ],
    rating: 4.8,
    reviews: 101,
    type: "buy",
    colors: ["#A4D549", "#2196F3", "#E91E63", "#9C27B0", "#FF5722"],
    features: [
      "Efficient Heating System:",
      "Durable & Easy Assembly: ",
      "Smart Technology Integration:",
      "Spacious Design:",
    ],
    specifications: {
      Brand: "M Spa",
      "Bluetooth Version": "5.0",
      "Product Size": "70.9L x 70.9W x 26H",
      Material: "Polyvinyl Chloride (PVC)",
      Voltage: "	120 Volts",
      Warranty: "1 year",
    },
    stock: 5,
  },
  {
    id: 4,
    name: "MassaMAX 4D Massage Chair",
    description:
      "MassaMAX 4D Massage Chair - 2025 Full Body Massage Chair with Zero Gravity, Extended Footrest, SL Track, Yoga Stretch, Foot Rollers, and Heating...",
    price: "2499",
    originalPrice: "3200",
    images: [ms2_1.src, ms2_2.src, ms2_3.src, ms2_4.src, ms2_5.src, ms2_6.src],
    rating: 4.8,
    reviews: 101,
    type: "buy",
    colors: ["#A4D549", "#2196F3", "#E91E63", "#9C27B0", "#FF5722"],
    features: [
      "Advanced 4D Massage Technology",
      "Full Body Relaxation & Stretching ",
      "Exclusive Bonus Accessories ",
      "SL Track & Airbag Massage System ",
      "Zero Gravity & Soothing Heat Therapy – Experience ",
      "Smart Control & Custom Techniques  ",
      "Local Customer Services available  ",
    ],
    specifications: {
      Brand: "MassaMAX",
      "Bluetooth Version": "5.0",
      Dimensions: "64.57D x 29.92W x 47.2H",
      Size: "X-Large",
      Weight: "70 kg",
      Warranty: "1 year",
    },
    stock: 8,
  },
  {
    id: 5,
    name: "Pro A+ Massage Chair",
    description:
      "Pro A+ Massage Chair - 2025 Full Body Massage Chair with Zero Gravity, Extended Footrest, SL Track, Yoga Stretch, Foot Rollers, and Heating...",
    price: "2499",
    originalPrice: "3200",
    images: [ms3_1.src, ms3_2.src, ms3_3.src, ms3_4.src, ms3_5.src, ms3_6.src],
    rating: 4.8,
    reviews: 101,
    type: "buy",
    colors: ["#A4D549", "#2196F3", "#E91E63", "#9C27B0", "#FF5722"],
    features: [
      "Advanced 4D Massage Technology",
      "Full Body Relaxation & Stretching ",
      "Exclusive Bonus Accessories ",
      "SL Track & Airbag Massage System ",
      "Zero Gravity & Soothing Heat Therapy – Experience ",
      "Smart Control & Custom Techniques  ",
      "Local Customer Services available  ",
    ],
    specifications: {
      Brand: "MassaMAX",
      "Bluetooth Version": "5.0",
      Dimensions: "64.57D x 29.92W x 47.2H",
      Size: "X-Large",
      Weight: "70 kg",
      Warranty: "1 year",
    },
    stock: 3,
  },

  {
    id: 6,
    name: "Steam Sauna Box",
    description:
      "Portable Steam Sauna Box for Home, Personal Sauna Tent for Full Body Spa with 4L Steamer Generator,Sauna Room for Indoor,70.8”x31.5”x31.5”.",
    price: "559",
    originalPrice: "700",
    images: [
      sauna1_1.src,
      sauna1_2.src,
      sauna1_3.src,
      sauna1_4.src,
      sauna1_5.src,
      sauna1_6.src,
      sauna1_7.src,
    ],
    rating: 4.8,
    reviews: 101,
    type: "buy",
    colors: ["#A4D549", "#2196F3", "#E91E63", "#9C27B0", "#FF5722"],
    features: [
      "Premium Quality",
      "suitable for adults of different sizes",
      "4L Large Capacity Steam Generator",
      "9 levels temperature adjustment",
      "Thoughtful Design",
      "Portable &Easy to Assemble ",
    ],
    specifications: {
      Acommodation: "1 person",
      Temperature: "91°F-131°F ",
      "Power consumption": "1200W high-power ",
      Weight: "13.8g",
      Dimession: " 2.6’ x 2.6’ x 5.9’",
      Warranty: "1 year",
    },
    stock: 15,
  },
  {
    id: 7,
    name: "Personal Spa Sauna",
    description:
      "Smartmak Full Body Home Steam Sauna Kit, Portable Lightweight Personal Spa Saunas, 2L&900W Steam Generator with Protection & Remote Control, Foldable Chair Included for Relaxation-BlackGrey",
    price: "350",
    originalPrice: "443",
    images: [sauna2_1.src, sauna2_2.src, sauna2_3.src, sauna2_4.src],
    rating: 4.8,
    reviews: 101,
    type: "buy",
    colors: ["#A4D549", "#2196F3", "#E91E63", "#9C27B0", "#FF5722"],
    features: [
      "Premium Quality",
      "suitable for adults of different sizes",
      "4L Large Capacity Steam Generator",
      "9 levels temperature adjustment",
      "Thoughtful Design",
      "Portable &Easy to Assemble ",
    ],
    specifications: {
      Acommodation: "1 person",
      Temperature: "91°F-131°F ",
      "Power consumption": "500W high-power ",
      Weight: "4.8g",
      Dimession: " 2.6’ x 2.6’ x 5.9’",
      Warranty: "1 year",
    },
    stock: 15,
  },
  {
    id: 8,
    name: "Two person Sauna Box",
    description:
      "Portable Steam Sauna Box for Home, Personal Sauna Tent for Full Body Spa with 4L Steamer Generator,Sauna Room for Indoor,70.8”x31.5”x31.5”.",
    price: "998",
    originalPrice: "1300",
    images: [
      sauna3_1.src,
      sauna3_2.src,
      sauna3_3.src,
      sauna3_4.src,
      sauna3_5.src,
      sauna3_6.src,
    ],
    rating: 4.8,
    reviews: 101,
    type: "buy",
    colors: ["#A4D549", "#2196F3", "#E91E63", "#9C27B0", "#FF5722"],
    features: [
      "Premium Quality",
      "suitable for adults of different sizes",
      "4L Large Capacity Steam Generator",
      "9 levels temperature adjustment",
      "Thoughtful Design",
      "Portable &Easy to Assemble ",
    ],
    specifications: {
      Acommodation: "2 person",
      Temperature: "91°F-131°F ",
      "Power consumption": "1200W high-power ",
      Weight: "13.8g",
      Dimession: " 2.6’ x 2.6’ x 5.9’",
      Warranty: "1 year",
    },
    stock: 15,
  },
  {
    id: 9,
    name: "Massage chair Zero gravity",
    description:
      "RELX Massage Chair Full Body Massage Chair 【Massage Chair Full Body】12 modes, 5 techniques, 32 airbag points all over the body, 3 levels of airbag pressure, compressing shoulders, arms, feet and buttocks, help relieve body pain. Far infrared heat therapy for the back is best for occasional strains and chronic painful strains.",
    price: "300",
    originalPrice: "400",
    images: [ms1_1.src, ms1_2.src, ms1_3.src, ms1_4.src, ms1_5.src],
    rating: 4.8,
    reviews: 101,
    type: "rent",
    colors: ["#A4D549", "#2196F3", "#E91E63", "#9C27B0", "#FF5722"],
    features: [
      "Active Noise Cancellation",
      "Transparency mode",
      "Spatial audio with dynamic head tracking",
      "20 hours of listening time",
      "Comfortable mesh canopy",
    ],
    specifications: {
      "Battery Life": "Up to 20 hours",
      "Bluetooth Version": "5.0",
      "Noise Cancellation": "Active Noise Cancellation (ANC)",
      Weight: "384.8g",
      "Charging Time": "2 hours",
      Warranty: "1 year",
    },
    stock: 5,
  },
  {
    id: 10,
    name: "Greystone Deluxe PureSpa",
    description:
      "Greystone Deluxe PureSpa Bubble Massage Spa Set Outdoor Inflatable Portable Hot Tub, Includes Energy Efficient Spa Cover, Saltwater System Ready, 6 Person, 85in x 28in",
    price: "210",
    originalPrice: "300",
    images: [
      jz1_1.src,
      jz1_2.src,
      jz1_3.src,
      jz1_4.src,
      jz1_5.src,
      jz1_6.src,
      jz1_7.src,
    ],
    rating: 4.8,
    type: "rent",
    reviews: 101,
    colors: ["#A4D549", "#2196F3", "#E91E63", "#9C27B0", "#FF5722"],
    features: [
      "HARD WATER TREATMENT SYSTEM ",
      "HEATED AIR BUBBLE TECHNOLOGY",
      "Spatial audio with dynamic head tracking",
      "ENERGY EFFICIENT SPA COVER ",
      "Comfortable mesh canopy",
    ],
    specifications: {
      Commodation: "Designed to fit up to 6 people",
      Dimensions: "85 x 28 and inner dimensions: 65 x 28;",
      "Noise Cancellation": "Active Noise Cancellation (ANC)",
      "water capacity": "290 gallons",
      "Charging Time": "2 hours",
      "water temperature": "68-104 degrees Fahrenheit",
    },
    stock: 15,
  },
  {
    id: 11,
    name: "Oslo Spa",
    description:
      "Indulgent Hydromassage Experience: Relax and rejuvenate with 120 soothing bubble jets and 8 powerful hydro jets, delivering a luxurious at-home spa experience that melts away stress and tension.",
    price: "230",
    originalPrice: "300",
    images: [
      jz2_1.src,
      jz2_2.src,
      jz2_3.src,
      jz2_4.src,
      jz2_5.src,
      jz2_6.src,
      jz2_7.src,
      jz2_8.src,
    ],
    rating: 4.8,
    reviews: 101,
    type: "rent",
    colors: ["#A4D549", "#2196F3", "#E91E63", "#9C27B0", "#FF5722"],
    features: [
      "Efficient Heating System:",
      "Durable & Easy Assembly: ",
      "Smart Technology Integration:",
      "Spacious Design:",
    ],
    specifications: {
      Brand: "M Spa",
      "Bluetooth Version": "5.0",
      "Product Size": "70.9L x 70.9W x 26H",
      Material: "Polyvinyl Chloride (PVC)",
      Voltage: "	120 Volts",
      Warranty: "1 year",
    },
    stock: 5,
  },
  {
    id: 12,
    name: "MassaMAX 4D Massage Chair",
    description:
      "MassaMAX 4D Massage Chair - 2025 Full Body Massage Chair with Zero Gravity, Extended Footrest, SL Track, Yoga Stretch, Foot Rollers, and Heating...",
    price: "312",
    originalPrice: "430",
    images: [ms2_1.src, ms2_2.src, ms2_3.src, ms2_4.src, ms2_5.src, ms2_6.src],
    rating: 4.8,
    reviews: 101,
    type: "rent",
    colors: ["#A4D549", "#2196F3", "#E91E63", "#9C27B0", "#FF5722"],
    features: [
      "Advanced 4D Massage Technology",
      "Full Body Relaxation & Stretching ",
      "Exclusive Bonus Accessories ",
      "SL Track & Airbag Massage System ",
      "Zero Gravity & Soothing Heat Therapy – Experience ",
      "Smart Control & Custom Techniques  ",
      "Local Customer Services available  ",
    ],
    specifications: {
      Brand: "MassaMAX",
      "Bluetooth Version": "5.0",
      Dimensions: "64.57D x 29.92W x 47.2H",
      Size: "X-Large",
      Weight: "70 kg",
      Warranty: "1 year",
    },
    stock: 8,
  },
  {
    id: 13,
    name: "Pro A+ Massage Chair",
    description:
      "Pro A+ Massage Chair - 2025 Full Body Massage Chair with Zero Gravity, Extended Footrest, SL Track, Yoga Stretch, Foot Rollers, and Heating...",
    price: "307",
    originalPrice: "402",
    images: [ms3_1.src, ms3_2.src, ms3_3.src, ms3_4.src, ms3_5.src, ms3_6.src],
    rating: 4.8,
    reviews: 101,
    type: "rent",
    colors: ["#A4D549", "#2196F3", "#E91E63", "#9C27B0", "#FF5722"],
    features: [
      "Advanced 4D Massage Technology",
      "Full Body Relaxation & Stretching ",
      "Exclusive Bonus Accessories ",
      "SL Track & Airbag Massage System ",
      "Zero Gravity & Soothing Heat Therapy – Experience ",
      "Smart Control & Custom Techniques  ",
      "Local Customer Services available  ",
    ],
    specifications: {
      Brand: "MassaMAX",
      "Bluetooth Version": "5.0",
      Dimensions: "64.57D x 29.92W x 47.2H",
      Size: "X-Large",
      Weight: "70 kg",
      Warranty: "1 year",
    },
    stock: 3,
  },

  {
    id: 14,
    name: "Steam Sauna Box",
    description:
      "Portable Steam Sauna Box for Home, Personal Sauna Tent for Full Body Spa with 4L Steamer Generator,Sauna Room for Indoor,70.8”x31.5”x31.5”.",
    price: "120",
    originalPrice: "215",
    images: [
      sauna1_1.src,
      sauna1_2.src,
      sauna1_3.src,
      sauna1_4.src,
      sauna1_5.src,
      sauna1_6.src,
      sauna1_7.src,
    ],
    rating: 4.8,
    reviews: 101,
    type: "rent",
    colors: ["#A4D549", "#2196F3", "#E91E63", "#9C27B0", "#FF5722"],
    features: [
      "Premium Quality",
      "suitable for adults of different sizes",
      "4L Large Capacity Steam Generator",
      "9 levels temperature adjustment",
      "Thoughtful Design",
      "Portable &Easy to Assemble ",
    ],
    specifications: {
      Acommodation: "1 person",
      Temperature: "91°F-131°F ",
      "Power consumption": "1200W high-power ",
      Weight: "13.8g",
      Dimession: " 2.6’ x 2.6’ x 5.9’",
      Warranty: "1 year",
    },
    stock: 15,
  },
  {
    id: 15,
    name: "Personal Spa Sauna",
    description:
      "Smartmak Full Body Home Steam Sauna Kit, Portable Lightweight Personal Spa Saunas, 2L&900W Steam Generator with Protection & Remote Control, Foldable Chair Included for Relaxation-BlackGrey",
    price: "90",
    originalPrice: "130",
    images: [sauna2_1.src, sauna2_2.src, sauna2_3.src, sauna2_4.src],
    rating: 4.8,
    reviews: 101,
    type: "rent",
    colors: ["#A4D549", "#2196F3", "#E91E63", "#9C27B0", "#FF5722"],
    features: [
      "Premium Quality",
      "suitable for adults of different sizes",
      "4L Large Capacity Steam Generator",
      "9 levels temperature adjustment",
      "Thoughtful Design",
      "Portable &Easy to Assemble ",
    ],
    specifications: {
      Acommodation: "1 person",
      Temperature: "91°F-131°F ",
      "Power consumption": "500W high-power ",
      Weight: "4.8g",
      Dimession: " 2.6’ x 2.6’ x 5.9’",
      Warranty: "1 year",
    },
    stock: 15,
  },
  {
    id: 16,
    name: "Two person Sauna Box",
    description:
      "Portable Steam Sauna Box for Home, Personal Sauna Tent for Full Body Spa with 4L Steamer Generator,Sauna Room for Indoor,70.8”x31.5”x31.5”.",
    price: "150",
    originalPrice: "210",
    images: [
      sauna3_1.src,
      sauna3_2.src,
      sauna3_3.src,
      sauna3_4.src,
      sauna3_5.src,
      sauna3_6.src,
    ],
    rating: 4.8,
    reviews: 101,
    type: "rent",
    colors: ["#A4D549", "#2196F3", "#E91E63", "#9C27B0", "#FF5722"],
    features: [
      "Premium Quality",
      "suitable for adults of different sizes",
      "4L Large Capacity Steam Generator",
      "9 levels temperature adjustment",
      "Thoughtful Design",
      "Portable &Easy to Assemble ",
    ],
    specifications: {
      Acommodation: "2 person",
      Temperature: "91°F-131°F ",
      "Power consumption": "1200W high-power ",
      Weight: "13.8g",
      Dimession: " 2.6’ x 2.6’ x 5.9’",
      Warranty: "1 year",
    },
    stock: 15,
  },

  

  // ... other products
];
