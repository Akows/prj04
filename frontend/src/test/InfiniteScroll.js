import React, { useCallback, useRef } from "react";

import ContentsImg from "../components/ContentsImg";

const InfiniteScroll = (props) => {

  const fullContent = useRef();
  const childContent = useRef();
  
  const onScroll = useCallback(
    (e) => {
      const scrollAreaHeight = fullContent.current.clientHeight; // 한 눈에 보이는 스크롤 영역
      const myScroll = e.target.scrollTop + scrollAreaHeight; // 사용자의 스크롤 위치
      const childHeight = childContent.current.clientHeight; // 스크롤안의 아이템의 높이
      props.scrollOptions.fullHeight = e.nativeEvent.target.scrollHeight;

      const showMoreData = () => {
            props.setScrollOptions({ ...props.scrollOptions,
            childLength : props.scrollOptions.childLength + 3,
            fullHeight : childHeight * props.scrollOptions.childLength
        })
      }

      myScroll === props.scrollOptions.fullHeight && showMoreData(); // 사용자의 스크롤 영역이 하단에 도달했을때 shoowMoreData함수를 실행시킨다.
    }, [props.scrollOptions]
  )

return (
    <div className="scroll-container" onScroll={onScroll} ref={fullContent}>

        {props.datas?.map((data, index) => (
            <div key={index} className="content-contaienr" ref={childContent}>
                <div className='itemcontainer-body-outer' key={data}>
                            <div className='itemcontainer-body-content-list'>
                                
                                <ContentsImg name={data} url={props.url}/>
                                
                                <div className='itemcontainer-body-content-list-text'>
                                    <div className='itemcontainer-body-content-list-name'>
                                        {data}
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
        ))}

    </div>
    );
}

export default InfiniteScroll;