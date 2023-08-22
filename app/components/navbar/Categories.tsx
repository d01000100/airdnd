'use client';

import Container from "../Container";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb"
import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill } from "react-icons/gi"
import { BsSnow } from "react-icons/bs"
import { FaSkiing } from "react-icons/fa"
import { MdOutlineVilla } from "react-icons/md"
import { IoDiamond } from "react-icons/io5"
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This table is close to the beach"
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "You will fight windmill giants in this tables"
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "Modern settings"
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "Relaxed adventures on rolling fields"
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "For that nice aquatic combat!"
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "Pirates!! Arrrgh"
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "Everyone loves a fishing minigame!"
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "Fireball in movement!"
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "For that classic experience"
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "Rangers' favorite"
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "Hope you have fireball"
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "For the dungeon delvers"
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "¿Is that a giant worm?"
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "Lots of pets!"
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "For the fanciest adventurres"
  },
]

interface CategoriesProps {
  
}
 
const Categories: React.FC<CategoriesProps> = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return <Container>
    <div className="
      pt-4
      flex
      flex-row
      items-center
      justify-between
      overflow-x-auto
    ">
      {categories.map((item) => (
        <CategoryBox
          key={item.label}
          {...item}
          selected={category === item.label}
        ></CategoryBox>
      ))}
    </div>
  </Container>;
}
 
export default Categories;