import MenuList from "./MenuList";

function Menu() {
  const dummyData = [
    {
      name: "Best of Nepal in 7 Days Tour",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,quisquam iusto nobis quo accusamus voluptatem facere, architecto, tempore possimus enim suscipit omnis nemo aliquam dolorem veritatis pariatur aliquid ipsa! Quaerat!",
      imageDestination: "../assets/images/img1.jpg",
      price: `3,989`,
    },
    {
      name: "Best of China in 7 Days Tour",
      description:
        "Experience the best of Nepal in 7 days with a perfect mix of culture, nature, and adventure. Start in Kathmandu, exploring UNESCO heritage sites like Pashupatinath, Boudhanath, and Swayambhunath. Head toPokhara for serene Phewa Lake, stunning mountain views from Sarangkot, and thrilling adventures like paragliding. Journey to Chitwan National Park for a jungle safari, canoe rides, and cultural programs. Return to Kathmandu for some final sightseeing and shopping in Thamel before departing with unforgettable memories of Nepal’s vibrant culture and breathtaking landscapes.",
      imageDestination: "../assets/images/img1.jpg",
      price: `3,989`,
    },
    {
      name: "Best of India in 7 Days Tour",
      description:
        "Experience the best of Nepal in 7 days with a perfect mix of culture, nature, and adventure. Start in Kathmandu, exploring UNESCO heritage sites like Pashupatinath, Boudhanath, and Swayambhunath. Head toPokhara for serene Phewa Lake, stunning mountain views from Sarangkot, and thrilling adventures like paragliding. Journey to Chitwan National Park for a jungle safari, canoe rides, and cultural programs. Return to Kathmandu for some final sightseeing and shopping in Thamel before departing with unforgettable memories of Nepal’s vibrant culture and breathtaking landscapes.",
      imageDestination: "../assets/images/img1.jpg",
      price: `3,989`,
    },
    {
      name: "Best of Bangladesh in 7 Days Tour",
      description:
        "Experience the best of Nepal in 7 days with a perfect mix of culture, nature, and adventure. Start in Kathmandu, exploring UNESCO heritage sites like Pashupatinath, Boudhanath, and Swayambhunath. Head toPokhara for serene Phewa Lake, stunning mountain views from Sarangkot, and thrilling adventures like paragliding. Journey to Chitwan National Park for a jungle safari, canoe rides, and cultural programs. Return to Kathmandu for some final sightseeing and shopping in Thamel before departing with unforgettable memories of Nepal’s vibrant culture and breathtaking landscapes.",
      imageDestination: "../assets/images/img1.jpg",
      price: `3,989`,
    },
    {
      name: "Best of Bhutan in 7 Days Tour",
      description:
        "Experience the best of Nepal in 7 days with a perfect mix of culture, nature, and adventure. Start in Kathmandu, exploring UNESCO heritage sites like Pashupatinath, Boudhanath, and Swayambhunath. Head toPokhara for serene Phewa Lake, stunning mountain views from Sarangkot, and thrilling adventures like paragliding. Journey to Chitwan National Park for a jungle safari, canoe rides, and cultural programs. Return to Kathmandu for some final sightseeing and shopping in Thamel before departing with unforgettable memories of Nepal’s vibrant culture and breathtaking landscapes.",
      imageDestination: "../assets/images/img1.jpg",
      price: `3,989`,
    },
  ];
  return (
    <>
      <div className="container">
        <MenuList obj={dummyData} />
      </div>
    </>
  );
}

export default Menu;
