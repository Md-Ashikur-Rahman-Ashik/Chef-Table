const Banner = () => {
  return (
    <div className="mt-12 mx-32">
      <div
        className=" min-h-screen rounded-3xl"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/FKrGSYz/Banner-Img.png), linear-gradient(0.00deg, rgba(21, 11, 43, 0.9),rgba(21, 11, 43, 0) 100%)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="">
          <div className="min-h-screen flex flex-col justify-center items-center">
            <h1 className="mb-6 text-5xl font-bold text-white w-2/3 text-center mx-auto">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mb-10 text-white font-normal text-[18px] w-2/3 text-center mx-auto">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding problems to become an
              exceptionally well world-class Programmer.
            </p>
            <div className="flex gap-6">
              <button className="font-semibold text-xl btn bg-[#0BE58A] border-none rounded-3xl">Explore Now</button>
              <button className="font-semibold text-xl btn bg-transparent text-white rounded-3xl">Our Feedback</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
