interface Experience {
    description: string;
    year: number;
}

export interface CVData {
    name: string;
    lastName: string;
    photo: string;
    position: string;
    experience: Experience[];
    education: string[];
}