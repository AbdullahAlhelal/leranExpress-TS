import { HexColor } from './value_objects/hexcolor';
interface ColorData {
    id?: number | undefined;
    name: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    hexcode: HexColor;
}

export class Color {
    hexcode: HexColor;
    private constructor(private data: ColorData) {
        this.hexcode = HexColor.create(data.hexcode);
        this.validate();
    }
    private validate(): void {
        this.validateName();
    }
    private validateName(): void {
        if (this.data.name === undefined || this.data.name === null || this.data.name.trim() === '') {
            throw new Error('Name is required');
        }
        if (this.data.name.length < 3) {
            throw new Error('Name must be greater than 3 characters');
        }
    }
    public static create(data: ColorData): Color {
        return new Color(data);
    }
}