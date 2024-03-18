import {CVData} from "../cv";

export const cvData: CVData = {
    name: 'Paweł',
    lastName: 'Sioda',
    photo: 'cv-photo.png',
    education: [
        'Lorem ipsum',
        'dolor sit',
        'amet',
        'yolo'
    ],
    position: 'Junior Developer',
    experience: [
        {
            year: 2022,
            description: 'Lorem ipsum at Google'
        },
        {
            year: 2024,
            description: 'Dolor sit amet at AWS'
        }
    ],
}