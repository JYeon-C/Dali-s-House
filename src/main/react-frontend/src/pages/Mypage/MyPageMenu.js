  import "./css/MyPageMenu.css";

  const MyPageMenu = () => {

  return (
  <div className = "menu_wrapper">
  <div className="MypageMenu">
  <ul>
    <li><a href="#" id="current">봉사 활동</a>
    <ul>
      <li><a href="MyVolunteer">나의 봉사</a></li>
      <li><a href="MyFavoriteVolunteer">찜한 봉사</a></li>
      <li><a href="MyVolunteerCertificate">봉사인증서 발급</a></li>
      </ul>
  </li>
  <li><a href="MyPageSponsor">후원 기부</a></li>
  <li><a href="#">설정</a></li>
  <li><a href="#">공지사항</a></li>
  </ul>
  </div>
  </div>
  );
  }

export default MyPageMenu;