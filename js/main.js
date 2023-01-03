/*riprodurre la ToDoList come viste insieme questa mattina,
ma con una struttura di array di oggetti e non un array di semplici stringhe.*/


const { createApp } = Vue

createApp({
  data() {
    return {
    logo:  './img/logo copia.png',  
    errore: false,
    newTask:'',
      tasks: [
          
        {
            text: "Andare a fare la spesa",
            done: true
         },
        {
            text: "Controllare le Email",
            done: false
        },
        {
            text: "Mettere la benzina nella macchina",
            done: false
        },
        {
            text: "Fare i compiti", 
            done: false 
        },
        {
            text: "Portare fuori la spazzatura",
            done: false
        },
        {
            text: "Passare al bar",
            done: true
        }
      ],
    }
  },
  methods : {
    addTask(){
      if(this.newTask.length< 5 || this.newTask === ''){
          this.errore = true;
      }else{
          this.tasks.unshift({text: this.newTask,done: false});
          this.errore = false;
      }
        this.newTask = '';
      },
      
      }
}).mount("#list")


