import { links } from "./data";
import { projectsData } from "./data";

export type SectionName = (typeof links)[number]["name"];
export type imageUrlType = (typeof projectsData)[number]["imageUrl"];
