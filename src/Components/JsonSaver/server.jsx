const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3001;

app.use(bodyParser.json());

// JSON ma'lumotlarni qabul qilish va faylga saqlash
app.post('/saveData', (req, res) => {
  const formData = req.body;

  try {
    const jsonData = JSON.stringify(formData, null, 2);

    fs.writeFileSync('data.json', jsonData); // Faylni o'zgartiring

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Ma\'lumotlarni saqlashda xatolik yuz berdi.' });
  }
});

app.listen(port, () => {
  console.log(`Server ishga tushdi: http://localhost:${port}`);
});