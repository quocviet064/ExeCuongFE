import React, { useState } from 'react';

const ProfileBank = () => {
  const [cards, setCards] = useState([
    { id: 2, number: '2345 6789 0123 4567', isDefault: false },
  ]);
  const [bankAccounts, setBankAccounts] = useState([
    { id: 1, name: 'Ngân hàng A', number: '9876 5432 1098 7654' },
  ]);

  const handleSetDefault = (cardId) => {
    setCards(cards.map(card => 
      ({ ...card, isDefault: card.id === cardId })
    ));
  };

  const handleDelete = (itemId, isCard) => {
    if (isCard) {
      setCards(cards.filter(card => card.id !== itemId));
    } else {
      setBankAccounts(bankAccounts.filter(account => account.id !== itemId));
    }
  };

  return (
    <div className="profile-bank">
      <div className="credit-debit-cards mb-4">
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h3 className="mb-0">Thẻ tín dụng/Ghi nợ</h3>
            <button className="btn btn-warning">+ Thêm thẻ mới</button>
          </div>
          <div className="card-body">
            {cards.map(card => (
              <div key={card.id} className="card mb-3">
                <div className="card-body d-flex align-items-center">
                  <div style={{ display: 'flex', marginRight: '10px' }}>
                    <div style={{
                      width: '40px',
                      height: '25px',
                      backgroundColor: '#1A1F71',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '3px'
                    }}>
                      <span style={{ color: 'white', fontWeight: 'bold', fontSize: '0.8em' }}>VISA</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', marginRight: '10px' }}>
                    <div style={{
                      width: '40px',
                      height: '25px',
                      backgroundColor: 'white',
                      border: '1px solid #1A1F71',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '3px'
                    }}>
                      <span style={{ color: '#1A1F71', fontWeight: 'bold', fontSize: '0.8em' }}>VISA</span>
                    </div>
                  </div>
                  {card.isDefault && (
                    <span style={{
                      backgroundColor: '#28a745',
                      color: 'white',
                      padding: '2px 8px',
                      borderRadius: '12px',
                      fontSize: '0.8em',
                      marginRight: '10px'
                    }}>Mặc định</span>
                  )}
                  <span style={{ marginRight: '10px', flex: 1 }}>{card.number}</span>
                  <button onClick={() => handleDelete(card.id, true)} className="btn btn-danger me-2">Xóa</button>
                  {!card.isDefault && (
                    <button onClick={() => handleSetDefault(card.id)} className="btn btn-outline-success">
                      Thiết lập mặc định
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bank-accounts">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="mb-0">Tài khoản ngân hàng</h3>
          <button className="btn btn-warning">+ Thêm tài khoản ngân hàng</button>
        </div>
        {bankAccounts.map(account => (
          <div key={account.id} className="card mb-2 p-3">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <div>{account.name}</div>
                <div>{account.number}</div>
              </div>
              <button onClick={() => handleDelete(account.id, false)} className="btn btn-danger">Xóa</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileBank;