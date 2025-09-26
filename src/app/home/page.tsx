import React from 'react'
import { AuroraBackground } from '@/components/ui/shadcn-io/aurora-background'


function Hero() {
  return (
    <AuroraBackground>
      <div className='grid grid-cols-1 items-center justify-center h-screen p-15 text-center'>
        {/* glass div */}
          <div className='item-start'>
            <h1 className="text-8xl font-bold text-black text-center">The next generation of enterprise AI Apps here.</h1>
            <br />
            <p className='text-xl text-gray-800'>Whether you need AI-powered API building blocks or full-service solutions, we deliver enterprise AI your way.</p>
          </div>

          {/* cards 3 */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-8'>
            {/* 1st div like terminal black background */}
            <div className='bg-black text-white p-4 rounded-lg shadow-md h-100'>
              {/* mac trafic light */}
              <div className='flex space-x-2 mb-2'>
                <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                <div className='w-3 h-3 bg-green-500 rounded-full'></div>
              </div>
              <h2 className='text-lg font-semibold'>AI-Powered API</h2>
              <br />
              {/* code */}
            
            </div>
            <div className='bg-black text-white p-4 rounded-lg shadow-md h-100'>
              {/* mac trafic light */}
              <div className='flex space-x-2 mb-2'>
                <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                <div className='w-3 h-3 bg-green-500 rounded-full'></div>
              </div>
              <h2 className='text-lg font-semibold'>Full-Service Solutions</h2>
              {/* python code */}
             
            </div>
            <div className='bg-black text-white p-4 rounded-lg shadow-md h-100'>
              {/* mac trafic light */}
              <div className='flex space-x-2 mb-2'>
                <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                <div className='w-3 h-3 bg-green-500 rounded-full'></div>
              </div>
              <h2 className='text-lg font-semibold'>Custom Integrations</h2>
              {/* c-code */}
            
            </div>
          </div>
          
      </div>
    </AuroraBackground>
  )
}

export default Hero
