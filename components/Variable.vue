<script setup lang="ts">
const bestzige = useBestZige();
</script>

<template>
  <div class="container">
    <h1 class="text-center text-primary mt-4">Java Variable</h1>
    <div class="text-detail">
      Variable คือ ตัวแปรในการอ้างถึงข้อมูลที่ถูกเก็บไว้ใน memory ที่ program
      ของคุณจำเป็นต้องใช้งานมัน หรือ อาจกล่าวได้ว่า มันคือ piece of memory ก็ได้
      <br />
      <span class="mt-4 text-danger"
        >Java Variable ในภาษา java มี 4 ประเภท ดังนี้</span
      ><br />

      <span class="text-info">1. Non - static field</span>
      <p>เป็นตัวแปรที่เป็นของ object เรียก instance variable</p>

      <span class="text-info">2. Static field</span>
      <p>
        เป็นตัวแปรที่เป็นของ class ดังนั้น object ทั้งหมดที่ถูกสร้างจาก class
        นี้จะมีค่าของตัวแปรนี้เหมือนกัน
      </p>

      <span class="text-info">3. Local Variable </span>
      <p>
        เป็นตัวแปรที่ประกาศภายใน method เข้าถึงได้เฉพาะใน method
        ที่ประกาศมันเท่านั้นจะเกิดเมื่อ method นั้นทำงานและจะตายเมื่อ method
        นั้นสิ้นสุดการทำงานแล้ว
      </p>

      <span class="text-info">4. Parameter </span>
      <p>
        เป็นตัวแปรที่ถูกส่งผ่านไปให้ method เมื่อเรียกใช้ method
        และสามารถเข้าถึงได้ภายใน method ที่เรียกเท่านั้น
      </p>
    </div>

    <h1 class="text-center text-primary mt-4">
      กฎการตั้งชื่อ Java Variable (หลักของภาษาบังคับ)
    </h1>
    <div class="text-detail">
      <p>
        1.ชื่อ Variable เป็น case sensitive หมายความว่า ตัวพิมพ์เล็ก หรือ
        ตัวพิมพ์ใหญ่ มีผลต่างกันไม่เท่ากัน
      </p>
      <p>
        2.ชื่อ Variable ต้องขึ้นด้วย อักษร , $ ,_ตัวอักษร
        เท่านั้นไม่สามารถใช้ตัวเลขขึ้นต้นได้
      </p>
      <p>
        3.ชื่อ Variable ต้องไม่ตรงกับคำสงวน ของภาษา เช่น คำว่า
        <span
          v-for="(keyword, idx) of bestzige.javaKeyword"
          :key="idx"
          class="text-warning text-break"
          >{{ keyword }},
        </span>
        เป็นต้น
      </p>
    </div>

    <h1 class="text-center text-primary mt-4">
      กฎการตั้งชื่อ Java Variable
      ที่เป็นมาตรฐานสากลของนักพัฒนาใช้กันทั่วโลก(ไม่บังคับไม่ผิดหลักภาษา)
    </h1>
    <div class="text-detail">
      <p>
        1.ชื่อ instance ทุกอย่างเขียนเป็น lowercase(ตัวพิมพ์เล็ก)
        ถ้าประกอบด้วยคำหลายคำ คำถัดไปตัวแรกของแต่ละคำเป็นตัวพิมพ์ใหญ่ เช่น
        bigApple
      </p>
      <p>
        2.แม้ว่า java จะอนุญาติ คุณก็ไม่ควรใช้ชื่อขึ้นต้นด้วย $ หรือ _ตัวอักษร
      </p>
      <p>
        3.static final field(ค่าคงที่) ชื่อทุกตัวอักษรให้ใช้
        uppercase(ตัวพิมพ์ใหญ่)โดยทั่วไปใช้ _ ในการแยกคำเช่น EXCHANGE_RATE
      </p>
    </div>
  </div>
</template>
