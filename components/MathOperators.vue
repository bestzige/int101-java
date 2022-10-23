<script setup lang="ts">
const bestzige = useBestZige();
</script>

<template>
  <div class="container">
    <h1 class="text-center text-primary mt-4">Java Math Operators</h1>
    <div class="text-detail">
      Variable คือ ตัวแปรในการอ้างถึงข้อมูลที่ถูกเก็บไว้ใน memory ที่ program
      ของคุณจำเป็นต้องใช้งานมัน หรือ อาจกล่าวได้ว่า มันคือ piece of memory ก็ได้
      <br />
      <span class="mt-4 text-danger"
        >ตัวดำเนินการทางคณิตศาสตร์ในภาษา java อยู่ 5 ตัวหลักๆ คือ</span
      ><br />

      <p>
        1. <span class="text-info">Addition</span>> เครื่องหมาย
        <strong>+</strong>
      </p>
      <p>
        2. <span class="text-info"> Subtraction</span> เครื่องหมาย
        <strong>-</strong>
      </p>
      <p>
        3. <span class="text-info">Multiplication</span> เครื่องหมาย
        <strong>*</strong>
      </p>
      <p>
        4. <span class="text-info">Division</span> เครื่องหมาย
        <strong>/</strong>
      </p>
      <p>
        5. <span class="text-info">Modulo</span> เครื่องหมาย
        <strong>%</strong> (เป็นการหารและเอาเศษจากการหารเป็นคำตอบ เช่น 10 % 3 =
        1)
      </p>

      <hr />

      <ul>
        <li>
          การทำงานของตัวดำเนินการ +,-,* และ /
          ที่มีเลขเฉพาะจำนวนเต็มจะได้คำตอบเป็นเลขจำนวนเต็ม
        </li>
        <li>
          การทำงานของตัวดำเนินการ +,-,* และ /
          ที่มีเลขทศนิยมอยู่ด้วยจะได้คำตอบเป็นเลขทศนิยม
        </li>
        <li>การทำงานของตัวดำเนินการ % จะได้คำตอบเป็นจำนวนเต็มเสมอ</li>
      </ul>

      <span class="text-warning"
        >หมายเหตุ : แต่คำตอบจริงๆที่ได้ ผลลัพธ์จะได้ตาม Data type
        ที่กำหนดให้กับตัวแปรที่เก็บผลลัพธ์ ถ้ากำหนดให้เป็น int
        ถึงได้คำตอบเป็นทศนิยม จำนวนทศนิยมจะถูกตัดทิ้ง เหลือแต่เลขจำนวนเต็ม</span
      ><br />

      <hr />

      <span class="mt-4 text-danger"
        >Precedence คือ
        เป็นเรื่องของลำดับความสำคัญในการดำเนินการทางคณิตศาสตร์ซึ่งในภาษา java
        จะคำนวนจากซ้ายไปขวาโดยทำจากลำดับความสำคัญสูงที่สุดก่อนแล้วไล่ไปหาต่ำ</span
      ><br />

      <ul>
        <li>ลำดับความสำคัญมีดังนี้ (ไล่จากสูงไปหาต่ำ)</li>
        <li>1. () , []</li>
        <li>2. * , / , %</li>
        <li>3. + , -</li>
      </ul>

      <img
        width="500"
        src="~/assets/images/math_operator_example.png"
        class="rounded mx-auto d-block img-thumbnail mt-2 mb-2"
        alt="James Gosling"
      />
      <span class="text-alt text-secondary">Code Example</span>

      <img
        width="500"
        src="~/assets/images/math_operator_result.png"
        class="rounded mx-auto d-block img-thumbnail mt-2 mb-2"
        alt="James Gosling"
      />
      <span class="text-alt text-secondary">Results</span>
    </div>
  </div>
</template>
