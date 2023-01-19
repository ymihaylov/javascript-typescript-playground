// Prefer tuple over array whenever appropriate
{
// type Circle = (string | number)[];
// const circle: Circle = ['circle', 1];
// const circle1: Circle = ['circle', '1']; // It's fine, but is it?

// ===
type Circle = [string, number];
const circle: Circle = ['circle', 1]
// const circle1: Circle = ['circle', '1']; // error!
}
