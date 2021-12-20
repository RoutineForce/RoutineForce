import React from 'react';
import Navbarc from '../../components/common/Navbar';
import {Routes, Route} from 'react-router-dom';
import PageMover from '../../utils/PageMover';
import HomeDefault from '../../components/homeDefault';
import Routine from '../../components/editRoutine';
import MultiRoutineView from '../../components/multiRoutineView';
import API from '../../api/APIUtil';

const loginstate = null;
/**
 * 테스트용으로 작성해놓은 부분입니다.
 */
function Temp2(): JSX.Element {
  return <div>Temp222222</div>;
}
function Temp3(): JSX.Element {
  return <div>isLogined!</div>;
}

function Home(): JSX.Element {
  const brandClick = () => {
    PageMover.goToHomePage();
  };

  const makeNewRoutineClick = () => {
    PageMover.goTo('./editRoutine');
  };

  const seeAllRoutineClick = () => {
    PageMover.goTo('./viewAllRoutines');
  };

  const seeAllMeetingClick = () => {
    console.log('준비중!');
  };

  const seeLoginPageClick = () => {
    PageMover.goTo('./login');
  };

  return (
    <>
      <Navbarc />
      <Routes>
        <Route path={''} element={<HomeDefault></HomeDefault>}></Route>
        <Route path={'/editRoutine'} element={<Routine></Routine>} />
        <Route
          path={'/viewAllRoutines'}
          element={<MultiRoutineView></MultiRoutineView>}
        />
        <Route path={'/profile'} element={<Temp3></Temp3>} />
      </Routes>
      <br></br>
      <div className="footer">Produced by Team.Under4</div>
    </>
  );
}

export default Home;
