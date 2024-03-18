import './App.scss';
import {cvData} from "./types/data";

const App = () => {

  return (
    <main className={'cv-main'}>
        <header className={'cv-header'}>
            <h1>CV - {cvData.name} {cvData.lastName}</h1>
        </header>
        <aside className={'cv-personal-info'}>
            <h2>Personal info:</h2>
            <img className={'cv-photo'} src={cvData.photo} alt={`${cvData.name} ${cvData.lastName} - profile photo`}/>
            <h3>{cvData.name} {cvData.lastName}</h3>
            <strong>{cvData.position}</strong>
        </aside>
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
