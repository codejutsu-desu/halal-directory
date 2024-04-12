import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from "react";
import axios from "axios";

interface Restaurant {
  restaurantname: string;
  desc: string;
  rating: string;
  contact: string;
  location: string;
  main_image: string;
  image_alt: string;
}

interface RestaurantData {
  restaurants: Restaurant[];
  loading: boolean;
}

const RestaurantContext = createContext<RestaurantData>({
  restaurants: [],
  loading: false,
});

export const RestaurantProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("start");
    const fetchRestaurants = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://halal-korean-restaurants-api.p.rapidapi.com/restaurants",
          {
            headers: {
              "X-RapidAPI-Key":
                "f5506f0407mshe17388871a46f96p1c7b10jsne6ac75a276c7",
              "X-RapidAPI-Host": "halal-korean-restaurants-api.p.rapidapi.com",
            },
          }
        );
        setRestaurants(response.data[0].restaurant);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <RestaurantContext.Provider value={{ restaurants, loading }}>
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurantContext = () => useContext(RestaurantContext);
