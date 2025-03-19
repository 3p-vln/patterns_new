import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */function c(){const e=document.createElement("style");e.textContent=`
      .button {
          padding: 10px;
          border: none;
          cursor: pointer;
          font-size: 16px;
          border-radius: 5px;
          margin: 5px;
      }

      .windows-button {
          background-color: red;
          color: white;
      }

      .mac-button {
          background-color: black;
          color: white;
      }

      .windows-checkbox input[type="checkbox"] {
          accent-color: #0078D7;
      }

      .mac-checkbox input[type="checkbox"] {
          accent-color: #007AFF;
      }
  `,document.head.appendChild(e)}class r{render(){return'<button class="button windows-button">Windows Button</button>'}}class a{render(){return'<div class="windows-checkbox"><input type="checkbox" id="windowsCheckbox"> <label for="windowsCheckbox">Windows Checkbox</label></div>'}}class s{render(){return'<button class="button mac-button">Mac Button</button>'}}class d{render(){return'<div class="mac-checkbox"><input type="checkbox" id="macCheckbox"> <label for="macCheckbox">Mac Checkbox</label></div>'}}class u{createButton(){return new r}createCheckbox(){return new a}}class b{createButton(){return new s}createCheckbox(){return new d}}function i(e){const t=e.createButton(),n=e.createCheckbox(),o=document.getElementById("uiContainer");o&&(o.innerHTML=t.render()+"<br>"+n.render())}c();document.getElementById("createUI")?.addEventListener("click",()=>{const e=document.getElementById("osSelect").value;let t;switch(e){case"windows":t=new u;break;case"mac":t=new b;break;default:throw new Error("Unsupported OS")}i(t)});
