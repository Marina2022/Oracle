import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">

      <div className="w-8 h-8 gradient-logo rounded-lg flex items-center justify-center text-white font-bold text-[14px]">O</div>
      <span className="text-xl font-bold gradient-text">Оракул</span>

    </div>
  );
};

export default Logo;