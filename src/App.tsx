import './App.scss';
import {cvData} from "./data";
import {Header, PersonalInfo, Details} from "./components";

export const App = () => {

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
        <Details
            education={cvData.education}
            experience={cvData.experience}
        />
    </main>
  )
}
