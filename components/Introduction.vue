<template>
  <div class="container">
    <h1 class="text-center text-primary mt-4">Java Introduction</h1>
    <div class="text-detail">
      Java คิดค้นโดยบริษัท Sun Microsystems By James Gosling ทุกวันนี้เป็นของ
      Oracle<br />
      Java เป็นภาษาระดับสูง แข็งแรง ปลอดภัย และเป็น Object-oriented programming
      language<br />
      <img
        width="320"
        height="240"
        src="~/assets/images/freefeast_gosling.jpg"
        class="rounded mx-auto d-block img-thumbnail mt-2 mb-2"
        alt="James Gosling"
      />
      <span class="text-alt text-secondary"
        >รูปข้างต้นคือ หน้าตาของ James Gosling ผู้คิดค้น Java</span
      >
    </div>
    <div class="row mx-auto">
      <div class="col-12 col-lg-6">
        <img
          width="500"
          src="~/assets/images/java_tech_runtime_enviroment.jpg"
          class="rounded mx-auto d-block img-thumbnail mt-2 mb-2"
          alt="Java Runtime Enviroment"
        />
      </div>
      <div class="col-12 col-md-6 mt-2 mb-2">
        <p class="text-detail">
          หลักการทำงานของ Java Code คือ?<br />
          Java Code ที่เขียนทั้งหมดจะถูกเก็บใน ไฟล์ <strong>.java</strong><br />
          จากนั้นจะถูก compile เป็น byte codes ไปเก็บอยู่ในไฟล์
          <strong>.class</strong><br />
          เพื่อนำ <strong>Byte Codes</strong> ไปสั่ง OS ให้ทำงาน โดย Run<br />
          ผ่าน JVM ซึ่งมันจะแปลงคำสั่งอีกทีให้เข้ากับ OS ที่ใช้งาน<br />
          สามารถสร้างไฟล์ <strong>.java</strong> ที่มี Classname คนละชื่อกับ
          <strong>ClassName.java</strong>
          ได้ ถ้า Class นั้นไม่ได้ระบุ public
        </p>
      </div>
    </div>
  </div>
</template>
