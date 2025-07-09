import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="flex justify-evenly w-full items-center h-15 bg-purple-600">
            <h1 className="cursor-pointer text-white font-bold hover:text-purple-200">
            <Link to={"/"}>HOME</Link>
            </h1>
            <nav>
                <Link
                to={"/"}
                 className="font-bold text-white cursor-pointer hover:text-purple-200"
                 >
                 Create Page
                </Link>
            </nav>
        </div>    
    );
};

export default NavBar;