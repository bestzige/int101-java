<template>
  <div class="container">
    <h1 class="text-center text-primary mt-4">Java Syntax</h1>
    <div class="text-detail">
      Java file มีองค์ประกอบพื้นฐานดังต่อไปนี้<br />

      1.Package คือ ชื่อ directory ที่มี Class หรือ Interfaces บรรจุเอาไว้
      ประโยชน์ของมันคือการ grouping classes หรือ interfaces
      ที่มีความเกี่ยวข้องกัน<br />
      <strong class="mt-4">การประกาศ package (directory);</strong>
      <img
        width="500"
        src="~/assets/images/define_package.png"
        class="rounded mx-auto d-block img-thumbnail mt-2"
        alt="Define Package Example"
      />
      <span class="text-alt text-secondary">Code Example</span>

      <br />

      2.Import คือ การบอก Java compiler ว่า Java file นี้ ใช้ องค์ประกอบ ของ
      Java file อื่นๆ เช่น ต้องการจะเรียกใช้ method<br />
      หรือ ฟังก์ชัน ใดๆ(อัลกอรึทึมที่ถูกเขียนไว้แล้ว) มาใช้งานใน Java file
      ของคุณเอง<br />
      <strong class="mt-4">การประกาศ import (java file);</strong>
      <img
        width="500"
        src="~/assets/images/import_example.png"
        class="rounded mx-auto d-block img-thumbnail mt-2"
        alt="Import Example"
      />
      <span class="text-alt text-secondary">Code Example</span>

      <br />

      3.Class ในที่นี้มัน คือ ชื่อ ของ Java file นั้นเอง<br />
      <strong class="mt-4">การประกาศ public class (className) { }</strong>
      <img
        width="500"
        src="~/assets/images/define_class.png"
        class="rounded mx-auto d-block img-thumbnail mt-2"
        alt="Define Class Example"
      />
      <span class="text-alt text-secondary">Code Example</span>

      <br />

      4.Field คือ ตัวแปรที่ใช้อ้างอิงถึงข้อมูลที่ถูกเก็บใน memory แบ่งออกเป็น 2
      ประเภทหลักๆได้แก่<br />
      4.1 <span class="text-danger">static หรือ class variable</span> คือ
      ตัวแปรของ class จะถูกสร้างขึ้นเมื่อ class ถูก load ดังนั้น ทุก object ของ
      class<br />
      สามารถเข้าถึงตัวแปรนี้ได้โดยตรง การประกาศ static (typeของตัวแปร)
      (ชื่อตัวแปร)<br />
      4.2 <span class="text-danger">non-static หรือ instance variable</span> คือ
      ตัวแปรของ object จะถูกสร้างขึ้นเมื่อประกาศสร้าง object
      และคำสั่งนั้นทำงาน)<br />
      <strong class="mt-4">การประกาศ (dataType) (variableName);</strong>
      <img
        width="500"
        src="~/assets/images/field_example.png"
        class="rounded mx-auto d-block img-thumbnail mt-2"
        alt="Field Example"
      />
      <span class="text-alt text-secondary">Code Example</span>

      <br />

      5.Constructor คือ ส่วนที่ใช้กำหนดค่าเริ่มต้นให้กับตัวแปรของ object
      มันจะทำงานอัตโนมัติเมื่อมีการ new Object ขึ้นมา<br />
      <strong class="mt-4"
        >การประกาศ constructor ต้องมีชื่อเหมือน class เท่านั้น (constructor) { }
      </strong>
      <img
        width="500"
        src="~/assets/images/constructor_example.png"
        class="rounded mx-auto d-block img-thumbnail mt-2"
        alt="Constructor Method Example"
      />
      <span class="text-alt text-secondary">Code Example</span>

      <br />

      6.Method คือ การกระทำ,พฤติกรรม,อังกอรึทึม,การบวนการทำงาน ต่างๆของ Java
      Program ของคุณแบ่งออกเป็น 2 ประเภทหลักๆ ได้แก่<br />
      <div class="row mx-auto mt-2">
        <div class="col-12 col-lg-6">
          6.1
          <span class="text-danger">static method หรือ class method</span> คือ
          method ในการ start ดำเนินการของโปรแกรมคุณ
          การทำงานของโปรแกรมคุณจะถูกสั่งจากคำสั่งใน method นี้เป็นหลัก และ
          method นี้ เป็น method ของ class จะถูกสร้างขึ้นเมื่อ class ถูก load<br />
          <strong class="mt-4">
            การประกาศ public static void main(String[] args){ }</strong
          >
          <img
            width="500"
            src="~/assets/images/static_class_method.png"
            class="rounded mx-auto d-block img-thumbnail mt-2"
            alt="Static Class Example"
          />
          <span class="text-alt text-secondary">Code Example</span>
        </div>
        <div class="col-12 col-lg-6">
          6.2 <span class="text-danger">instance method</span> คือ method ของ
          object จะถูกสร้างขึ้นและทำงานเมื่อประกาศสร้าง object และ method
          ถูกเรียกใช้งาน<br />
          <strong class="mt-4">
            การประกาศ ทำได้ 2 อย่าง คือ แบบ มี return และ ไม่มี
            <br />return void (methodName) { } หรือ<br />
            (returnDataType) (methodName) { return (returnValue); }</strong
          >
          <img
            width="500"
            src="~/assets/images/instance_method.png"
            class="rounded mx-auto d-block img-thumbnail mt-2"
            alt="Instance Method Example"
          />
          <span class="text-alt text-secondary">Code Example</span>
        </div>
      </div>

      <br />

      7.Object คือ instance เป็นการสร้างสิ่งของ หรือ วัตถุ ที่ เกิดขึ้นจาก class
      <br />
      <strong class="mt-4"
        >การประกาศ (className) (objectName) = new (use method constructors);
        และสามารถอ้างถึง ตัวแปร และ method ของ instance ที่ถูกสร้างขึ้นใน class
        นั้นๆได้ด้วยคำสั่งดังต่อไปนี้ (variableName).(methodName);
      </strong>
      <img
        width="500"
        src="~/assets/images/use_class_example.png"
        class="rounded mx-auto d-block img-thumbnail mt-2"
        alt="USe Class Example"
      />
      <span class="text-alt text-secondary">Code Example</span>

      <br />

      <span class="text-danger mt-4">ตัวอย่างโค๊ดทั้งหมด</span>
      <img
        width="700"
        src="~/assets/images/code_example.png"
        class="rounded mx-auto d-block img-thumbnail mt-2"
        alt="All Code Example"
      />
      <span class="text-alt text-secondary">Code Example</span>

      <img
        width="700"
        src="~/assets/images/code_result.png"
        class="rounded mx-auto d-block img-thumbnail mt-2"
        alt="Code Result"
      />
      <span class="text-alt text-secondary">Result Example</span>
    </div>
  </div>
</template>
