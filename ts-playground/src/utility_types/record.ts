interface CatInfo {
	age: number;
	breed: string;
}

type CatName = "miffy" | "boris" | "mordel";

const cats: Record<CatName, CatInfo> = {
	miffy: { age: 10, breed: "Persian" },
	boris: { age: 5, breed: "Maine Coon" },
	mordel: { age: 2, breed: "British Shorthair" },
};
