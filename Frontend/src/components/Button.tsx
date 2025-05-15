import { type ReactElement } from 'react';


interface ButtonProps{
    varient:"primary"|"secondary";
    text:String;
    startIcon?:ReactElement
    onClick?:()=>void;
    fullWidth?:boolean;
    loading?:boolean
}
const VarientClasses={
    "primary":"bg-[#7164c0] text-white",
    "secondary":"bg-[#d9ddee] text-[#7164c0]"
}

const defaultStyles="px-4 py-2 rounded-md font-small flex items-center "

const Button = ({varient,text,startIcon,onClick,fullWidth,loading}:ButtonProps) => {
  return (
    <button onClick={onClick} className={VarientClasses[varient]+" "+defaultStyles+`${fullWidth?"w-full flex justify-center items-center":""} ${loading?"opacity-45":""}`} disabled={loading}>
        <div className='pr-2'>
            {startIcon}
        </div>
        {text}
    </button>
  )
}

export default Button