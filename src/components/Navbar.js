const Navbar = () => {
    return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
        <a className="navbar-brand" href="#">
            Employee Details
        </a>
     <button className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarColor01" 
            aria-controls="navbarColor01" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
     </button>

     <div className="collapse navbar-collapse" id="navbarColor01"></div>
     </div>
  </nav>
    )
}

export default Navbar;