import React from 'react';

const HeaderBackground = () => {
  return (
    <div className="relative w-full h-96">
      {/* Lighter gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-primary-200 to-primary-300" 
           style={{ 
             background: 'linear-gradient(135deg, #A2B8D8 0%, #7B9BC8 50%, #436FB0 100%)'
           }} 
      />
      
      {/* Overlay pattern - subtle dots */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Soft glowing shapes */}
        <div 
          className="absolute -right-32 -top-32 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #FAD49D 0%, transparent 70%)'
          }}
        />
        
        {/* Subtle wave overlay */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-48 opacity-15"
          style={{
            background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1200 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z' fill='%23ffffff'/%3E%3C/svg%3E")`,
            backgroundSize: '1200px 100%',
            backgroundRepeat: 'repeat-x'
          }}
        />

        {/* Light floating elements */}
        <div className="absolute left-1/4 top-1/3 w-3 h-3 rounded-full bg-white opacity-30" />
        <div className="absolute left-2/3 top-1/4 w-2 h-2 rounded-full bg-white opacity-25" />
        <div className="absolute left-1/2 top-2/3 w-4 h-4 rounded-full bg-white opacity-20" />
      </div>

      {/* Light top gradient overlay */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%)'
        }}
      />

      {/* Subtle mesh gradient */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(at 30% 20%, rgba(255,255,255,0.4) 0px, transparent 50%),
                           radial-gradient(at 80% 60%, rgba(255,255,255,0.3) 0px, transparent 50%)`
        }}
      />
    </div>
  );
};

export default HeaderBackground;
