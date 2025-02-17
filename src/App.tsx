import React, { useState } from 'react';
import { Bitcoin, Wallet2, Car, ExternalLink, Copy, Heart, Check, X, Wrench, Calendar, Target, Instagram, Globe, ShoppingBag, MessageCircle } from 'lucide-react';

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const wallets = {
    bitcoinTaproot: "bc1pxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
    bitcoinSegwit: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
    ethereum: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    polygon: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    solana: "7V4PagGqk8mGQ6fxX3L6VYmCWPwF5GxpreM5RqZGq3t2",
    base: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F"
  };

  const copyToClipboard = (text: string, name: string) => {
    navigator.clipboard.writeText(text);
    setAlertMessage(`${name} wallet address copied to clipboard`);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const Alert = ({ message }: { message: string }) => (
    <div className={`fixed top-4 right-4 transform transition-all duration-500 ${showAlert ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 py-4 rounded-lg shadow-2xl border border-gray-700 backdrop-blur-lg flex items-center">
        <Check className="w-5 h-5 text-green-400 mr-3" />
        <span className="mr-4">{message}</span>
        <button 
          onClick={() => setShowAlert(false)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  const WalletDisplay = ({ name, address, icon }: { name: string; address: string; icon: React.ReactNode }) => (
    <div className="mb-8 p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-2">{name}</h3>
      </div>
      <div className="flex items-center justify-between bg-gray-800 p-4 rounded">
        <code className="text-sm break-all">{address}</code>
        <button 
          onClick={() => copyToClipboard(address, name)}
          className="ml-4 p-2 hover:bg-gray-700 rounded-full transition-colors"
          aria-label={`Copy ${name} address`}
        >
          <Copy className="w-5 h-5" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Alert message={alertMessage} />
      
      <div className="relative h-[60vh] flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1637581827234-ac51e3f7c067?auto=format&fit=crop&w=1920&q=80" 
          alt="Porsche 964"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Help Me Achieve My Dream</h1>
          <p className="text-xl text-gray-300">Support my journey to own a Porsche 964 by 2025</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center mb-6">
            <Car className="w-12 h-12 mr-4" />
            <h2 className="text-3xl font-bold">The Dream: Porsche 964</h2>
          </div>
          <p className="text-gray-300 mb-6">
            I'm on a mission to acquire my dream car - a classic Porsche 964. 
            With your support, I aim to raise $100,000 by the end of 2025.
          </p>
          <div className="bg-gray-700 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">Goal Progress</h3>
            <div className="w-full bg-gray-600 rounded-full h-4 mb-4">
              <div className="bg-blue-500 h-4 rounded-full" style={{ width: '0%' }}></div>
            </div>
            <p className="text-xl">$0 / $100,000</p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-8">
          <div className="flex items-center justify-center mb-8">
            <Wallet2 className="w-8 h-8 mr-3" />
            <h2 className="text-2xl font-bold">Support the Dream</h2>
          </div>

          <WalletDisplay 
            name="Bitcoin (Taproot)" 
            address={wallets.bitcoinTaproot}
            icon={<Bitcoin className="w-6 h-6" />}
          />

          <WalletDisplay 
            name="Bitcoin (Native SegWit)" 
            address={wallets.bitcoinSegwit}
            icon={<Bitcoin className="w-6 h-6" />}
          />

          <WalletDisplay 
            name="Ethereum" 
            address={wallets.ethereum}
            icon={<ExternalLink className="w-6 h-6" />}
          />

          <WalletDisplay 
            name="Polygon" 
            address={wallets.polygon}
            icon={<ExternalLink className="w-6 h-6" />}
          />

          <WalletDisplay 
            name="Solana" 
            address={wallets.solana}
            icon={<ExternalLink className="w-6 h-6" />}
          />

          <WalletDisplay 
            name="Base" 
            address={wallets.base}
            icon={<ExternalLink className="w-6 h-6" />}
          />
        </div>

        <div className="mt-16 bg-gray-800 rounded-lg p-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <MessageCircle className="w-12 h-12 mr-4 text-blue-400" />
              <h2 className="text-3xl font-bold">Share Your Story</h2>
            </div>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              I'd love to hear about your own car enthusiasm journey and what classic Porsches mean to you. 
              Your stories inspire and motivate me on this path.
            </p>
            <a 
              href="https://instagram.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
            >
              <Instagram className="w-5 h-5 mr-2" />
              DM Me on Instagram
            </a>
          </div>
        </div>

        <div className="mt-16 bg-gray-800 rounded-lg p-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-6">
              <Globe className="w-12 h-12 mr-4 text-blue-400" />
              <h2 className="text-3xl font-bold">Follow the Journey</h2>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Stay connected with my Porsche journey through my blog and support the dream by checking out my merchandise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a 
              href="/blog" 
              className="group bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-all"
            >
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold">Blog</h3>
              </div>
              <p className="text-gray-300">
                Read about my journey, classic car insights, and restoration updates.
              </p>
              <span className="inline-flex items-center mt-4 text-blue-400 group-hover:text-blue-300">
                Visit Blog
                <ExternalLink className="w-4 h-4 ml-2" />
              </span>
            </a>

            <a 
              href="/shop" 
              className="group bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-all"
            >
              <div className="flex items-center mb-4">
                <ShoppingBag className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold">Merch Shop</h3>
              </div>
              <p className="text-gray-300">
                Support the dream with exclusive Porsche-inspired merchandise.
              </p>
              <span className="inline-flex items-center mt-4 text-blue-400 group-hover:text-blue-300">
                Visit Shop
                <ExternalLink className="w-4 h-4 ml-2" />
              </span>
            </a>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Heart className="w-12 h-12 mx-auto mb-4 text-red-500" />
          <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
          <p className="text-gray-300">
            Every contribution brings me closer to my dream. 
            Your support means the world to me.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">About My Journey</h2>
          <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Wrench className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold">The Passion</h3>
              </div>
              <p className="text-gray-300">
                As a young car enthusiast, I've been captivated by classic Porsches since I first laid eyes on one. 
                The 964 generation, produced from 1989 to 1994, represents everything I love about automotive engineering: 
                timeless design, mechanical purity, and driving excellence.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Target className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold">Why the 964?</h3>
              </div>
              <p className="text-gray-300">
                The 964 represents the perfect balance between classic 911 character and modern usability. 
                Its air-cooled flat-six engine, improved aerodynamics, and refined suspension make it 
                one of the most sought-after classic Porsches. It's not just a car; it's a piece of 
                automotive history that I dream of preserving and enjoying.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Calendar className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold">The Goal</h3>
              </div>
              <p className="text-gray-300">
                By 2025, I aim to acquire and restore a 964. This isn't just about owning a car; 
                it's about becoming a custodian of automotive heritage. Your support will help me 
                preserve one of these magnificent machines for future generations to appreciate.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center py-8 text-gray-400">
        <p>© {new Date().getFullYear()} fund_my_porsche964</p>
      </footer>
    </div>
  );
}

export default App;