import { Link, Outlet } from "react-router-dom";

const EmpDashBoard = () => {
    return (
        <>
            
        
                    <h1> Welcom To Employee DashbBoard</h1>
           
           
           
                        <Link to="emptask" className="menucolor">My Task</Link>
                        <br />
                        <Link to="emptask" className="menucolor">My Task</Link>
                          <br />
                        <Link to="emptask" className="menucolor">My Task</Link>
                          <br />
                        <Link to="emptask" className="menucolor">My Task</Link>

                   
                   

                          <Outlet/>

                    
                    
        </>
    )
}

export default EmpDashBoard;
                
                
    
    
 

