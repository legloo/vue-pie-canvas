#### Usage

```
command:
npm install -S vue-pie-canvas


script:
import Pie from "vue-pie-canvas";

components: {
    Pie
  }
  data(){
      return{
       basedata: [
        {
          num: 200,//any size
          color: "black",
        },
        {
          num: 200,
          color: "yellow",
        },
        {
          num: 200,
          color: "green",
        },
      ],
      r: 50,
      id: "xxxx-1",//uniqueness
      }
  }
  
html:
<Pie :basedata="basedata" :r="r" :id="id" />

```

#### Preview
![image](https://github.com/zhuyuhaoliar/vue-pie-canvas/blob/main/lib/20201023110300preview.jpg?raw=true)