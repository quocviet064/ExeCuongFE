import React, { useState } from 'react';


const ProfilePoint = () => {
  const [points, setPoints] = useState(100); // Giả sử bạn có 100 điểm
  const [redeemAmount, setRedeemAmount] = useState(0);

  const handleRedeem = () => {
    if (redeemAmount > points) {
      alert("Bạn không đủ điểm để quy đổi.");
    } else {
      setPoints(points - redeemAmount);
      alert(`Bạn đã quy đổi ${redeemAmount} điểm thành công!`);
      setRedeemAmount(0); // Reset ô nhập
    }
  };

  return (
    <div className="profile__points text-center">
      <h3 className="mb-4">Điểm Tích Lũy</h3>
      <div className="point-circle" style={{ 
        width: '150px',  // Tăng kích thước vòng tròn
        height: '150px', // Tăng kích thước vòng tròn
        borderRadius: '50%', 
        backgroundColor: 'black', // Vòng tròn màu đen
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        margin: '0 auto' 
      }}>
        <span style={{ fontSize: '32px', fontWeight: 'bold', color: 'gold' }}>{points}</span> {/* Số điểm màu vàng kim */}
      </div>
      <div className="mt-3">
        <input 
          type="number" 
          value={redeemAmount} 
          onChange={(e) => setRedeemAmount(e.target.value)} 
          placeholder="Nhập số điểm để quy đổi" 
          style={{ width: '80%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }} 
        />
        <button 
          onClick={handleRedeem} 
          className="btn btn-primary mt-2"
          style={{ width: '80%' }}
        >
          Quy đổi
        </button>
      </div>
      <p className="mt-2">1 điểm = 1 VNĐ</p>
    </div>
  );
};

export default ProfilePoint;
