import { Row, Col } from "react-bootstrap";
import SideBar from "./sidebar";

function AdminPanel() {
    
    
    
    
    
    
    
    return ( 
       <>
      
        <div>
            <Row >
                <Col md={3}>

                <SideBar/>
                </Col>
                <Col md={8} style={{display:"flex"}}>
                    <div style={{marginTop:"20px",backgroundColor:"grey",width:"250px",height:"250px",marginLeft:"50px"}}>
                        
                    </div>

                    <div style={{marginTop:"20px",backgroundColor:"grey",width:"250px",height:"250px",marginLeft:"80px"}}>
                        
                    </div>

                    <div style={{marginTop:"20px",backgroundColor:"grey",width:"250px",height:"250px",marginLeft:"80px"}}>
                        
                    </div>
                
                </Col>

            </Row>
        </div>
        




       </> 






     );
}

export default AdminPanel;