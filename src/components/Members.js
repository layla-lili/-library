

import Memebership from "./Membership";
import { useSelector } from 'react-redux'


const Members = () => {
  const member = useSelector((state) => state.member);
  
  const list =  member.map((member) => (
    <Memebership key={member.id} member={member} />
  ));
  return <div className="row my-5">{list}</div>;
};

export default Members;
















// import { ListGroup } from 'react-bootstrap';
// //import { useSelector } from "react-redux";
// import members from '../members';


// const Members = () => {
//     //const members=useSelector((state)=>state.members);
    
//     const memberList = 
//     members.filter((member) => member)
//     .map((member) => 
//        <ul>
//          <li>`{member.firstName}  {member.lastName}`</li>
//          <li>{member.membership}</li>
//        </ul>
//     );
     
//         return (
//             <div>
  
//                 <ListGroup>
                 
//                 <ListGroup.Item>{memberList}</ListGroup.Item>
  
//                </ListGroup>
               
//            </div>
              
                         
//         );

// };

// export default Members;