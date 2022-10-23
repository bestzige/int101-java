<script setup lang="ts">
const bestzige = useBestZige();
</script>

<template>
  <div class="container">
    <h1 class="text-center text-primary mt-4">Java Data Types</h1>
    <div class="text-detail">
      variable แต่ละตัวจะใช้พื้นที่ใน memory จำนวนหนึ่ง
      จะมากน้อยเพียงใดขึ้นอยู่กับ data type variable ใน java มี data type
      ซึ่งแบ่งออกเป็น 2 groups หลักๆ คือ
      <br />
      <span class="mt-4 text-danger">ข้อมูลพื้นฐาน (Primitive Data Types)</span
      ><br />

      <span class="text-info">boolean</span> มีขนาดที่ไม่แน่นอน
      ใช้กับข้อมูลประเภทตรรกศาสตร์เป็นได้อย่างใดอย่างหนึ่ง true หรือ false<br />
      <span class="text-info">byte</span> 8 bit ใช้กับตัวเลข ค่าตั้งแต่ -128 to
      127<br />
      <span class="text-info">short</span> 16 bit ใช้กับตัวเลข ค่าตั้งแต่-32.768
      to 32.767<br />
      <span class="text-info">char</span> 16 bit ใช้กับข้อมูลชนิดตัวอักษร
      Unicode character<br />
      <span class="text-info">int</span> 32 bit ใช้กับตัวเลข ค่าตั้งแต่
      -2.147.483.648 to 2.147.483.647<br />
      <span class="text-info">long</span> 64 bit ใช้กับตัวเลข ค่าตั้งแต่
      เยอะมากๆขอละไว้<br />
      <span class="text-info">float</span> 32 bit ใช้กับเลขทศนิยม ค่าตั้งแต่
      เยอะมากๆขอละไว้ <br />
      <span class="text-info">double</span> 64 bit ใช้กับเลขทศนิยม ค่าตั้งแต่
      เยอะมากๆขอละไว้<br />

      <span class="text-warning"
        >Primitive data types พวกนี้ไม่ใช่ object ไม่มีการ reference ถึง object
        ใดๆ</span
      >

      <br />
      <span class="mt-4 text-danger"
        >2. Object Reference คือ
        ประเภทของตัวแปรในการอ้างถึงข้อมูลที่ถูกเก็บไว้ใน memory โดยจะเก็บ
        address ที่มีการ reference ถึงแหล่งเก็บที่เก็บค่าจริงๆนั้นอยู่
        นั่นหมายความว่าเป็นการ reference ถึง object ดังนั้นคุณสามารถมี multiple
        references ถึงแหล่งเก็บตัวเดียวกันได้เพราะเป็น Object ซึ่งคุณสามารถสร้าง
        Object Reference มาใช้งานเป็นชนิดของคุณเอง แต่ในภาษา Java ได้มีการสร้าง
        Object Reference หลักไว้ให้คุณเรียกใช้งาน มีดังนี้</span
      ><br />

      <span class="text-info">Class</span> เป็นชุดของคําแนะนํา
      มันอธิบายเนื้อหาของวัตถุ<br />
      <span class="text-info">Array</span>
      มีโครงสร้างข้อมูลขนาดคงที่ซึ่งจัดเก็บองค์ประกอบประเภทเดียวกัน<br />
      <span class="text-info">Annotations</span>
      มีวิธีการเชื่อมโยงข้อมูลเมตากับองค์ประกอบของโปรแกรม<br />
      <span class="text-info">Interface</span>จะถูกเรียกใช้โดย Class ของ java<br />
      <span class="text-info">Enumeration</span>
      เป็นคลาสพิเศษที่ปลอดภัยสําหรับประเภท แต่ละองค์ประกอบภายใน enum
      เป็นตัวอย่างของอีนัมนั้น<br />
    </div>
  </div>
</template>
