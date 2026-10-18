import { Category } from "./domain/categoey";
console.log("Hello, World!");
const category = Category.create({ "name": "Electronics", "description": "Electronic devices and gadgets", "createdAt": new Date(), "updatedAt": new Date(), "id": 1 });
console.log(category.toJSON())
