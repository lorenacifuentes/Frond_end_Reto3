/**
 * FUNCIONES DE LA TABLA CATEGORÍA
 */
 function consultarCategory(){
    console.log("se esta ejecutando")
    $.ajax({
        url:"http://129.151.125.224:8080/api/Category/all",
        //url:"http://localhost:8080/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            obtRespuestaCategory(respuesta);
            let $select = $("#select-category"); ////// ESTO ES LO QUE PERMITE CONECTAR UNO CON EL OTRO  //////
            $.each(respuesta, function (id, name) {
                $select.append('<option value='+name.id+'>'+name.name+'</option>');
                console.log("select "+name.id);
            }); 
        }
    
    
    })

}
function  obtRespuestaCategory(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        //myTable+="<td>"+respuesta[i].room.hotel+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);
}

function guardarCategorias(){
    let var2 = {
        name:$("#Cname").val(),
        description:$("#Cdescription").val(),
        //room: {id:+$("#select-room").val()},
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        
        url:"http://129.151.125.224:8080/api/Category/save",
        //url:"http://localhost:8080/api/Category/save",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });

}
/**
 * FUNCIONES DE LA TABLA ROOM
 */

function consultarRoom(){
    console.log("se esta ejecutando")
    $.ajax({
        url:"http://129.151.125.224:8080/api/Room/all",
        //url:"http://localhost:8080/api/Room/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            obtRespuestaRoom(respuesta);
            let $select = $("#select-room"); ////// ESTO ES LO QUE PERMITE CONECTAR UNO CON EL OTRO  //////
            $.each(respuesta, function (id, name) {
                $select.append('<option value='+name.id+'>'+name.name+'</option>');
                console.log("select "+name.id);
            });  
        }
    
    })

}
function obtRespuestaRoom(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].id+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].hotel+"</td>";
        myTable+="<td>"+respuesta[i].stars+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td>"+respuesta[i].category.name+"</td>"; ////// ESTO ES LO QUE PERMITE CONECTAR UNO CON EL OTRO  //////
       // myTable+="<td>"+respuesta[i].messageText.messageText+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado2").html(myTable);
}

function guardarRoom(){
    let var2 = {
        
        name1:$("#Roname").val(),
        hotel:$("#Rohotel").val(),
        stars:$("#Rostars").val(),
        description:$("#Rodescription").val(),
     
        };
       
        console.log(var2);
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        
        url:"http://129.151.125.224:8080/api/Client/save",
        //url:"http://localhost:8080/api/Client/save",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });

}
/**
 * FUNCIONES DE LA TABLA CLIENTE
 */

function consultarCliente(){
    console.log("se esta ejecutando")
    $.ajax({
        url:"http://129.151.125.224:8080/api/Client/all",
        //url:"http://localhost:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            obtenerCliente(respuesta);
            let $select = $("#select-client"); 
            $.each(respuesta, function (id, name) {
                $select.append('<option value='+name.id+'>'+name.name+'</option>');
                console.log("select "+name.id);
            }); 
        }
    
    })

}
function obtenerCliente(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].age+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado3").html(myTable);
}

function guardarCliente(){
    let var2 = {
        
        email:$("#Clemail").val(),
        password:$("#Clpassword").val(),
        name:$("#Clname").val(),
        age:$("#Clage").val(),
     
        };
       
        console.log(var2);
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        
        url:"http://129.151.125.224:8080/api/Client/save",
        //url:"http://localhost:8080/api/Client/save",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });

}


/**
 * FUNCIONES DE LA TABLA MESSAGE
 */
 function consultarMessage(){
    console.log("se esta ejecutando")
    $.ajax({
        url:"http://129.151.125.224:8080/api/Message/all",
        //url:"http://localhost:8080/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            obtTablaMessage(respuesta);
            let $select = $("#select-message"); 
            $.each(respuesta, function (id, messageText) {
                console.log(respuesta);
                $select.append('<option value='+messageText.i+'>'+messageText.messageText+'</option>');
                console.log("select "+messageText.id);
            }); 
        }
    
    })

}
function obtTablaMessage(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";       
        myTable+="<td>"+respuesta[i].messageText+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado4").html(myTable);
}

function guardarMessage(){
    let var2 = {
        messageText:$("#MmessageText").val()   
        };
       
        console.log(var2);
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        
        url:"http://129.151.125.224:8080/api/Message/save",
        //url:"http://localhost:8080/api/Message/save",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });

}

/**
 * FUNCIONES DE LA TABLA RESERVATION
 */
 function consultarReservation(){
    console.log("se esta ejecutando")
    $.ajax({
        url:"http://129.151.125.224:8080/api/Reservation/all",
        //url:"http://localhost:8080/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            obtenerReservation(respuesta);
            let $select = $("#select-Reservation"); ////// ESTO ES LO QUE PERMITE CONECTAR UNO CON EL OTRO  //////
            $.each(respuesta, function (id, startDate) {
                $select.append('<option value='+startDate.id+'>'+startDate.startDate+'</option>');
                console.log("select "+startDate.id);
            }); 
        }
    
    })

}
function obtenerReservation(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        
        myTable+="<td>"+respuesta[i].idReservation+"</td>";
        myTable+="<td>"+respuesta[i].startDate+"</td>";
        myTable+="<td>"+respuesta[i].devolutionDate+"</td>"; 
        myTable+="<td>"+respuesta[i].client.name+"</td>";////// ESTO ES LO QUE PERMITE CONECTAR UNO CON EL OTRO  //////
        myTable+="<td>"+respuesta[i].room.name+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado5").html(myTable);
}

function guardarReservation(){
    let var2 = {
        startDate:$("#RestartDate").val(),
        devolutionDate:$("#RedevolutionDate").val(),
        client: {id:+$("#select-client").val()}, ////// ESTO ES LO QUE PERMITE CONECTAR UNO CON EL OTRO  //////
        room: {id:+$("#select-room").val()},
        };
       
        console.log(var2);
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        
        url:"http://129.151.125.224:8080/api/Reservation/save",
        //url:"http://localhost:8080/api/Reservation/save",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");   
        }
        });
}



