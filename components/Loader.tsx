import Image from 'next/image';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <Image
        src="/assets/icons/loading-circle.svg"
        alt="Loading..."
        width={50}
        height={50}
      />
    </div>
  );
};

export default Loader;