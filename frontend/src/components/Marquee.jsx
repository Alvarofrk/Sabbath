import React from 'react';

const Marquee = () => {
    const tags = [
        "#SABBATH", "#TECHNO", "#DARK", "#UNDERGROUND",
        "#NIGHTLIFE", "#BERLIN_VIBES", "#RAVE", "#NO_PHOTOS",
        "#RESPECT", "#DANCE", "#CHAOS", "#VOID"
    ];

    // Duplicate tags enough times to ensure smooth loop
    const content = [...tags, ...tags, ...tags, ...tags].join(" • ");

    return (
        <div className="absolute bottom-12 w-full bg-black/50 border-t border-neonPurple/30 py-2 overflow-hidden select-none z-20 backdrop-blur-sm">
            <div className="flex whitespace-nowrap animate-marquee hover:pause">
                <span className="text-xs md:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-neonPurple to-neonPink px-4 tracking-[0.5em] uppercase">
                    {content}
                </span>
                <span className="text-xs md:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-neonPurple to-neonPink px-4 tracking-[0.5em] uppercase">
                    {content}
                </span>
            </div>
        </div>
    );
};

export default Marquee;
