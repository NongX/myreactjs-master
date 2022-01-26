import Theme from "./components/Theme";
export default function Ant() {
  return (
    <Theme className="container" title="Ant Title">
      {/* เวลามีการเรียกใช้ Theme เราสามารถแอบส่งข้อมูลบางอย่างไปให้ Theme ใช้ในการแสดงผลได้ 
      ซึ่งในกรณีนี้คือ attribute ที่ชื่อว่า title 
    ดังนั้นว่า Ant Title จึงไปโผล่ใน Theme ได้ */}

      <img src="https://cq.lnwfile.com/iuzwdy.jpg" />
    </Theme>
  );
}
