import React from 'react'

const CardPlaceholder = () => {
  const arr = [1, 2, 3]

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {arr.map((item) => (
        <div className="placeholder-div" key={item}>
          <div className="top-part flex justify-between mb-6">
            <div className="flex flex-col">
              <div className="w-28 h-3 bg-slate-600 rounded-lg mb-1"></div>
              <div className="w-14 h-3 bg-slate-600 rounded-lg mt-1"></div>
            </div>
            <div className="w-8 h-8 bg-slate-600 rounded-full"></div>
          </div>

          <div className="bottom-part flex items-center justify-between mt-4">
            <div className="w-20 h-3 bg-slate-600 rounded-lg"></div>
            <div className="flex flex-col">
              <div className="w-12 h-3 bg-slate-600 rounded-lg mb-1"></div>
              <div className="w-12 h-3 bg-slate-600 rounded-lg mt-1"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardPlaceholder