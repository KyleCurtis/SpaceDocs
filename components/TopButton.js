import Link from "next/link";
import { BsFillArrowUpCircleFill } from "react-icons/bs"

const TopButton = () => {
    return (
        <Link href="#">
        <button className="fixed right-0 bottom-0 pb-[20px] pr-[20px]">
            <BsFillArrowUpCircleFill className="text-[40px] text-black dark:text-white p-[2px] border-2 border-[var(--cat-mocha-green)] rounded-[50%]"/>
        </button>
        </Link>
    )
}

export default TopButton;