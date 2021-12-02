import react from 'react';

export default function routineDetail() {
  // 1. 체크된 달력 구현
  // 2. 디자인 버튼
  // 3. detailedRoutine (이후 시작이 되고 나서 접어두거나 새로운 탭형식)
  return (
    <div className="routineDetail">
      <div className="summarizedInfoBox">
        <div className="summarizedInfo">
          {/* <img src={'./이미지 데이터'} /> */}
          <p className="summarizedName">[10기]Run and lead</p>
          <div className="summarizedPlaceAndDate">
            <div>
              <p className="summarizedPlace">장소</p>
            </div>
            <div>
              <p className="place">온라인</p>
            </div>
            <div>
              <p className="summarizedStartDate">시작일</p>
            </div>
            <div>
              <p className="startDate">11.29(월) 오전 6시 30분</p>
            </div>
          </div>
        </div>
      </div>
      <div className="summarizedCalenderAndParticipants">
        <div className="summarizedCalender">
          <button>
            {/* 모달 팝업창 달력*/}
          </button>
        </div>
        <div className="summarizedParticipants">
          <button>
            {/* 모달 팝업창 참가자명단*/}
          </button>
        </div>
        <div className="hostProfile">
          {/* 호스트 프로필 사진 및 닉네임 */}
        </div>
        <div className="routinePrice">
          {/* 루틴 금액 버튼과 비슷한 디자인 */}
        </div>
      </div>
      <div className="detailedRoutine">
        {/* 루틴에 대한 설명 */}
      </div>
    </div>
  );
}
