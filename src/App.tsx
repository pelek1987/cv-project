import './App.scss';
import {cvData} from "./data";
import {Header, PersonalInfo} from "./components";

const App = () => {

  return (
    <main className={'cv-main'}>
        <Header>CV - {cvData.name} {cvData.lastName}</Header>
        <PersonalInfo
            data={{
                name: cvData.name,
                lastName: cvData.lastName,
                position: cvData.position,
                photo: cvData.photo,
            }}
        />
        <section className={'cv-details'}>
            <div className={'cv-details__experience'}>
                <h2>Experience</h2>
                <ul>
                    {cvData.experience.map((exp) => (
                        <li key={exp.year}>
                            <strong>{exp.year}</strong>{' - '}<span>{exp.description}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={'cv-details__education'}>
                <h2>Education</h2>
                <ul>
                    {cvData.education.map((el, idx) => <li key={idx}>{el}</li>)}
                </ul>
            </div>
        </section>
    </main>
  )
}

export {App}
