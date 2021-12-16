import React from 'react';
import '../../CSS/viewRoutine/RoutineHeader.css';

export default function RoutineHeader() {
  return (
    <div className="summarizedInfo">
      <img className="routineBackground" src={'./testTitleBackground1.jpeg'} />
      <div className="summarizedName">[10기]Run and lead</div>
      <div className="summarizedPlaceAndDate">
        <div className="summarizedPlace">장소</div>
        <div className="place">온라인</div>
        <div className="summarizedStartDate">시작일</div>
        <div className="startDate">11.29(월) 오전 6시 30분</div>
      </div>
    </div>
  );
}
