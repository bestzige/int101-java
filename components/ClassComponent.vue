<script setup lang="ts">
const bestzige = useBestZige();
</script>

<template>
  <div class="container">
    <h1 class="text-center text-primary mt-4">Java Class Component</h1>
    <div class="text-detail">
      <span class="mt-4 text-danger">Class</span><br />
      <p>
        Class คือ กลไลที่ใช้ในการ grouping Variables and Methods
        ที่มีความเกี่ยวข้องกัน ภายใน Class หลักๆจะประกอบด้วย Fields Constructors
        Methods
      </p>

      <strong>การประกาศ Class ทำการได้ดังนี้</strong>
      <img
        width="500"
        src="~/assets/images/class_define_component.png"
        class="rounded mx-auto d-block img-thumbnail mt-2"
        alt="Class Component Image"
      />
      <span class="text-alt text-secondary">Code Example</span>

      <br />

      <span class="mt-4 text-danger">Class and Object</span><br />
      <p>
        Class เป็น Template(แม่พิมพ์) ของกาสร้าง Object เราสามารถสร้าง Object
        ได้มากกว่า 1 โดยใช้ Class แม่แบบในการสร้าง
      </p>

      <strong>การสร้าง Object ทำได้ดังนี้</strong>
      <img
        width="500"
        src="~/assets/images/object_component.png"
        class="rounded mx-auto d-block img-thumbnail mt-2"
        alt="Class Component Image"
      />
      <span class="text-alt text-secondary">Code Example</span>

      <br />

      <p>
        การสร้าง Object ของ Class เราจะเรียกอีกแบบหนึ่งว่า Instance ของ Class ใน
        Code ตัวอย่างข้างต้น กล่าวได้ว่า somchai somying และ sompade เป็น
        Instance ของ Student<br />
        การใช้ Object ในการเข้าถึง Fields และ Method ของ Object
        นั้นๆทำได้โดยการใช้ เครื่องหมายดอท (.) ต่อท้ายชื่อ Object
      </p>

      <img
        width="500"
        src="~/assets/images/access_object_field.png"
        class="rounded mx-auto d-block img-thumbnail mt-2"
        alt="Class Component Image"
      />
      <span class="text-alt text-secondary">Code Example</span>

      <br />

      <span class="mt-4 text-danger">Fields</span><br />
      <p>
        Fields คือ Variable ภายใน Class ซึ่งเป็นการกล่าวถึงคุณลักษณะของ Class
      </p>

      <strong>การประกาศ Fields ทำได้ดังนี้</strong>
      <br />
      <span class="text-warning">
        หมายเหตุ : การประกาศ Fields สิ่งที่จำเป็นต้องมี คือ (data type) และ
        (name) นอกนั้นจะมีหรือไม่มีก็ได้ตามความเหมาะสมของ program คุณ<br />
        access_modifier เป็นการกำหนดว่าให้ Object ใดเข้าถึง Fields
        นี้ได้บ้าง(จะขอกล่าว detail ในบทความต่อไป)<br />
        static เป็นการบอกว่า Fields นี้เป็นของ Class จะถูกสร้างขึ้นพร้อมกับการ
        load Class ทุก Object
        ที่สร้างจะมีตัวแปรนี้และค่าในตัวแปรนี้เหมือนกันหมดถึงถูกเปลี่ยนค่าก็เปลี่ยนตามกันหมด<br />
      </span>
      <img
        width="500"
        src="~/assets/images/field_static_example.png"
        class="rounded mx-auto d-block img-thumbnail mt-2"
        alt="Class Component Image"
      />
      <span class="text-alt text-secondary">Code Example</span>

      <br />
      <span class="text-warning">
        ถ้าหากไม่มี keyword static นั่นหมายความว่า Fields นี้เป็น non-static
        เป็นการบอกว่า Fields นี้เป็นของ Object
        จะถูกสร้างขึ้นพร้อมกับการประกาศสร้าง Object ซึ่งแต่ละ Object อาจมีค่าใน
        Fields นี้ไม่เหมือนกันก็ได้ กล่าวคือ แต่ละ Object จะมีค่าเฉพาะของ Fields
        ของ Object ตนเองได้<br />
      </span>
      <img
        width="500"
        src="~/assets/images/non_field_static_example.png"
        class="rounded mx-auto d-block img-thumbnail mt-2"
        alt="Class Component Image"
      />
      <span class="text-alt text-secondary">Code Example</span>

      <br />
      <span class="text-warning"
        >final เป็นการบอกว่า Fields นี้ไม่สามรถเปลี่ยนแปลงค่าได้(เป็นค่าคงที่)
        เมื่อกำหนดค่าให้มันแล้ว<br />
      </span>
      <strong>ตัวอย่าง การประกาศ</strong>
      <img
        width="500"
        src="~/assets/images/final_example.png"
        class="rounded mx-auto d-block img-thumbnail mt-2"
        alt="Class Component Image"
      />
      <span class="text-alt text-secondary">Code Example</span>

      <br />

      <span class="mt-4 text-danger">Method</span><br />
      <p>
        Method คือที่ใส่ operation,อังกรึทึม หรือ function ของ Variable คุณ
        ซึ่งประกาศใน Class จริงๆพูดง่ายๆมันก็คือ group ของ java
        statement(คำสั่ง) ที่ดำเนินการอะไรสักอย่างเกี่ยวกับข้อมูลบางส่วน
      </p>

      <strong>ตัวอย่าง</strong>
      <img
        width="500"
        src="~/assets/images/method_example.png"
        class="rounded mx-auto d-block img-thumbnail mt-2"
        alt="Class Component Image"
      />
      <span class="text-alt text-secondary">Code Example</span>

      <br />

      <p>
        Method Parameter เป็นการส่งผ่านค่าไปให้ Method ซึ่งจะส่งตอนเรียกใช้
        Method<br />
        Parameter จะเหมือนกับ Variables
        คุณสามารถอ่านค่าและเปลี่ยนแปลงค่ามันตามใจชอบ
      </p>

      <strong>ตัวอย่าง</strong>
      <img
        width="500"
        src="~/assets/images/method_parameter_example.png"
        class="rounded mx-auto d-block img-thumbnail mt-2"
        alt="Class Component Image"
      />
      <span class="text-alt text-secondary">Code Example</span>

      <br />

      <p>
        Parameter สามารถประกาศ final เช่นเดียวกัน Variable ทำให้ค่าของ final
        parameter ไม่สามรถเปลี่ยนแปลงค่าได้ หลังจากถูกส่งค่ามาถึง method แล้ว
      </p>

      <strong>ตัวอย่าง</strong>
      <img
        width="500"
        src="~/assets/images/method_parameter_final_field_example.png"
        class="rounded mx-auto d-block img-thumbnail mt-2"
        alt="Class Component Image"
      />
      <span class="text-alt text-secondary">Code Example</span>

      <br />

      <p>
        Local Variables เป็นตัวแปรที่ประกาศใน method
        สามารถใช้งานได้เหมือนตัวแปรอื่นๆ แต่จะถูกสร้างขึ้นเมื่อ method
        นั้นถูกเรียกทำงาน และ จะถูกลบหลังจาก method นั้นทำงานเสร็จสิ้นแล้ว
      </p>

      <strong>ตัวอย่าง</strong>
      <img
        width="500"
        src="~/assets/images/method_parameter_final_field_local_example.png"
        class="rounded mx-auto d-block img-thumbnail mt-2"
        alt="Class Component Image"
      />
      <span class="text-alt text-secondary">Code Example</span>

      <br />

      <p>
        Method Return การ Return ค่า เป็นจุดสิ้นสุดของ function หรือ method
        มีไว้เพื่อส่งค่ากลับไปให้ผู้เรียกหรือตอบสนองกับผู้เรียก ภาษาบ้านๆก็คือ
        เป็นคำตอบของคำถาม ผลการทำงาน ผลลัพธ์ เช่น function
        นี้นั้นนูนทำงานได้หรือไม่ คำตอบ (ได้) / (ไม่ได้) อารมณ์ประมาณนั้น<br /><br />
        การประกาศ <br />
        method ที่มี Return นั้น ต้องระบุ Data Type ที่ต้องการ Return
        ไว้ข้างหน้าชื่อ method แทนที่ void ในตัวอย่างก่อนหน้านี้
      </p>

      <strong>ตัวอย่าง</strong>
      <img
        width="500"
        src="~/assets/images/method_return_datatype.png"
        class="rounded mx-auto d-block img-thumbnail mt-2"
        alt="Class Component Image"
      />
      <span class="text-alt text-secondary">Code Example</span>

      <br />

      <p>
        Calling Method in Method เป็นการเรียก Method หนึ่งมาทำงานในอีก Method
        หนึ่ง
      </p>

      <strong>ตัวอย่าง</strong>
      <img
        width="500"
        src="~/assets/images/calling_method_in_other_method.png"
        class="rounded mx-auto d-block img-thumbnail mt-2"
        alt="Class Component Image"
      />
      <span class="text-alt text-secondary">Code Example</span>

      <br />

      <span class="mt-4 text-danger">Constructors </span><br />
      <p>
        Constructors เป็น method เริ่มต้นของ Object กล่าวคือ เป็น method
        พิเศษที่ทำงานตอนประกาศสร้าง Object เรียกใช้ Constructors หลัง keyword
        (new) ตอนสร้าง Object<br /><br />
        การประกาศ <br />
        method Constructors ต้องมีชื่อเหมือน Class เท่านั้น
        ที่เป็นแบบนี้เพื่อเป็นการบอก Compiler ว่า method นี้คือ method
        Constructors นอกจากนี้ method นี้จะไม่มี return type
      </p>

      <strong>ตัวอย่าง</strong>
      <br />
      <img
        width="500"
        src="~/assets/images/constructor_method.png"
        class="rounded mx-auto d-block img-thumbnail mt-2"
        alt="Class Component Image"
      />
      <span class="text-alt text-secondary">Code Example</span>

      <br />

      <p>
        Default,no-parameter Constructor ในภาษา java คุณไม่จำเป็นต้องเขียน
        method Constructors ของ Class แต่ถ้าคุณไม่ได้เขียน Compiler จะใส่
        Default Constructor ซึ่งเป็น No-Parameter Constructor
        ให้คุณอัตโนมัติเหมือนดังตัวอย่างข้างบนนี้ แต่ถ้าคุณกำหนด Constructor ของ
        Class เอง Compiler จะไม่ใส่ Default Constructor ให้กับ Class คุณ<br /><br />
        Method Constructors สามารถมี Parameter
        โดยทั่วไปแล้วมักใช้ในการกำหนดค่าเริ่มต้นให้กับ fields ของ Object
        เพื่อทำให้ fields มีค่าเริ่มต้นพร้อมใช้งานในตอนสร้าง Object
      </p>

      <strong>ตัวอย่าง</strong>
      <br />
      <img
        width="500"
        src="~/assets/images/constructor_with_parameter.png"
        class="rounded mx-auto d-block img-thumbnail mt-2"
        alt="Class Component Image"
      />
      <span class="text-alt text-secondary">Code Example</span>
    </div>
  </div>
</template>
