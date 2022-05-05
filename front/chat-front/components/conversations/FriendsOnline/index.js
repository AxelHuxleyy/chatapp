import CardOnline from "./card"
import SkeletonCard from "./skeletonCard";
import { GET_USERS } from "../../../graphQL/user/querys";
import { useQuery } from "@apollo/client";

const Online = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  return (
    <div className='flex flex-col gap-3 p-2 justify-center'>
      
      {
        loading ? 
        <div>
          <SkeletonCard /> 
          <SkeletonCard /> 
          <SkeletonCard />
          <SkeletonCard /> 
        </div> :
          <div>
            {data.getUsers.map(({ name, lastName, id }) => <CardOnline name={name} lastName={lastName} key={id} />)}
          </div>
      }



    </div>
  );
}

export default Online;