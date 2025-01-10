import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function ConfirmationPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <CheckCircle className="w-20 h-20 text-green-500 mb-4" />
      <h1 className="text-2xl font-bold text-center mb-6">Order Confirmed!</h1>
      <p className="text-gray-600 text-center mb-8">
        Thank you for your purchase. Your order has been confirmed.
      </p>
      <button
        onClick={() => navigate('/')}
        className="bg-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-purple-700"
      >
        Back to Homepage
      </button>
    </div>
  );
}