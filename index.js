const yargs =require ("yargs")
const fs = require('fs/promises')
const path=require('path')



 


const argv=yargs
.option ('component', {alias:"c" , string : true})
.demandOption([`component`], 'Введите тип компонента')
.command(['create <name> [filename]', 'cr'], 'Создание шаблона', {}, function (argv){
 const filepath=path.resolve(argv.filename||argv.name)
 const content =`import  React from "react";
  function ${argv.name} (){
   return(
     <>
     <${argv.component}/>
     </> 
   )
 }
  export default ${argv.name}`
  fs.writeFile(argv.filename||`${filepath}.js`,argv.component?content:defaultContent)
 .then(()=>console.log("save"))
 .catch(()=>console.error('dont save',e))
})
.argv

  