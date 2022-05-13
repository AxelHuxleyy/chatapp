
const SkeletonCard = () => {
  return (
    <div className='flex gap-3 h-24 w-full items-center p-2 border-b-2 border-gray-800 cursor-pointer animate-pulse'>
      <div
        className={`h-16 w-16 rounded-full border-2 bg-slate-200 object-cover `} />
      <div className="h-2 w-1/4 bg-slate-200 rounded"></div>

    </div>
  );
}

export default SkeletonCard;