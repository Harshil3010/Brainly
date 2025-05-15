import { CiShare2 } from "react-icons/ci";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

export function Card({ title, link, type }: CardProps) {
  return (
    <div>
      <div className="bg-white rounded-md border-gray-200 border p-4 max-w-72 min-h-48 min-w-72">
        <div className="flex justify-between ">
          <div className="flex items-center text-md">
            <div className="text-gray-700 pr-2">
              <CiShare2 />
            </div>
            {title}
          </div>
          <div className="flex items-center">
            <div className="pr-2 text-gray-700">
              <a href={link} target="_blank">
                <CiShare2 />
              </a>
            </div>
            <div className="text-gray-700">
              <CiShare2 />
            </div>
          </div>
        </div>
        <div className="pt-4">
          {type === "youtube" && (
            <iframe
              className="w-full"
              src={link.replace("watch","embed").replace("?v=","/")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
          {type === "twitter" && (
            <blockquote className="twitter-tweet">
              <a href={link.replace("x.com","twitter.com")}></a>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
}
