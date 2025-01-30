function Banner() {
  return (
    <div
      className="h-[20vh] md:h-[30vh] xl:h-[60vh] bg-center flex items-end bg-cover"
      style={{
        backgroundImage: "url(https://placehold.co/1200x800)",
      }}
    >
      <div className="text-xl min-md:text-3xl bg-gray-900 bg-opacity-60 p-4 text-white w-full text-center">
        Placeholder Image
      </div>
    </div>
  );
}

export default Banner;
