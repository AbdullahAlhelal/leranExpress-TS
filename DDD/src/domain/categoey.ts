// enity  model


export interface CategoryData {
    id?: number | undefined;
    name: string;
    description?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
// entity
export class Category {

    private constructor(private data: CategoryData) {
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
        if (this.data.name.length > 255) {
            throw new Error('Name must be less than 255 characters');
        }
    }
    public static create(data: CategoryData): Category {
        return new Category(data);
    }
    public get id(): undefined | number {
        return this.data.id;
    }
    public get name(): string {
        return this.data.name;
    }
    public get description(): string | undefined {
        return this.data.description;
    }
    public get createdAt(): Date | undefined {
        return this.data.createdAt;
    }
    public get updatedAt(): Date | undefined {
        return this.data.updatedAt;
    }

    //-business logic

    public updateName(name: string): void {
        this.data.name = name;
        this.validateName();
    }
    public isnew(): boolean {
        return this.data.id === undefined;
    }
    public toJSON(): CategoryData {
        return {
            id: this.data.id,
            name: this.data.name,
            description: this.data.description,
            createdAt: this.data.createdAt,
            updatedAt: this.data.updatedAt
        };
    }
}
