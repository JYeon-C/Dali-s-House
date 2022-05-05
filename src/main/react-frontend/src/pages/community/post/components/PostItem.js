import { useNavigate } from "react-router-dom";
import HeartnReply from "../../component/HeartnReply";
import "./css/PostItem.css";

const PostItem = ({
  id,
  category,
  userId,
  userName,
  userGrade,
  title,
  content,
  date,
  heart,
  reply,
}) => {
  const navigate = useNavigate();
  const strDate = new Date(parseInt(date)).toLocaleDateString();

  return (
    <div className="PostItem">
      <div className="postItemTop">
        <div className="text_wrapper">
          <div className="userInfo">
            <div className="userImgWrapper">
              <img
                className="userImg"
                src={process.env.PUBLIC_URL + `/assets/icon.png`}
              />
              {/* <img src={process.env.PUBLIC_URL + `/assets/icon${userId}.png`} /> */}
            </div>
            <div className="userInfoText">
              <div className="userName">{(userName = "userName")}</div>
              <div className="userGrade">
                {userGrade === "bot"
                  ? "초보"
                  : userGrade === "mid"
                  ? "우수"
                  : "명예"}{" "}
                달리단
                <div className="writtenDate">{strDate}</div>
              </div>
            </div>
          </div>
          <div className="postTitle">{title.slice(0, 20)}</div>
          <div
            className="postContent"
            onClick={() => {
              navigate(`/community/${id}`);
            }}
          >
            {content.slice(0, 500)}
          </div>
        </div>
        <div className="image_wrapper">
          <img
            className="postImg"
            src={process.env.PUBLIC_URL + `/assets/community_img.png`}
          />
          {/* <img
            src={process.env.PUBLIC_URL + `/assets/community_img${id}.png`}
          /> */}
        </div>
      </div>
      <div className="postItemBottom">
        <div className="heartAndReplyWrapper">
          <HeartnReply heart={heart} reply={reply} />
        </div>
        <div className="postEditButtonWrapper">
          <button
            className="postEditButton"
            onClick={() => {
              navigate(`/community/edit/${id}`);
            }}
          >
            수정하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;