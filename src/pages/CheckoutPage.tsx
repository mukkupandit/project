import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { useCart } from '../context/CartContext';

export default function CheckoutPage() {
  const { items, clearCart } = useCart();
  const navigate = useNavigate();
  const [utrNumber, setUtrNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Payment data for QR code
  const paymentData = {
    amount: total,
    orderId: Math.random().toString(36).substring(7),
    timestamp: new Date().toISOString()
  };

  const handlePayment = async () => {
    if (!utrNumber.trim()) return;
    
    setIsLoading(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    clearCart();
    navigate('/confirmation');
  };

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
        {items.map(item => (
          <div key={item.id} className="flex justify-between mb-2">
            <span>{item.name} x {item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div className="border-t mt-4 pt-4">
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <h2 className="text-lg font-semibold mb-4">Payment QR Code</h2>
        <div className="flex justify-center mb-4">
          <QRCodeSVG
            value={JSON.stringify(paymentData)}
            size={256}
            level="H"
            includeMargin
            className="border p-2 rounded"
          />
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Enter UTR Number
            </label>
            <input
              type="text"
              value={utrNumber}
              onChange={(e) => setUtrNumber(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter UTR number"
              disabled={isLoading}
            />
          </div>
          <button
            onClick={handlePayment}
            disabled={!utrNumber.trim() || isLoading}
            className={`w-full py-3 rounded-lg font-medium flex items-center justify-center ${
              utrNumber.trim() && !isLoading
                ? 'bg-purple-600 text-white hover:bg-purple-700' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              'Confirm Payment'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}