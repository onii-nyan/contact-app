import { MdFilterAlt } from "react-icons/md";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";

type Props = {
    onSearch: (value: string) => void;
};

const FilterBar = ({ onSearch }: Props) => {
    return (
        <div className="mt-8 flex items-center justify-end">
            <MdFilterAlt className="text-2xl text-gray-600" />
            <HiOutlineAdjustmentsHorizontal className="text-2xl text-gray-600 ml-4 mr-6" />
            <div className="flex rounded-xl border-2 border-[#bfbfbf]">
                <FaSearch className="text-[#bfbfbf] text-2xl" />
                <input
                    type="text"
                    placeholder="Search"
                    onChange={(e) => onSearch(e.target.value)}
                className="w-auto pl-2 focus:border-blue-500 focus:outline-none"
            />
            </div>
            
        </div>
    );
}

export default FilterBar;