import {CVData} from "../../types";
import './Details.scss'

type Props = Pick<CVData, 'education' | 'experience'>
export const Details = ({ education, experience }: Props) => {
    return (
        <section className={'cv-details'}>
            <div className={'cv-details__experience'}>
                <h2>Experience</h2>
                <ul>
                    {experience.map((exp) => (
                        <li key={exp.year}>
                            <strong>{exp.year}</strong>{' - '}<span>{exp.description}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={'cv-details__education'}>
                <h2>Education</h2>
                <ul>
                    {education.map((el, idx) => <li key={idx}>{el}</li>)}
                </ul>
            </div>
        </section>
    );
}