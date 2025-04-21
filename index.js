const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/send-sms', async (req, res) => {
  try {
    const { rec_1, msg_1, rec_2, msg_2, cnt } = req.body;

    const response = await axios.post(
      'https://apis.aligo.in/send_mass/',
      new URLSearchParams({
        key: 'r0oe4m7u7qpii9g8sfuqr8xgmeme2bvn',
        user_id: 'goyoopub',
        sender: '070-8065-1541',
        rec_1,
        msg_1,
        rec_2,
        msg_2,
        cnt,
        msg_type: 'LMS',
        title: '고유 알림',
        testmode_yn: 'Y',
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

app.get('/', (req, res) => {
  res.send('✅ Render 중계 서버 실행 중');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ 서버 실행 중 on port ${PORT}`);
});


app.get('/my-ip', async (req, res) => {
  try {
    const ipRes = await axios.get('https://api.ipify.org?format=json');
    res.json(ipRes.data); // { ip: "xxx.xxx.xxx.xxx" }
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});
