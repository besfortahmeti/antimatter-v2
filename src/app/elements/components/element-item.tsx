"use client";

interface ElementItemProps {
  handleCardClick: () => void;
}
const ElementItem = ({ handleCardClick }: ElementItemProps) => {
  return (
    <div
      onClick={() => handleCardClick()}
      className="cursor-pointer bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-gray-300 transition-colors"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold">
          A
        </div>
        <div>
          <div className="text-sm font-medium">Aceternity UI</div>
          <div className="text-xs text-muted-foreground">
            Timeline · Default
          </div>
        </div>
      </div>
      <div className="bg-gray-50 rounded-lg h-40 flex items-center justify-center relative overflow-hidden">
        {/* Mock UI */}
        <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gray-200 flex flex-col gap-8 py-2">
          <div className="w-2 h-2 rounded-full bg-cyan-400 -ml-[3px]"></div>
          <div className="w-2 h-2 rounded-full bg-purple-400 -ml-[3px]"></div>
        </div>
        <div className="ml-8 text-xs text-gray-500">
          <div>Early 2023</div>
          <div className="mt-8 font-bold text-black">Changelog</div>
        </div>
      </div>
    </div>
  );
};

export default ElementItem;
