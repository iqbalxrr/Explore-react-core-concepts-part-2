
export default function User({user}){
  
    const {name , email , id , phone} = user;

    return(
        <div className="users">
            <h4>name : {name}</h4>
            <h4>Email : {email}</h4>
            <h4>Id: {id}</h4>
            <h4>Phone number : {phone}</h4>
            
           
        </div>
    )
}