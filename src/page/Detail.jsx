import React from 'react';


const Detail = () => {
  return (
    <div className='detail'>
      <div  className='col'>
        <img src={process.env.PUBLIC_URL + '/img/shopping1.gif'} alt="상세페이지" />
      </div>
      <div className="row">
          <h4 className="mt20">상품명</h4>
          <p>상품설명</p>
          <p>가격: 12000</p>
          <button className='btn'>주문하기</button>
      </div> 
    </div>
  );
};

export default Detail;