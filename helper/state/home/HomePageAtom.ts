import { HomePageType } from "@/helper/types";
import { atom } from "recoil";

const HomePageAtom = atom<HomePageType>({
    key:"HomePageAtom",
    default:{}as HomePageType
})

export default HomePageAtom