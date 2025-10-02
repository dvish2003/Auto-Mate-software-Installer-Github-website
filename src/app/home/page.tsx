import React from 'react'
import { AuroraBackground } from '@/components/ui/shadcn-io/aurora-background'

function Hero() {
  return (
    <AuroraBackground>
      <div className='flex flex-col items-center justify-start w-full min-h-screen px-4 pt-16 pb-8 sm:px-6 lg:px-8 sm:pt-20'>
        <div className='w-full max-w-6xl mx-auto text-center'>
          <div className='mb-8 lg:mb-12'>
            <h1 className="mb-4 text-3xl font-bold text-black sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              The next generation of enterprise AI Apps here.
            </h1>
            <br />
            <h2>
              <span className='text-xl font-semibold text-gray-600 sm:text-2xl md:text-3xl lg:text-4xl'>
                You Can Download Linux App Easily
              </span>
            </h2>
            <br />
            <hr className='max-w-2xl mx-auto' />
            <br />
            <p className='max-w-4xl mx-auto text-base text-gray-800 sm:text-lg md:text-xl'>
              Whether you need AI-powered API building blocks or full-service solutions, we deliver enterprise AI your way.
            </p>
          </div>

          <div className='grid w-full grid-cols-1 gap-4 mx-auto md:gap-6 lg:gap-8 md:grid-cols-2 xl:grid-cols-3 max-w-7xl'>
            <div className='flex flex-col h-auto p-4 text-white bg-black rounded-lg shadow-md sm:p-6'>
              <div className='flex mb-3 space-x-2'>
                <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                <div className='w-3 h-3 bg-green-500 rounded-full'></div>
              </div>
              <h2 className='mb-3 text-lg font-semibold text-left sm:text-xl'>AI-Powered API</h2>
              <div className='flex-1 overflow-hidden'>
                <pre className='text-xs text-left break-words whitespace-pre-wrap sm:text-sm'>
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

            <div className='flex flex-col h-auto p-4 text-white bg-black rounded-lg shadow-md sm:p-6'>
              <div className='flex mb-3 space-x-2'>
                <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                <div className='w-3 h-3 bg-green-500 rounded-full'></div>
              </div>
              <h2 className='mb-3 text-lg font-semibold text-left sm:text-xl'>Full-Service Linux Base</h2>
              <div className='flex-1 overflow-hidden'>
                <pre className='text-xs text-left break-words whitespace-pre-wrap sm:text-sm'>
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

            <div className='flex flex-col h-auto p-4 text-white bg-black rounded-lg shadow-md sm:p-6 md:col-span-2 xl:col-span-1'>
              <div className='flex mb-3 space-x-2'>
                <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                <div className='w-3 h-3 bg-green-500 rounded-full'></div>
              </div>
              <h2 className='mb-3 text-lg font-semibold text-left sm:text-xl'>Download Apps</h2>
              <div className='flex-1 overflow-hidden'>
                <pre className='text-xs text-left break-words whitespace-pre-wrap sm:text-sm'>
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
  )
}

export default Hero