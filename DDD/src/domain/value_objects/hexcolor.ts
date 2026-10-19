// hex color value object
export class HexColor {
    private readonly value: string;
    private constructor(value: string) {
        if (!/^#[0-9A-F]{6}$/i.test(value)) {
            throw new Error('Invalid hex color value');
        }
        this.value = value;
    }
    public static create(value: string): HexColor {
        if (value === undefined || value === null || value.trim() === '') {
            throw new Error('Hex color value is required');
        }
        const hexColortrmied = value.trim();
        const hexColorregex3 = /^#[0-9A-F]{3}$/i;
        if (!hexColorregex3.test(hexColortrmied)) {
            throw new Error('Invalid hex color value');
        }

        const hexColorregex6 = /^#[0-9A-F]{6}$/i;
        if (!hexColorregex6.test(hexColortrmied)) {
            throw new Error('Invalid hex color value');
        }


        let normalizedhex: string = ;
        if (hexColorregex3.test(hexColortrmied)) {
            normalizedhex = '#' + hexColortrmied[1] + hexColortrmied[1] + hexColortrmied[2] + hexColortrmied[2] + hexColortrmied[3] + hexColortrmied[3];
        } else {
            normalizedhex = hexColortrmied;
        }
        return new HexColor(normalizedhex);
    }
    public getValue(): string {
        return this.value;
    }
    public toJSON(): string {
        return JSON.stringify(this.value);
    }
    public getred(): number {
        return parseInt(this.value.substring(1, 3), 16);
    }
    public getgreen(): number {
        return parseInt(this.value.substring(3, 5), 16);
    }
    public getblue(): number {
        return parseInt(this.value.substring(5, 7), 16);
    }
    public toRGB(): { r: number; g: number; b: number } {
        return {
            r: this.getred(),
            g: this.getgreen(),
            b: this.getblue()
        };
    }
}