export interface CartItem {
  id: number;
  name: string;
  price: string;
  quantity: number;
  image: string[];
}

export interface PaymentFormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  paymentMethod: "mobile" | "card" | "paypal";
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
  mobileNumber?: string;
}
