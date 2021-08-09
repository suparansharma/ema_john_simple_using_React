import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css';
import  {UserContext} from '../../App';

const Shipment = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loggedInUser,setLoggedInUser] =useContext(UserContext);
  const onSubmit = data => {
      console.log(data)
    };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
   
    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="test" {...register("example")}  />
      <input defaultValue={loggedInUser.name}  {...register("name", { required: true })} placeholder="Your Name" />
      {errors.name && <span className="error">This  is required</span>}

      <input defaultValue={loggedInUser.email} {...register("email", { required: true })} placeholder="Your Email" />
      {errors.email && <span className="error">Email  is required</span>}

      <input {...register("address", { required: true })} placeholder="Your Address" />
      {errors.address && <span className="error">Address  is required</span>}

      <input {...register("phone", { required: true })} placeholder="Your Phone" />
      {errors.phone && <span className="error">phone  is required</span>}




      {/* <input name="name" ref={register({required:true})} placeholder="Your Name"/>
      {errors.name && <span className="error">Name is required</span>}

      <input name="email" ref={register({required:true})} placeholder="Your Email" />
      {errors.email && <span className="error">email is required</span>}

      <input name="address" ref={register({required:true})} placeholder="Your Address" />
      {errors.address && <span className="error">address is required</span>}

      <input name="phone" ref={register({required:true})} placeholder="Your Phone" />
      {errors.phone && <span className="error">phone is required</span>} */}
      
      <input type="submit" />
    </form>
  );
};

export default Shipment;