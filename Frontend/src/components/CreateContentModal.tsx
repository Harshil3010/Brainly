import { IoClose } from "react-icons/io5";
import Button from "./Button";
import { useRef, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

export function CreateContentModal({ open, onClose }) {
  const titleRef = useRef<HTMLInputElement>();
  const linkRef = useRef<HTMLInputElement>();
  const [type, setType] = useState(ContentType.Youtube);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
    await axios.post(`${BACKEND_URL}/api/v1/content`,{
      link,
      type,
      title
    },{
      headers:{
        "Authorization":localStorage.getItem("token")
      }
    })
    onClose();
    
  }

  return (
    <div>
      {open && (
        <div>
          <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center"></div>
          <div className="w-screen h-screen fixed top-0 left-0  flex justify-center ">
            <div className="flex flex-col justify-center">
              <span className="bg-white opacity-100 p-4 rounded fixed">
                <div
                  className="flex justify-end cursor-pointer"
                  onClick={onClose}
                >
                  <IoClose />
                </div>
                <div className="">
                  <Input reference={titleRef} placeholder={"Title"} />
                  <Input reference={linkRef} placeholder={"Link"} />
                </div>
                <div className="">
                  <h1>Type</h1>
                  <div className="flex gap-1 p-4 justify-center ">
                    <Button
                      text="Youtube"
                      varient={
                        type === ContentType.Youtube ? "primary" : "secondary"
                      }
                      onClick={() => {
                        setType(ContentType.Youtube);
                      }}
                    ></Button>
                    <Button
                      text="Twitter"
                      varient={
                        type === ContentType.Twitter ? "primary" : "secondary"
                      }
                      onClick={() => {
                        setType(ContentType.Twitter);
                      }}
                    ></Button>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Button
                    onClick={addContent}
                    varient="primary"
                    text="Submit"
                  />
                </div>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function Input({
  placeholder,
  reference,
}: {
  placeholder: string;
  reference?: any;
}) {
  return (
    <div>
      <input
        ref={reference}
        placeholder={placeholder}
        type={"text"}
        className="px-4 py-2 border rounded m-2"
      />
    </div>
  );
}
