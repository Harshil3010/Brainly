import { LuBrain } from "react-icons/lu";
import { SidebarItem } from "./SidebarItem";
import { FaTwitter, FaYoutube } from "react-icons/fa";

export function Sidebar(){
    return <div className="h-screen bg-white border-r border-r-gray-300 w-72 fixed left-0 top-0 pl-6 ">
        <div className="flex text-2xl pt-8 items-center">
            <div className="pr-2 text-[#7164c0]">
                <LuBrain />
            </div>
            Brainly
        </div>
        <div className="pt-8 pl-4">
            <SidebarItem text="Twitter" icon={<FaTwitter/>}/>
            <SidebarItem text="Youtube" icon={<FaYoutube/>}/>
        </div>
    </div>
}