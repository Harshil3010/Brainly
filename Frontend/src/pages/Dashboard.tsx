import Button from "../components/Button";
import { CiShare2 } from "react-icons/ci";
import { GrAdd } from "react-icons/gr";
import { Card } from "../components/Card";
import { CreateContentModal } from "../components/CreateContentModal";
import { useEffect, useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { useContent } from "../hooks/UseContent";
import axios from "axios";
import { BACKEND_URL } from "../config";

 export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const {contents,refresh}=useContent();

  useEffect(()=>{
    refresh();
  },[modalOpen])

  return (
    <div>
      <Sidebar />
      <div className="p-4 ml-72 min-h-screen bg-[#eeeeef] ">
        <CreateContentModal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />

        <div className="justify-end flex gap-4">
          <Button
            onClick={() => {
              setModalOpen(true);
            }}
            varient="primary"
            text="Add Content"
            startIcon={<CiShare2 />}
          ></Button>
          <Button
            onClick={async()=>{
              const response=await axios.post(`${BACKEND_URL}/api/v1/brain/share`,{
                share:true
              },{
                headers:{
                  "Authorization":localStorage.getItem("token")
                }
              });
              const shareUrl=`http://localhost:5173/share/${response.data.hash}`;
              alert(shareUrl);
            }}
            varient="secondary"
            text="Share Brain"
            startIcon={<GrAdd />}
          ></Button>
        </div>

        <div className="flex gap-4 flex-wrap">
          {contents.map(({type,link,title})=> <Card
            type={type}
            link={link}
            title={title}
          ></Card>

          )}
         
          {/* <Card
            type="youtube"
            link="https://www.youtube.com/watch?v=O3BUHwfHf84"
            title="First Video"
          ></Card> */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
