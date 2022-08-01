import "../style/introduce.css";
import "../style/PublicCSS.css";

const Introduce = () => {
    return (
        <div className="introduce-outer">
            <div className="introduce-upper">
                <p>API - 원신 홈페이지 프로젝트</p> <hr/>
                <p>Genshindex</p> <hr/>
            </div>
            <div className="introduce-middle">
                <p>만든 사람 : 이유승</p>
                <p>전화번호 : 010-3629-3686</p>
                <p>이메일 : akows141@gmail.com</p> <hr/>
            </div>
            <div className="introduce-lower">
                감사합니다!
            </div>
        </div>
    );
}

export default Introduce;