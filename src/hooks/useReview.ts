import { getReviews } from '../services/api';
import { useFetch } from './useFetch';

interface Customer {
    id: string;
    username: string;
    email: string;
}

interface Review {
    id: string;
    customerId: Customer;
    productId: string;
    rating: number;
    comment: string;
    createdAt: string;
}

const useReview = () => useFetch<Review[]>(getReviews);

export default useReview;
