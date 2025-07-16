const markers = Array.from({ length: 83 }, (_, i) => i);

export const Ruler = () => {
  return (
    <div className="flex items-end relative h-6 first-letter:border-b border-gray-300 select-none print:hidden">
      <div
        id="ruler-container"
        className="relative w-full h-full max-w-[816px] mx-auto"
      >
        <div className="absolute bottom-0 inset-x-0 h-full">
          <div className="relative w-[816px] h-full">
            {markers.map((marker) => {
              const position = (marker * 816) / 82;

              return (
                <div
                  key={marker}
                  className="absolute bottom-0"
                  style={{ left: `${position}px` }}
                >
                  {marker % 10 === 0 && (
                    <>
                      <div className="absolute bottom-0 w-[1px] h-2 bg-neutral-500" />
                      <span className="absolute bottom-2 text-[10px] text-neutral-500 transform -translate-x-1/2">
                        {marker / 10 + 1}
                      </span>
                    </>
                  )}

                  {marker % 5 === 0 && marker !== 10 && (
                    <div className="absolute bottom-0 w-[1px] h-1.5 bg-neutral-500" />
                  )}

                  {marker % 5 !== 0 && (
                    <div className="absolute bottom-0 w-[1px] h-1 bg-neutral-500" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
