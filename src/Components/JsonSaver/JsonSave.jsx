import React from 'react';

class JsonSave extends React.Component {
  state = {
    inputlar: {
      ism: '',
      yosh: 0,
      manzil: '',
      telefon: '',
    },
  };

  yozishClick = () => {
    const { inputlar } = this.state;
    const jsonData = JSON.stringify(inputlar);

    fetch('/api/yozish', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: jsonData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('JSON yozildi:', data);
      })
      .catch((error) => {
        console.error('Xatolik sodir bo\'ldi:', error);
      });
  };

  render() {
    const { inputlar } = this.state;
    console.log({inputlar});
    return (
      <div>
        <h1>Inputlarni JSON faylga yozish</h1>
        <input
          type="text"
          placeholder="Ism"
          value={inputlar.ism}
          onChange={(e) => this.setState({ inputlar: { ...inputlar, ism: e.target.value } })}
        />
        <input
          type="number"
          placeholder="Yosh"
          value={inputlar.yosh}
          onChange={(e) => this.setState({ inputlar: { ...inputlar, yosh: e.target.value } })}
        />
        <input
          type="text"
          placeholder="Manzil"
          value={inputlar.manzil}
          onChange={(e) => this.setState({ inputlar: { ...inputlar, manzil: e.target.value } })}
        />
        <input
          type="text"
          placeholder="Telefon"
          value={inputlar.telefon}
          onChange={(e) => this.setState({ inputlar: { ...inputlar, telefon: e.target.value } })}
        />
        <button onClick={this.yozishClick}>JSON ga yozish</button>
      </div>
    );
  }
}

export default JsonSave;