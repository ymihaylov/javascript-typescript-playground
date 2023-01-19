type A = {
	fieldA: string;
};

interface B {
	fieldB: string;
}

let t: A | B = {
	fieldA: "p",
};
