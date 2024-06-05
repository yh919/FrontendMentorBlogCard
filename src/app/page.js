import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 mx-auto">
      <div className="card flex flex-col gap-3 rounded-3xl bg-white w-[350px] sm:w-[450px] border-2  border-black  py-6 px-3">
        <div className="flex items-center justify-center">
          <Image
            src="/images/illustration-article.svg"
            width={395}
            height={201}
            alt="image"
            className="rounded-3xl"
          />
        </div>
        <div className="flex flex-col gap-3 ml-6 items-start justify-center">
          <div className="p-2 w-20 rounded-md bg-[#f4d04e]">
            <h1 className="text-center text-sm font-extrabold text-black">
              Learining
            </h1>
          </div>
          <p className="text-sm font-medium">Published 21 Dec 2023</p>
        </div>
        <div className="flex flex-col p-6 gap-3  items-start justify-center">
          <h1 className="sm:text-center text-xl sm:text-2xl font-extrabold text-black hover:text-[#f4d04e] cursor-pointer">
            HTML & CSS foundations
          </h1>
          <p className="text-md sm:text-lg font-medium text-gray-600">
            These languages are the backbone of every website, defining
            structure,content,and presentation.
          </p>
        </div>
        <div className="flex gap-3 ml-6 items-center justify-start">
          <div className=" rounded-md ">
            <Image
              src="/images/image-avatar.webp"
              width={40}
              height={40}
              alt="image"
              className="rounded-full"
            />
          </div>
          <p className="text-sm font-extrabold">Greg Hooper</p>
        </div>
      </div>
      <div className="attribution mt-6">
        Challenge by
        <span className="mx-1">
          <a
            href="https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS"
            target="_blank"
          >
            Frontend Mentor
          </a>
        </span>
        . Coded by{" "}
        <a href="https://www.frontendmentor.io/profile/yh919">
          Youssef Hussein
        </a>
        .
      </div>
    </main>
  );
}
