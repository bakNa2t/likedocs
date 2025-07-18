"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "templates/blank-document.svg",
  },
];

export const TemplatesGallery = () => {
  const isCreating = false;

  return (
    <div className="bg-[#f1f3f4]">
      <div className="flex flex-col gap-y-4 max-w-screen-lg mx-auto px-16 py-6">
        <h3 className="font-medium">Start a new Document</h3>
        <Carousel>
          <CarouselContent className="-ml-4">
            {templates.map((template) => (
              <CarouselItem
                key={template.id}
                className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 2xl:basis-[14.285714%] pl-4"
              >
                <div
                  className={cn(
                    "flex flex-col gap-y-2.5 aspect-[3/4]",
                    isCreating && "pointer-events-none opacity-50"
                  )}
                >
                  <button
                    onClick={() => {}}
                    style={{
                      backgroundImage: `url(${template.imageUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                    className="flex flex-col items-center justify-center gap-y-4 bg-white hover:bg-blue-500 size-full border hover:border-blue-500 rounded-sm transition"
                    disabled={isCreating}
                  />
                  <p className="text-sm font-medium truncate">
                    {template.label}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};
