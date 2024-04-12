import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

interface Restaurant {
  main_image: string;
  image_alt: string;
  restaurantname: string;
  desc: string;
  rating: number;
  contact: string;
  location: string;
}

interface Props {
  filteredPaginatedRestaurants: Restaurant[];
}

export default function Page({ filteredPaginatedRestaurants }: Props) {
  const handleLocationClick = (location: string) => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      location
    )}`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-2">
      {filteredPaginatedRestaurants.map(
        (restaurant: Restaurant, index: number) => (
          <Card key={index}>
            <CardBody>
              <Image
                src={restaurant.main_image}
                alt={restaurant.image_alt}
                borderRadius="lg"
                objectFit="cover"
                boxSize="400px"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{restaurant.restaurantname}</Heading>
                <Text>{restaurant.desc}</Text>
                <Text fontSize="2xl">Rating: {restaurant.rating}</Text>
                <Text fontSize="2xl">{restaurant.contact}</Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button
                  variant="link"
                  colorScheme="green"
                  onClick={() => handleLocationClick(restaurant.location)}
                >
                  Show Location
                  <ExternalLinkIcon color="green" ml={2} />
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        )
      )}
    </div>
  );
}
