import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  // GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import {
  // FaSkiing,
  FaPumpSoap,
  FaShower,
  FaFireExtinguisher,
  FaUmbrellaBeach,
  FaKey,
} from "react-icons/fa";
import { FaHouseUser, FaPeopleRoof, FaKitchenSet } from "react-icons/fa6";
import {
  BiSolidWasher,
  BiSolidDryer,
  BiSolidFirstAid,
  BiWifi,
  BiSolidFridge,
  BiWorld,
} from "react-icons/bi";
import { BsSnow, BsFillDoorOpenFill, BsPersonWorkspace } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla, MdMicrowave, MdBalcony, MdYard, MdPets } from "react-icons/md";
import {
  PiBathtubFill,
  PiCoatHangerFill,
  PiTelevisionFill,
} from "react-icons/pi";
import { TbIroning3 } from "react-icons/tb";
import {
  GiHeatHaze,
  GiCctvCamera,
  GiBarbecue,
  GiToaster,
  GiCampfire,
} from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";

export const categories = [
  {
    label: "Tất Cả",
    icon: <BiWorld />,
  },
  {
    img: "assets/beach_cat.jpg",
    label: "Bãi Biển",
    icon: <TbBeach />,
    description: "This property is close to the beach!",
  },
  {
    img: "assets/windmill_cat.webp",
    label: "Cối Xay Gió",
    icon: <GiWindmill />,
    description: "This property is has windmills!",
  },
  {
    img: "assets/modern_cat.webp",
    label: "Thành Phố Hiện Đại",
    icon: <MdOutlineVilla />,
    description: "This property is modern!",
  },
  {
    img: "assets/countryside_cat.webp",
    label: "Nông thôn",
    icon: <TbMountain />,
    description: "This property is in the countryside!",
  },
  {
    img: "assets/pool_cat.jpg",
    label: "Bể Bơi Ấn Tượng",
    icon: <TbPool />,
    description: "This is property has a beautiful pool!",
  },
  {
    img: "assets/island_cat.webp",
    label: "Hòn Đảo",
    icon: <GiIsland />,
    description: "This property is on an island!",
  },
  {
    img: "assets/lake_cat.webp",
    label: "Bờ Hồ",
    icon: <GiBoatFishing />,
    description: "This property is near a lake!",
  },
  // {
  //   img: "assets/skiing_cat.jpg",
  //   label: "Ski-in/out",
  //   icon: <FaSkiing />,
  //   description: "This property has skiing activies!",
  // },
  {
    img: "assets/castle_cat.webp",
    label: "Tòa Thành",
    icon: <GiCastle />,
    description: "This property is an ancient castle!",
  },
  {
    img: "assets/cave_cat.jpg",
    label: "Hang Động",
    icon: <GiCaveEntrance />,
    description: "This property is in a spooky cave!",
  },
  {
    img: "assets/camping_cat.jpg",
    label: "Cắm Trại",
    icon: <GiForestCamp />,
    description: "This property offers camping activities!",
  },
  // {
  //   img: "assets/arctic_cat.webp",
  //   label: "Arctic",
  //   icon: <BsSnow />,
  //   description: "This property is in arctic environment!",
  // },
    {
    img: "assets/mountain.webp",
    label: "Núi",
    icon: <GiCactus />,
    description: "This property is in the mountain!",
  },
  // {
  //   img: "assets/barn_cat.jpg",
  //   label: "Barns",
  //   icon: <GiBarn />,
  //   description: "This property is in a barn!",
  // },
  {
    img: "assets/lux_cat.jpg",
    label: "Sang Trọng",
    icon: <IoDiamond />,
    description: "This property is brand new and luxurious!",
  },
];

export const types = [
  {
    name: "Cả Căn Nhà",
    description: "Khách Hàng Có Thể Thuê Toàn Bộ Căn Nhà",
    icon: <FaHouseUser />,
  },
  {
    name: "Thuê Theo Phòng",
    description:
      "Khách Có Phòng Riêng Trong Nhà Và Được Sử Dụng Các Tiện Ích Chung",
    icon: <BsFillDoorOpenFill />,
  },
  {
    name: "Chia Sẽ Phòng",
    description:
      "Khách Ngủ Trong Phòng Hoặc Khu Vực Chung Có Thể Dùng Chung Với Chủ Nhà Hoặc Khách Khác",
    icon: <FaPeopleRoof />,
  },
];

export const facilities = [
  {
    name: "Bồn Tắm",
    icon: <PiBathtubFill />,
  },
  {
    name: "Sản Phẩm Chăm Sóc Cá Nhân",
    icon: <FaPumpSoap />,
  },
  {
    name: "Phòng Tắm Ngoài Trời",
    icon: <FaShower />,
  },
  {
    name: "Máy Giặt",
    icon: <BiSolidWasher />,
  },
  {
    name: "Máy Sấy",
    icon: <BiSolidDryer />,
  },
  {
    name: "Móc Treo",
    icon: <PiCoatHangerFill />,
  },
  {
    name: "Bàn Ủi",
    icon: <TbIroning3 />,
  },
  {
    name: "TV",
    icon: <PiTelevisionFill />,
  },
  {
    name: "Không Gian Làm Việc",
    icon: <BsPersonWorkspace />
  },
  {
    name: "Máy Điều Hòa",
    icon: <BsSnow />,
  },
  {
    name: "Máy Sưởi",
    icon: <GiHeatHaze />,
  },
  {
    name: "Camera",
    icon: <GiCctvCamera />,
  },
  {
    name: "Bình Cứu Hỏa",
    icon: <FaFireExtinguisher />,
  },
  {
    name: "Dụng Cụ Sơ Cứu",
    icon: <BiSolidFirstAid />,
  },
  {
    name: "Wifi",
    icon: <BiWifi />,
  },
  {
    name: "Đồ Nấu ĂN",
    icon: <FaKitchenSet />,
  },
  {
    name: "Tủ Lạnh",
    icon: <BiSolidFridge />,
  },
  {
    name: "Lò Vi Sóng",
    icon: <MdMicrowave />,
  },
  {
    name: "Bếp Lò",
    icon: <GiToaster />,
  },
  {
    name: "Dụng Cụ Nướng Thịt",
    icon: <GiBarbecue />,
  },
  {
    name: "Khu Vực Ăn Uống Ngoài Trời",
    icon: <FaUmbrellaBeach />,
  },
  {
    name: "Sân Hoặc Ban Công Riêng",
    icon: <MdBalcony />,
  },
  {
    name: "Lửa Trại",
    icon: <GiCampfire />,
  },
  {
    name: "Sân Vườn",
    icon: <MdYard />,
  },
  {
    name: "Đỗ Xe Miễn Phí",
    icon: <AiFillCar />,
  },
  {
    name: "Tự Check-In",
    icon: <FaKey />
  },
  {
    name: "Có Thể Mang Theo Thú Cưng",
    icon: <MdPets />
  }
];
