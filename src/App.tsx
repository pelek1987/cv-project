import {CVData} from "./types";

const cvData: CVData = {
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
const App = () => {

  return (
    <main>
        <header>
            <h1>CV - {cvData.name} {cvData.lastName}</h1>
        </header>
        <aside>
            <h2>Personal info:</h2>
            <img src={cvData.photo} alt={`${cvData.name} ${cvData.lastName} - profile photo`}/>
            <div>
                <h3>{cvData.name} {cvData.lastName}</h3>
                <strong>{cvData.position}</strong>
            </div>
        </aside>
        <section>
            <div>
                <h2>Experience</h2>
                <ul>
                    {cvData.experience.map((exp) => (
                        <li key={exp.year}>
                            <strong>{exp.year}</strong>{' - '}<span>{exp.description}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Education</h2>
                <ul>
                    {cvData.education.map((el, idx) => <li key={el[idx]}>{el}</li>)}
                </ul>
            </div>
        </section>
    </main>
  )
}

export {App}
