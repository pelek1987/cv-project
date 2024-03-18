interface Experience {
    description: string;
    years: number;
}

export interface CVData {
    name: string;
    lastName: string;
    photo: string;
    position: string;
    experiences: Experience[];
    education: [string];
}
