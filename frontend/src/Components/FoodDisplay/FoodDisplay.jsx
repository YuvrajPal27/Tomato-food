import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../../FoodItem/FoodItem";

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext);

  return (
    <div id="food-display" className="mt-10">
            <h2 className="text-[max(2vw,24px)] font-bold">Top Dishes Near You</h2>
             <div id="food-display-list" className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 row-gap-12 mt-8">
                    {
                        food_list.map((item,index) => {
                            if(category === "All" || category === item.category){
                                 return <FoodItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image} />
                            }
                        })
                    }
             </div>
    </div>
  )
}

export default FoodDisplay