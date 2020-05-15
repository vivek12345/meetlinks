import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="flex w-full">
        <div className="w-full">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3">
                <h6 className="text-gray-600 text-sm font-bold">
                  Sign in with
                </h6>
              </div>
              <div className="btn-wrapper text-center">
                <button
                  className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                  type="button"
                >
                  <img
                    alt="..."
                    className="w-4 mr-1"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                  />
                  Google
                </button>
              </div>
              <hr className="mt-6 border-b-1 border-gray-400" />
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg px-3 py-2 mb-4">
            <div className="block bg-gray-200 text-gray-700 text-lg font-semibold py-2 px-2 rounded-md">
              Upcoming Calls
            </div>
            <div className="py-3 text-sm">
              <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                <span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
                <div className="flex-grow w-2/3 font-medium px-2">
                  Speakers' Corner: Talent Acquisition at Offprice
                </div>
                <div className="text-sm w-1/3 font-normal text-gray-500 tracking-wide text-right">
                  Join Google Meet
                </div>
              </div>
              <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                <span className="bg-green-400 h-2 w-2 m-2 rounded-full"></span>
                <div className="flex-grow w-2/3 font-medium px-2">
                  Offprice Finance All Hands
                </div>
                <div className="text-sm w-1/3 font-normal text-gray-500 tracking-wide text-right">
                  Join Google Meet
                </div>
              </div>
              <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                <span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
                <div className="flex-grow w-2/3 font-medium px-2">
                  Weekly OMT Update
                </div>
                <div className="text-sm w-1/3 font-normal text-gray-500 tracking-wide text-right">
                  Join Zoom Link
                </div>
              </div>
              <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                <span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
                <div className="flex-grow w-2/3 font-medium px-2">
                  Feedback Session
                </div>
                <div className="text-sm w-1/3 font-normal text-gray-500 tracking-wide text-right">
                  Join Google Meet
                </div>
              </div>
              <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                <span className="bg-green-400 h-2 w-2 m-2 rounded-full"></span>
                <div className="flex-grow w-2/3 font-medium px-2">
                  (Optional) Finance Virtual Kitchen
                </div>
                <div className="text-sm w-1/3 font-normal text-gray-500 tracking-wide text-right">
                  Join Zoom Link
                </div>
              </div>
            </div>
            <div className="block bg-gray-200 text-sm text-right py-2 px-3 -mx-3 -mb-2 rounded-b-lg">
              <button className="hover:text-gray-600 text-gray-500 font-bold py-2 px-4">
                Cancel
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                id="getEvents"
              >
                Invite
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
