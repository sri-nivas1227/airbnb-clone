import logo from "/assets/airbnb-logo.png"

const NavBar = ()=>{
    
    return (
        <div className=" shadow-lg">
            <div className="logo p-4  ">
                <img src={logo} className="w-1/12  "alt="airbnb logo" />
                {/* <h1 className="align-bottom  logo text-3xl font-poppins font-semibold text-[#ff5a5f]">airbnb</h1> */}
            </div>

        </div>
    )
}

export default NavBar