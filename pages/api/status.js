// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ status: "fail" });
  const { status, amount, merchant_order_id, transaction_id } = req.body;
  const url = `https://api.telegram.org/bot${process.env.TOKEN}/sendMessage?chat_id=${process.env.CHAT_ID}&text=${status}+${amount}`;
  const checkValidation = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      if (json.ok) {
        console.log("Sended");
      } else {
        console.log("Send fail");
      }
    } catch (e) {
      console.log(e);
    }
  };
  checkValidation(url);
}