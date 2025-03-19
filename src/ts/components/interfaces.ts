export interface LogInData {
  email: string;
  password: string;
}

export interface RegisterData extends LogInData {
  first_name: string;
  last_name: string;
  role_type: string;
}

export interface RefreshTokenData {
  refreshToken: string;
}

export interface ResetPasswordData {
  email: string;
}

export interface SetNewPasswordData {
  resetToken: string;
  newPassword: string;
}

export interface OrderData {
  order: [
    {
      product_id: number;
      quantity: number;
    },
  ];
  user_id: string;
}

export interface ProfileUpdateData {
  email: string;
  first_name: string;
  last_name: string;
  address_one: string;
  address_two: string;
  city: string;
  phone: string;
  postal_code: string;
  state_province: string;
}

export interface CardInfoData {
  card_number: string;
  card_cvv: string;
  card_date: string;
}

export interface PasswordData {
  old_password: string;
  new_password: string;
}

export interface UserNotFoundInfo {
  message: string;
  error: string;
}

export interface UserInfo {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
}

export interface OrdersData {
  orders: [
    {
      date_created: string,
      order_number: string,
      items: [
        {
          product: {
            additionalProp1: {}
          },
          quantity: number,
          is_discount: boolean,
          total_sum: number
        }
      ]
    }
  ]
}

export interface RecommendationData {
  id: number;
  name: string;
  price: string;
  img: string;
  discount: number;
  type: string;
  description: string;
}

export interface ProdResponse {
  data: RecommendationData[];
  meta: {
    totalItems: number;
    totalPages: number;
  };
  errors?: { message: string }[];
}

export interface Product {
  id: number;
  name: string;
  description: string;
  directions: string;
  disabled_subscribe: boolean;
  discount: number;
  img: string;
  indications: string;
  ingradients: string;
  legal_disclaimer: string;
  price: string;
  satefy_information: string;
  type: string;
  weight_mg: number;
  capsules: number;
}

export interface ProductLocalStorge {
  id: number;
  autoshipChecked: boolean;
  autoshipDays: string;
  counts: number;
}