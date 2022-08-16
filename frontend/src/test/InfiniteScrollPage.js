import axios from "axios";
import React, { useState } from "react";

import InfiniteScroll from "../test/InfiniteScroll";

const PInfiniteScroll = () => {

  const [datas, setDatas] = useState([]);
  const [scrollOptions, setScrollOptions] = useState({
    childLength: 10, // 첫 렌더될 아이템의 개수
    fullHeight: 0, // 총 스크롤의 크기
  });

  React.useEffect(() => {
    axios
    .get("https://api.genshin.dev/characters")
    .then(response => {
        //정상적으로 데이터를 불러오면, setData 함수를 이용하여 data 변수에 데이터를 넣는다.
        setDatas(response.data.slice(0, scrollOptions.childLength));
        console.log('setData Complete!');
        // console.log(response.data);
    })
    .catch(Error => {
        //데이터가 정상적으로 불러오지 못하면, setError 함수를 이용하여 error 변수의 값을 true로 전환한다.
        console.log('setData Error!');
        // console.log(Error);
    });
}, [scrollOptions.childLength]);

  return (
    <InfiniteScroll
      datas={datas}
      setDatas={setDatas}
      scrollOptions={scrollOptions}
      setScrollOptions={setScrollOptions}
    />
  );
}

export default PInfiniteScroll;