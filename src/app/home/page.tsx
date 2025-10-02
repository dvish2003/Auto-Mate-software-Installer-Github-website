import React from 'react'
import { AuroraBackground } from '@/components/ui/shadcn-io/aurora-background'

function Hero() {
  return (
    <div className="w-full h-full">
      <AuroraBackground className="w-full min-h-screen overflow-auto">
        <div className='flex flex-col items-center justify-start w-full min-h-screen px-4 py-4 sm:px-6 lg:px-8 sm:py-8'>
          {/* Main Content */}
          <div className='w-full max-w-6xl mx-auto mt-8 text-center sm:mt-12 lg:mt-16'>
            {/* Text Content */}
            <div className='mb-6 lg:mb-10'>
              <h1 className="mb-4 text-2xl font-bold text-black sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                The next generation of enterprise AI Apps here.
              </h1>
              <br />
              <h2>
                <span className='text-lg font-semibold text-gray-600 sm:text-xl md:text-2xl lg:text-3xl'>
                  You Can Download Linux App Easily
                </span>
              </h2>
              <br />
              <hr className='max-w-2xl mx-auto' />
              <br />
              <p className='max-w-4xl mx-auto text-sm text-gray-800 sm:text-base md:text-lg'>
                Whether you need AI-powered API building blocks or full-service solutions, we deliver enterprise AI your way.
              </p>
            </div>

            {/* Cards Grid */}
            <div className='grid w-full grid-cols-1 gap-3 mx-auto mb-8 md:gap-4 lg:gap-6 md:grid-cols-2 xl:grid-cols-3 max-w-7xl'>
              {/* Card 1 - AI-Powered API */}
              <div className='p-3 text-white bg-black rounded-lg shadow-md h-auto min-h-[220px] flex flex-col'>
                <div className='flex mb-2 space-x-2'>
                  <div className='w-2 h-2 bg-red-500 rounded-full sm:w-3 sm:h-3'></div>
                  <div className='w-2 h-2 bg-yellow-500 rounded-full sm:w-3 sm:h-3'></div>
                  <div className='w-2 h-2 bg-green-500 rounded-full sm:w-3 sm:h-3'></div>
                </div>
                <h2 className='mb-2 text-base font-semibold text-left sm:text-lg'>AI-Powered API</h2>
                <div className='flex-1 overflow-hidden'>
                  <pre className='text-[10px] text-left break-words whitespace-pre-wrap sm:text-xs'>
                    <code>
{`import requests

url = "https://api.yourservice.com/ai-endpoint"
payload = {"input": "Your data here"}
headers = {"Content-Type": "application/json"}

response = requests.post(url, json=payload, headers=headers)
print(response.json())`}
                    </code>
                  </pre>
                </div>
              </div>

              {/* Card 2 - Full-Service Linux Base */}
              <div className='p-3 text-white bg-black rounded-lg shadow-md h-auto min-h-[220px] flex flex-col'>
                <div className='flex mb-2 space-x-2'>
                  <div className='w-2 h-2 bg-red-500 rounded-full sm:w-3 sm:h-3'></div>
                  <div className='w-2 h-2 bg-yellow-500 rounded-full sm:w-3 sm:h-3'></div>
                  <div className='w-2 h-2 bg-green-500 rounded-full sm:w-3 sm:h-3'></div>
                </div>
                <h2 className='mb-2 text-base font-semibold text-left sm:text-lg'>Full-Service Linux Base</h2>
                <div className='flex-1 overflow-hidden'>
                  <pre className='text-[10px] text-left break-words whitespace-pre-wrap sm:text-xs'>
                    <code>
{`# Install necessary libraries
sudo apt-get update
sudo apt-get install -y python3 python3-pip

# Clone your AI application repository
git clone <repository-url>  
cd <repository-directory>

# Install application dependencies
pip3 install -r requirements.txt

# Run the AI application
python3 app.py`}
                    </code>
                  </pre>
                </div>
              </div>

              {/* Card 3 - Download Apps */}
              <div className='p-3 text-white bg-black rounded-lg shadow-md h-auto min-h-[220px] flex flex-col md:col-span-2 xl:col-span-1'>
                <div className='flex mb-2 space-x-2'>
                  <div className='w-2 h-2 bg-red-500 rounded-full sm:w-3 sm:h-3'></div>
                  <div className='w-2 h-2 bg-yellow-500 rounded-full sm:w-3 sm:h-3'></div>
                  <div className='w-2 h-2 bg-green-500 rounded-full sm:w-3 sm:h-3'></div>
                </div>
                <h2 className='mb-2 text-base font-semibold text-left sm:text-lg'>Download Apps</h2>
                <div className='flex-1 overflow-hidden'>
                  <pre className='text-[10px] text-left break-words whitespace-pre-wrap sm:text-xs'>
                    <code>
{`#include <stdio.h>
#include <stdlib.h>

int main() {
    const char *url = "https://example.com/path/to/your/file";
    char command[256];
    snprintf(command, sizeof(command), "wget %s", url);
    if (result == 0) {
        printf("Download completed successfully.\\n");
    } else {
        printf("Download failed.\\n");
    }
    return 0;
}`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AuroraBackground>
    </div>
  )
}

export default Hero