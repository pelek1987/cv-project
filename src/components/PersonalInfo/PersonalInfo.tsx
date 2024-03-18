import {CVData} from "../../types";
import './PersonalInfo.scss';

type Props = {
    data: Omit<CVData, 'experience' | 'education'>;
}
export const PersonalInfo = ({ data }: Props) => {
    return (
        <aside className={'cv-personal-info'}><h2>Personal info:</h2>
            <img className={'cv-photo'} src={data.photo} alt={`${data.name} ${data.lastName} - profile photo`}/>
            <h3>{data.name} {data.lastName}</h3>
            <strong>{data.position}</strong>
        </aside>
    )
}