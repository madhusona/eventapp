module.exports = {
   
    build: {  
      
      rollupOptions: {
        
        input:{
          index:'index.html',
          Gopi:'Gopinath/index.html',
          indhu:'Indhumathi/index.html',
          kavi:'kaviyarasan/index.html'                         
        },
        external:{
            css:'css/tailwind.css'
        }
      }
    }
  }
